{{#script}}
const OPENAI_API_KEY = plugin.getApiKeys().openAIChat;

async function generateDalleImageAndSaveToVault(prompt) {
  try {
    // Set up the request headers and body
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: prompt,
        n: 1,
        size: '1024x1024'
      })
    };

    // Make the request to OpenAI's API
    const response = await fetch('https://api.openai.com/v1/images/generations', requestOptions);

    if (!response.ok) {
      throw new Error(`OpenAI API request failed with status ${response.status}`);
    }

    // Get the image data from the response
    const imageData = await response.json();
    // Assuming the API returns a URL or binary data for the image
    const imageBinary = await requestUrl(imageData.data[0].url).then(res=>res.arrayBuffer)
    // Generate a random file name
    const randomFileName = `generated-image-${Math.random().toString(36).substring(2, 15)}.png`;
    const filePath = `z_Assets/ChatGPT/${randomFileName}`; // Prepend the "images" directory to the file name

    // Use the Vault API to save the image file
    const vault = app.vault; // Assuming this script has access to `app` from the environment

    // Check if the "images" directory exists, if not, create it
    let imagesDir = vault.getAbstractFileByPath('z_Assets/ChatGPT');
    if (!imagesDir) {
      await vault.createFolder('z_Assets/ChatGPT');
    }

    // Check if file exists, if so, remove it before writing new content
    let existingFile = vault.getAbstractFileByPath(filePath);
    if (existingFile && existingFile instanceof TFile) {
      await vault.delete(existingFile);
    }

    await vault.createBinary(filePath, new Uint8Array(imageBinary));

    // Insert a link to the new image file into the current note
    const editor =  app.workspace.getMostRecentLeaf().view.editor;
    const linkText = `![Generated Image](${filePath})\n`;
    editor.insertText(linkText);

  } catch (error) {
    console.error('Error generating or saving image:', error);
  }
}

// Call the function to generate an image and save it in the vault
const IMAGE_PROMPT = this.tg_selection;
await generateDalleImageAndSaveToVault(IMAGE_PROMPT);

{{/script}}