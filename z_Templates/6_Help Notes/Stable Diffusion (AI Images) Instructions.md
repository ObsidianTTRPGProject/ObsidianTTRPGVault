https://rentry.org/SDInstallation

**Local Install of Stable Diffusion for Windows (non-GUI)**

1.  Visit [https://huggingface.co/](https://huggingface.co/) and create an account
2.  Visit [https://huggingface.co/CompVis/stable-diffusion-v-1-4-original](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original), scroll down and select "Authorize"
3.  Download the checkpoint: [https://huggingface.co/CompVis/stable-diffusion-v-1-4-original/blob/main/sd-v1-4.ckpt](https://huggingface.co/CompVis/stable-diffusion-v-1-4-original/blob/main/sd-v1-4.ckpt)
4.  Download Stable Diffusion: [https://github.com/basujindal/stable-diffusion/archive/refs/heads/main.zip](https://github.com/basujindal/stable-diffusion/archive/refs/heads/main.zip)
5.  Unzip stable-diffusion-main.zip file to your preferred location and go to the stable-diffusion-main/models/ldm folder and make a new folder inside called stable-diffusion-v1
6.  Rename the downloaded sd-v1-4.ckpt to model.ckpt and move the file into the stable-diffusion-v1 folder
7.  Go back to the start of the stable-diffusion-main folder and open environment.yaml using Notepad
8.  Scroll down to dependencies: and add the line - git so it looks like:  
    dependencies:  
    - git  
    - python=3.8.5  
    - pip=20.3
9.  Download Miniconda from here: [https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe](https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe)
10.  Run Miniconda3-latest-Windows-x86_64.exe and install it
11.  Open Anaconda Prompt (miniconda3)
12.  Type cd _path to stable-diffusion-main folder_, so if you have it saved in Documents you would type cd Documents/stable-diffusion-main
13.  Run the command conda env create -f environment.yaml (you only need to do this step for the first time, otherwise skip it)
14.  Wait for it to process
15.  Run conda activate ldm
16.  Now you may create prompts using python scripts/txt2img.py --prompt "_insert prompt_"!  
    NOTE: If you are receiving CUDA out of memory errors, use python optimizedSD/optimized_txt2img.py instead of scripts/txt2img.py!  
    

-   Your images are saved to stable-diffusion-main/outputs/txt2img-samples/<prompt name> by default, you may change it by using --outdir _directory_name_ to change it
-   3 images are created by default and 5 for optimizedSD. If you would like less, use --n_samples _x_

**Prompt Modifiers**

--prompt - The main and first one that you use to generate images with  
--outdir - Specify the folder you wish to have your images saved to  
--skip_grid - Saves the output as individual images instead of a grid  
--ddim_steps - Specifies the amount of processing steps used. The higher the number the more times it'll work on rendering it. Higher steps DOES NOT mean a beter image. Every 50 steps multiplies processing time by 1 (Default: 50)  
--plms - Use PLMS sampling  
--laion400m - Use the LAION400M model during creation  
--n_samples - How many images should be created (Default: 3, 5 for optimizedSD)  
--H - Specify the image height, multiples of 64. Warning: Higher values drastically increase compute and VRAM usage (Default: 512)  
--W - Specify the image width, multiples of 64. Warning: Higher values drastically increase compute and VRAM usage (Default: 512)  
--C - Latent channels used (Default: 4)  
--scale - How close an image should match the prompt given. Lower numbers stray further away from the prompt and higher numbers try to be more accurate. Recommended to stay at default or up to 15-20 (Default: 7.5)  
--seed - Seed used during image generation  
--precision - [full, autocast]

**Common Errors**

-   If you are running out of memory and you have a sufficient GPU, use --n_samples 1 --n_iter 1 as well as keep the standard 512 width/height
-   If you receive any "No module named 'cv2', 'omegaconf', etc. errors, try pip install opencv-python and if that doesn't work, your installation may have been messed up you should start over.
-   If you're running into a lot of errors trying to get Stable Diffusion to work on your computer, chances are that the environment needs to be cleared out and recreated in order to start fresh again. First you'll want to type conda activate into your console to move into the base environment again.
-   Next, you'll want to type conda info --envs to verify the name of the environment you have installed.
-   After verifying the name of the environment, you'll want to type conda remove --name myenv --all where you replace myenv with the name of the environment you're uninstalling. Enter yes when prompted to allow it to finish the removal process.
-   Enter the cd path command, replacing the word path with the path to your Stable Diffusion folder where environment.yaml is located.
-   Follow installation instructions again, starting with conda env create -f environment.yaml.