---

database-plugin: basic

---

%% dbfolder:yaml
name: new database
description: new description
columns:
  __file__:
    key: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
  __created__:
    key: __created__
    input: metadata_time
    label: Created
    accessorKey: __created__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  __modified__:
    key: __modified__
    input: metadata_time
    label: Modified
    accessorKey: __modified__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  Level:
    input: number
    key: Level
    accessorKey: Level
    label: Level
    position: 0
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      media_width: 100
      media_height: 100
      isInline: false
  CastingTime:
    input: text
    accessorKey: CastingTime
    key: CastingTime
    label: CastingTime
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  School:
    input: text
    accessorKey: School
    key: School
    label: School
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
  Classes:
    input: tags
    accessorKey: Classes
    key: Classes
    label: Classes
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Sorcerer, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(9, 95%, 90%)"}
      - { label: "Cleric, Paladin, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(141, 95%, 90%)"}
      - { label: "Ranger, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(266, 95%, 90%)"}
      - { label: "Sorcerer, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(104, 95%, 90%)"}
      - { label: "Bard, Druid, Ranger", backgroundColor: "hsl(100, 95%, 90%)"}
      - { label: "Druid", backgroundColor: "hsl(313, 95%, 90%)"}
      - { label: "Cleric, Wizard", backgroundColor: "hsl(171, 95%, 90%)"}
      - { label: "Bard, Sorcerer, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(165, 95%, 90%)"}
      - { label: "Druid, Wizard", backgroundColor: "hsl(264, 95%, 90%)"}
      - { label: "Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(191, 95%, 90%)"}
      - { label: "Sorcerer, Warlock, Wizard", backgroundColor: "hsl(9, 95%, 90%)"}
      - { label: "Warlock", backgroundColor: "hsl(57, 95%, 90%)"}
      - { label: "Cleric, Warlock, Wizard, Monk", backgroundColor: "hsl(190, 95%, 90%)"}
      - { label: "Cleric", backgroundColor: "hsl(164, 95%, 90%)"}
      - { label: "Paladin", backgroundColor: "hsl(213, 95%, 90%)"}
      - { label: "Bard, Druid", backgroundColor: "hsl(146, 95%, 90%)"}
      - { label: "Bard, Cleric", backgroundColor: "hsl(236, 95%, 90%)"}
      - { label: "Cleric, Paladin, Sorcerer, Warlock, Wizard", backgroundColor: "hsl(178, 95%, 90%)"}
      - { label: "Druid, Ranger", backgroundColor: "hsl(154, 95%, 90%)"}
      - { label: "Bard, Cleric, Wizard", backgroundColor: "hsl(121, 95%, 90%)"}
      - { label: "Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(166, 95%, 90%)"}
      - { label: "Bard, Sorcerer, Warlock, Wizard", backgroundColor: "hsl(15, 95%, 90%)"}
      - { label: "Cleric, Paladin", backgroundColor: "hsl(66, 95%, 90%)"}
      - { label: "Druid, Sorcerer, Warlock, Wizard", backgroundColor: "hsl(78, 95%, 90%)"}
      - { label: "Bard, Cleric, Sorcerer, Wizard", backgroundColor: "hsl(50, 95%, 90%)"}
      - { label: "Sorcerer, Wizard", backgroundColor: "hsl(85, 95%, 90%)"}
      - { label: "Bard, Druid, Sorcerer, Warlock, Wizard", backgroundColor: "hsl(271, 95%, 90%)"}
      - { label: "Wizard", backgroundColor: "hsl(204, 95%, 90%)"}
      - { label: "Bard", backgroundColor: "hsl(33, 95%, 90%)"}
      - { label: "Bard, Druid, Sorcerer, Wizard", backgroundColor: "hsl(150, 95%, 90%)"}
      - { label: "Ranger", backgroundColor: "hsl(249, 95%, 90%)"}
      - { label: "Druid, Warlock", backgroundColor: "hsl(72, 95%, 90%)"}
      - { label: "Warlock, Wizard", backgroundColor: "hsl(176, 95%, 90%)"}
      - { label: "Cleric, Druid", backgroundColor: "hsl(68, 95%, 90%)"}
      - { label: "Cleric, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(27, 95%, 90%)"}
      - { label: "Cleric, Druid, Wizard", backgroundColor: "hsl(3, 95%, 90%)"}
      - { label: "Cleric, Paladin, Artificer", backgroundColor: "hsl(160, 95%, 90%)"}
      - { label: "Cleric, Warlock, Wizard", backgroundColor: "hsl(194, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Paladin, Ranger, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(181, 95%, 90%)"}
      - { label: "Druid, Ranger, Sorcerer, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(65, 95%, 90%)"}
      - { label: "Cleric, Druid, Paladin, Ranger, Sorcerer", backgroundColor: "hsl(59, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(195, 95%, 90%)"}
      - { label: "Cleric, Druid, Paladin, Ranger", backgroundColor: "hsl(260, 95%, 90%)"}
      - { label: "Bard, Sorcerer, Wizard", backgroundColor: "hsl(10, 95%, 90%)"}
      - { label: "Bard, Sorcerer, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(324, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Paladin, Sorcerer, Warlock, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(113, 95%, 90%)"}
      - { label: "Druid, Sorcerer", backgroundColor: "hsl(236, 95%, 90%)"}
      - { label: "Bard, Warlock, Wizard", backgroundColor: "hsl(238, 95%, 90%)"}
      - { label: "Cleric, Druid, Sorcerer", backgroundColor: "hsl(78, 95%, 90%)"}
      - { label: "Paladin, Artificer (Revisited), Artificer", backgroundColor: "hsl(248, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Sorcerer, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(84, 95%, 90%)"}
      - { label: "Bard, Warlock", backgroundColor: "hsl(46, 95%, 90%)"}
      - { label: "Bard, Cleric, Sorcerer, Warlock, Wizard", backgroundColor: "hsl(240, 95%, 90%)"}
      - { label: "Sorcerer, Warlock, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(275, 95%, 90%)"}
      - { label: "Bard, Druid, Artificer (Revisited), Artificer", backgroundColor: "hsl(305, 95%, 90%)"}
      - { label: "Bard, Druid, Warlock, Wizard", backgroundColor: "hsl(188, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Wizard", backgroundColor: "hsl(30, 95%, 90%)"}
      - { label: "Cleric, Druid, Ranger", backgroundColor: "hsl(26, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid", backgroundColor: "hsl(49, 95%, 90%)"}
      - { label: "Druid, Ranger, Sorcerer, Wizard", backgroundColor: "hsl(243, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Ranger, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(227, 95%, 90%)"}
      - { label: "Sorcerer, Warlock, Wizard, Artificer, Artificer (Revisited)", backgroundColor: "hsl(277, 95%, 90%)"}
      - { label: "Cleric, Sorcerer, Wizard", backgroundColor: "hsl(322, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Paladin, Wizard", backgroundColor: "hsl(207, 95%, 90%)"}
      - { label: "Bard, Cleric, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(226, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Artificer (Revisited), Artificer", backgroundColor: "hsl(42, 95%, 90%)"}
      - { label: "Bard, Wizard", backgroundColor: "hsl(56, 95%, 90%)"}
      - { label: "Cleric, Druid, Artificer (Revisited), Artificer", backgroundColor: "hsl(151, 95%, 90%)"}
      - { label: "Druid, Sorcerer, Wizard", backgroundColor: "hsl(6, 95%, 90%)"}
      - { label: "Bard, Paladin", backgroundColor: "hsl(280, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Sorcerer, Warlock, Wizard", backgroundColor: "hsl(300, 95%, 90%)"}
      - { label: "Bard, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(242, 95%, 90%)"}
      - { label: "Bard, Sorcerer, Warlock, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(97, 95%, 90%)"}
      - { label: "Bard, Cleric, Sorcerer, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(91, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Paladin, Ranger, Wizard", backgroundColor: "hsl(261, 95%, 90%)"}
      - { label: "Bard, Druid, Ranger, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(117, 95%, 90%)"}
      - { label: "Bard, Sorcerer, Warlock, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(296, 95%, 90%)"}
      - { label: "Cleric, Paladin, Warlock, Wizard", backgroundColor: "hsl(233, 95%, 90%)"}
      - { label: "Paladin, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(114, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Sorcerer, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(152, 95%, 90%)"}
      - { label: "Bard, Druid, Wizard", backgroundColor: "hsl(69, 95%, 90%)"}
      - { label: "Bard, Ranger, Wizard", backgroundColor: "hsl(165, 95%, 90%)"}
      - { label: "Cleric, Druid, Sorcerer, Warlock, Wizard", backgroundColor: "hsl(103, 95%, 90%)"}
      - { label: "Druid, Sorcerer, Warlock, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(66, 95%, 90%)"}
      - { label: "Cleric, Druid, Ranger, Sorcerer, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(145, 95%, 90%)"}
      - { label: "Cleric, Druid, Paladin, Ranger, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(284, 95%, 90%)"}
      - { label: "Cleric, Druid, Paladin, Artificer", backgroundColor: "hsl(259, 95%, 90%)"}
      - { label: "Bard, Cleric, Paladin", backgroundColor: "hsl(231, 95%, 90%)"}
      - { label: "Cleric, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(163, 95%, 90%)"}
      - { label: "Bard, Cleric, Druid, Warlock, Wizard", backgroundColor: "hsl(87, 95%, 90%)"}
      - { label: "Bard, Cleric, Ranger", backgroundColor: "hsl(160, 95%, 90%)"}
      - { label: "Cleric, Artificer (Revisited), Artificer", backgroundColor: "hsl(19, 95%, 90%)"}
      - { label: "Cleric, Druid, Wizard, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(60, 95%, 90%)"}
      - { label: "Druid, Artificer (Revisited), Artificer", backgroundColor: "hsl(336, 95%, 90%)"}
      - { label: "Druid, Sorcerer, Wizard, Artificer (Revisited), Artificer", backgroundColor: "hsl(333, 95%, 90%)"}
      - { label: "Cleric, Druid, Ranger, Sorcerer, Artificer, Artificer (Revisited), Artificer", backgroundColor: "hsl(127, 95%, 90%)"}
      - { label: "Sorcerer, Wizard, Artificer", backgroundColor: "hsl(349, 95%, 90%)"}
      - { label: "Sorcerer", backgroundColor: "hsl(89, 95%, 90%)"}
      - { label: "Artificer (Revisited)", backgroundColor: "hsl(359, 95%, 90%)"}
      - { label: "Artificer", backgroundColor: "hsl(163, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
config:
  remove_field_when_delete_column: true
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: true
  show_metadata_modified: true
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  source_data: current_folder
  source_form_result: root
  source_destination_path: /
  frontmatter_quote_wrap: false
  row_templates_folder: z_Templates
  current_row_template: 
  pagination_size: 10
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: top
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
filters:
  enabled: false
  conditions:
%%