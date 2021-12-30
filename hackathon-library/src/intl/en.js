const en = {
    // --- Application wide ---
  
    id: "ID",
    closeButton: "Close",
    saveButton: "Save",
    cancelButton: "Cancel",
    deleteButton: "Delete",
    chooseFileButton: "Choose",
    importButton: "Import",
    cancelSearchButton: "Cancel Search",
    processButton: "Process",
    applicationLabel: "Application",
    applicationInstanceLabel: "Application Instance",
    applicationInstanceClientLabel: "Application Instance Client",
    applicationInstanceClientLabelShort: "Instance Client",
    reminderSelectApplicationInstance: "Please select an Application Instance",
    reminderSelectApplicationInstanceAndDataType:
      "Please select an Application Instance and Migration Type in order to import the file",
    csvFileInfo: "Please make sure your CSV file conforms to our CSV sample file",
    csvFileDownload: "Download sample CSV",
    loading: "Loading...",
    searchPlaceholder: "Search...",
    fetchError: "Error fetching data...",
    serverError: "An error on the server has ocurred.",
    detailsButtonLabel: "Details",
    backToListButtonLabel: "Back to List",
    unspecified: "-Not specified-",
  
    okButton: "Ok",
    nameLabel: "Name",
    valueLabel: "Value",
    descriptionLabel: "Description",
    corporateEntityLabel: "Corporate Entity",
    productStatusLabel: "Product Status",
    productVersionLabel: "Product Version",
    productYearLabel: "Product Year",
    maxPriceLabel: "Max Price",
    minPriceLabel: "Min Price",
    orientation: "Orientation",
    landscape: "Landscape",
    portrait: "Portrait",
  
    deleteLabel: "Delete",
    cloneLabel: "Clone",
    editLabel: "Edit",
    // --- Form validation errors ---
  
    requiredLabel: "Required",
    invalidEmailError: "Please provide a valid email address.",
    tooShortError:
      "Should be at least {minLen, plural, one {# character} other {# characters}} long!",
    invalidPasswordError:
      "The password must have at least 8 characters and contain at least a capital letter, a lower case letter, a digit and a special character (!@#$%^&*).",
    invalidUrlError: "Please provide a valid URL.",
    invalidDate: "Please provide a valid Date",
  
    // --- Menu ---
  
    menubarHome: "Home",
  
    menubarUsers: "Users",
    menubarUsersList: "Users Add/Edit",
    menubarBulkUploadUsers: "Bulk Upload Users",
    menubarBulkUploadUserCertificates: "Bulk Upload User Certificates",
    menubarLogout: "Logout",
    menubarCourses: "Courses",
    menubarCatalogs: "Catalogs Add/Edit",
    menubarProducts: "Products Add/Edit",
    menubarSkus: "SKUs Add/Edit",
    menubarSeries: "Series",
    menubarQuestions: "Questions Add/Edit",
    menubarEvaluations: "Evaluations Add/Edit",
    menubarApplications: "Applications",
    menubarApplicationInstances: "Application Instances Add/Edit",
    menubarResourceLibraries: "Resource Libraries",
    menubarCertificates: "Certificates",
    menubarQualifications: "Qualifications",
    menubarThemes: "Themes",
    menubarTemplates: "Templates",
    menubarSponsors: "Sponsors",
    menubarLocations: "Locations",
    menubarDynamicMenu: "Dynamic Menu",
    menubarMenu: "Menu",
    menubarMenuItems: "Menu Items",
    menubarMenuStructures: "Menu Structures",
    menubarCompanyOnboarding: "Company Onboarding",
    menubarDataMigration: "Data Migration",
  
    // --- Authentication ---
  
    authUsernameFieldLabel: "User name",
    authPasswordFieldLabel: "Password",
    authLoginButton: "Logon",
  
    // --- Locations ---
  
    locationNameLabel: "Name",
    locationCompanyLabel: "Company",
    locationCityLabel: "City",
    locationStateLabel: "State",
    locationTypeLabel: "Location Type",
    selectLocationTypeFetchFailed: "Unable to fetch location types...",
    locations: "Locations",
    locationLoadError: "Error retrieving location",
    locationFormTypeLabel: "Location Type",
    locationFormNameLabel: "Name",
    locationFormCompanyLabel: "Company",
    locationFormAddress1Label: "Address 1",
    locationFormAddress2Label: "Address 2",
    locationFormAddress3Label: "Address 3",
    locationFormCityLabel: "City",
    locationFormStateLabel: "State",
    locationFormZipCodeLabel: "Zip Code",
    locationFormPhoneLabel: "Phone",
    locationFormFaxLabel: "Fax",
    locationFormEmailLabel: "Email",
    locationFormDirectionsLabel: "Directions",
    locationDeleteTitle: "Delete Location",
    locationDeleteInfo: "Are you sure that you wish to delete this location?",
    selectStatesFetchFailed: "Unable to fetch states...",
    locationFormCreateTitle: "Create - Location",
    locationFormCreateButton: "Create Location",
    locationFormEditTitle: "Edit - Location",
    locationFormFormUpdateButton: "Update Location",
  
    // --- Sku Locations ---
  
    skuFormLocationTitle: "Locations",
    skuFormLocationLabel: "Locations",
    skuLocationNameLabel: "Location Name",
    skuLocationCompanyLabel: "Company",
    skuLocationAddress1Label: "Address 1",
    skuLocationCityLabel: "City",
    skuLocationStateLabel: "State",
    skuLocationTypeLabel: "Location Type",
    selectLocationFetchFailed: "Unable to fetch location types...",
    skuLocationDeleted: "Location deleted!",
    skuLocationRepeated:
      "The Location that you selected is already present for the current sku",
    skuLocationCreated: "New Location created!",
    selectLocationLabel: "Enter a location to search for",
    selectLocationTypeLabel: "Select a Location Type from the list",
    skuLocationCreateButtonLabel: "Add Location",
    skuLocationDeleteTitle: "Delete Location",
    skuLocationDeleteQuestion: "Are you sure you wish to delete this Location?",
  
    // --- Users ---
  
    userFormFirstNameLabel: "First Name",
    userFormLastNameLabel: "Last Name",
    userFormEmailLabel: "Email",
    userFormPhoneLabel: "Phone",
    userFormParentInstanceIdLabel: "Parent Instance ID",
    userFormExternalTitle: "External Info",
    userFormExternalIdLabel: "External User ID",
    userFormExternalUserNameLabel: "External User Name",
    userFormCreateButton: "Create User",
    userFormRolesTitle: "Roles",
    userFormUpdateButton: "Update User",
    userLoadError: "Error loading user",
    userUpdated: "User successfully updated!",
  
    userListFirstNameLabel: "First Name",
    userListLastNameLabel: "Last Name",
    userListLastEmailLabel: "Email",
    userListApplicationInstanceLabel: "Instance",
  
    userCreateSuccessMessage: "User created successfully!",
  
    // --- Tables ---
  
    tableNumSelected:
      "{numSelected, plural, one {# selected} other {# selected}}",
    tableDeleteTooltip: "Delete {num, plural, one {item} other {# items}}",
    tableEditTooltip: "Edit",
    tableRowsPerPage: "Rows per page",
  
    // --- Application Instances ---
  
    applicationNameLabel: "Application Name",
    applicationInstanceNameLabel: "Instance Name",
    applicationInstanceIdLabel: "Instance ID",
    applicationInstanceHostNameLabel: "Host Name",
    applicationInstanceDescriptionLabel: "Description",
    applicationInstanceExternalHostNameLabel: "External Host Name",
    applicationInstanceUseHttpsLabel: "Https",
    applicationInstanceUseExternalHostForLoginLabel: "External Host for Login",
    applicationInstanceLoginPathLabel: "Login Path",
    applicationInstanceLogoutPathLabel: "Logout Path",
    applicationInstanceEncryptionKeyLabel: "Encryption Key",
    applicationInstanceLogoImageUrlLabel: "Logo Image Url",
    applicationInstanceViewImageLabel: "View image",
    applicationInstanceCustomCssUrlLabel: "Custom CSS Url",
    applicationInstanceSiteTitleLabel: "Site Title",
    applicationInstanceFaviconImageUrlLabel: "Favicon Image Url",
    applicationInstanceFormCreateButton: "Create Application Instance",
    applicationInstanceFormUpdateButton: "Update Application Instance",
    applicationInstanceCreated: "Application instance successfully created!",
    applicationInstanceUpdated: "Application instance successfully updated!",
    applicationInstanceLoadError: "Error loading application instance",
  
    // -- Evaluations --
  
    evaluationTypeLabel: "Type",
    questionLabel: "Question",
    questionsCreatedOnLabel: "Created",
    questionsTypeLabel: "Type",
    questionsRatingSettingLabel: "Setting",
    questionsRequiredLabel: "Required",
    answersLabel: "Answers",
    answerPlaceholder: "Enter an answer...",
    answersSequenceLabel: "Sequence",
    answersIsAnswerLabel: "Is\u00a0Answer?",
    answersIsDeletedLabel: "Is\u00a0Deleted?",
    questionLoadError: "Error when retrieving question",
    questionUpdated: "Question successfully updated!",
    questionCreated: "Question successfully created!",
    questionTypeShort:
      "{type, select, Text {TXT} CategoryHeader {CAT} Rating {RAT} MultipleChoice {MUL} other {type}}",
    questionsManageRatingLink: "Manage Question Ratings",
  
    questionFormAddAnswerButton: "Add New Answer",
    questionFormAnswerTitle: "Correct Answer",
    questionFormUpdateButton: "Update Question",
    questionFormCreateButton: "Create Question",
  
    questionRatingsTitle: "Question Ratings",
    questionRatingNameLabel: "Rating name",
    questionRatingMinLabel: "Min Text",
    questionRatingMaxLabel: "Max Text",
    questionRatingCountLabel: "Count",
    questionRatingCreateButton: "Create Rating",
    questionRatingCreated: "Question rating successfully created!",
  
    questionDeleteTitle: "Delete Question",
    questionDeleteInfo: "Are you sure that you wish to delete this question?",
    questionDeleteWithEvaluationInfo:
      "This question is already in use in an Evaluation. Are you sure that you wish to delete this question?",
  
    evaluationsTypeLabel: "Type",
    evaluationDeletedInfo: "This evaluation has been deleted",
  
    evaluationLoadError: "Error retrieving evaluation",
    evaluationFormProductFormatOrSkuRequiredLabel:
      "One of the fields SKU or Product Format is required",
    evaluationFormCreateTitle: "New Evaluation",
    evaluationFormActiveLabel: "Is Active",
    evaluationFormEvaluationTypeLabel: "EvaluationType",
    evaluationFormProductLabel: "Product",
    evaluationFormProductTypeLabel: "Product Type",
    evaluationFormProductFormatLabel: "Product Format",
    evaluationFormProductYearLabel: "Product Year",
    evaluationFormProductStatusLabel: "Product Status",
    evaluationFormProductVersionLabel: "Product Version",
    evaluationFormSkuLabel: "Sku",
    evaluationFormPassingScoreLabel: "Passing Score",
    evaluationFormAttemptsAllowedLabel: "Attempts Allowed",
    evaluationFormExpireDateLabel: "Expire date",
    evaluationFormDayAfterCourseLabel: "Survey Days After",
    evaluationFormQuestionsLabel: "Questions",
    evaluationFormQuestionSearchPlaceholder: "Search for Question to add...",
    evaluationFormQuestionSearchNoResults: "No Results",
    evaluationFormQuestionSearchMoreResults:
      "Displaying the first {filtered} results, please type more to refine your search...",
    evaluationFormAddQuestionButton: "Add",
    evaluationFormCreateQuestionButton: "Create New Question",
    evaluationFormCreateButton: "Create Evaluation",
    evaluationFormUpdateButton: "Update Evaluation",
  
    evaluationDeleteTitle: "Delete Evaluation",
    evaluationDeleteInfo: "Are you sure that you wish to delete this evaluation?",
  
    // --- Selects ---
  
    selectApplicationFetchFailed: "Unable to fetch application list...",
    selectApplicationInstanceFetchFailed:
      "Unable to fetch application instance list...",
    selectApplicationInstanceClientsFetchFailed:
      "Unable to fetch application instance client list...",
    selectQuestionTypeFetchFailed: "Unable to fetch question types...",
    selectRatingSettingFetchFailed: "Unable to fetch rating settings...",
    selectProductFetchFailed: "Unable to fetch product list...",
    selectProductTypeFetchFailed: "Unable to fetch product type list...",
    selectResourceLibraryItemTypeFetchFailed:
      "Unable to fetch resource library list...",
    selectResourceLibraryFailed: "Unable to fetch resource library list...",
    selectEvaluationTypeFetchFailed: "Unable to fetch evaluation type list...",
    selectProductFormatFetchFailed: "Unable to fetch product format list...",
    selectProductYearFetchFailed: "Unable to fetch product format list...",
    selectProductStatusFetchFailed: "Unable to fetch product status list...",
    selectProductVersionFetchFailed: "Unable to fetch product year list...",
    selectSkuFetchFailed: "Unable to fetch Sku list...",
    selectCorporateEntityFetchFailed:
      "Unable to fetch corporate entities type list...",
    selectDeliveryMethodFetchFailed: "Unable to fetch delivery methods list...",
    selectSponsorFetchFailed: "Unable to fetch sponsors list...",
    selectAdvancedPreparationFetchFailed:
      "Unable to fetch advanced preparations list...",
    selectTaxClassFetchFailed: "Unable to fetch tax classes list...",
    selectProfessionFailed: "Unable to fetch Profession list...",
  
    // --- Bulk ---
  
    bulkUploadUsersSuccess: "Users queued for upload!",
    bulkUploadUserCertificatesSuccess: "User Certificates queued for upload!",
    bulkUploadCancelled: "CSV import cancelled",
    bulkUploadNetworkError:
      "There was an error while uploading your file. Please try again.",
    bulkUploadFileContentError: "Invalid CSV file.",
    bulkUploadError: "Error: {value} is not a valid {field}",
  
    // --- Content Rules ---
  
    addRuleButton: "Add Rule",
    excludeLabel: "Exclude",
    ruleDetailsLabel: "Rule Details",
    addFilterButton: "Add Filter",
    availableLabel: "Available",
    selectedLabel: "Selected",
    ruleUpdatedMessage: "Rule updated!",
    oRLabel: "or",
    ruleNameLabel: "Rule Name",
    createRuleButton: "Create Rule",
    updateRuleButton: "Update Rule",
    productTypeLabel: "Product Type",
    typeLabel: "Type",
    formatLabel: "Format",
    statusLabel: "Status",
    versionLabel: "Version",
    yearLabel: "Year",
    saveFilterLabel: "Save Filter",
  
    // --- Catalogs ---
  
    catalogListCatalogLabel: "Catalog",
    catalogListApplicationLabel: "Application",
    catalogListApplicationInstanceLabel: "Instance",
    catalogListApplicationInstanceClientLabel: "Client",
    catalogListContentLabel: "Content",
    catalogCreated: "Catalog successfully created!",
    catalogUpdated: "Catalog successfully updated!",
    catalogLoadError: "Error retrieving catalog",
    catalogDeleteTitle: "Delete Catalog",
    catalogDeleteInfo: "Are you sure that you wish to delete this catalog?",
    catalogRuleDetailsError: "Error retrieving catalog rule details",
    catalogRuleTypeError: "Error retrieving catalog rule types",
    catalogFormCreateButton: "Create Catalog",
    catalogFormUpdateButton: "Update Catalog",
    catalogFormRulesLabel: "Catalog Rules",
    catalogRuleTypeLabel:
      "{name, select, Sku {SKU List} Product {Product Based Filter} other {type}}",
    catalogContentTitle: "Content",
    catalogContentSkuLabel: "SKU",
    catalogContentProductLabel: "Product",
    catalogContentFormatLabel: "Format",
    catalogContentPriceLabel: "Price",
    catalogContentPageTitle: "Build and Update Catalog",
    catalogContentCatalogNameLabel: "Name",
    catalogContentMinPricePlaceholder: "Min. Price",
    catalogContentMaxPricePlaceholder: "Max. Price",
  
    seriesLabel: "Series",
    seriesLoadError: "Error retrieving series",
    modulesLabel: "Modules",
    moduleLabel: "Module",
    moduleQuantityLabel: "Quantity",
    seriesAddModuleButton: "Add Module",
    seriesAddRequirementButton: "Add Requirement",
    moduleFormCreateButton: "Create Module",
    moduleFormUpdateButton: "Update Module",
    moduleDeleteTitle: "Delete Module",
    moduleDeleteQuestion: "Are you sure that you want to delete this module?",
  
    // -- Products
  
    productLabel: "Product",
    productTitleLabel: "Title",
    productUrlPathLabel: "URL Path",
    productCreated: "Product successfully created!",
    productUpdated: "Product successfully updated!",
    productLoadError: "Error retrieving product",
    productDeleteTitle: "Delete Product",
    productDeleteInfo: "Are you sure that you wish to delete this product?",
    productFormCreateButton: "Create Product",
    productFormUpdateButton: "Update Product",
    productRelatedSkusLabel: "Related SKUs",
    productManageTypesLink: "Manage Types",
    productManageVersionsLink: "Manage Versions",
    productManageFormatsLink: "Manage Formats",
  
    productTypesTitle: "Product Types",
    productTypeCreateButton: "Create Product Type",
    productTypeDeleteTitle: "Delete Product Type",
    productTypeDeleteInfo:
      "Are you sure that you wish to delete this product type?",
    productTypeUpdateButton: "Update Product Type",
    productTypeCreated: "Product Type Created!",
    productTypeUpdated: "Product Type Updated!",
    productTypeDeleted: "Product Type Deleted!",
  
    productFormatsTitle: "Product Formats",
    productFormatLabel: "Product Format",
    productFormatAcronymLabel: "Acronym",
    productFormatHashValueLabel: "Hash Value",
    productFormatCreateButton: "Create Product Format",
    productFormatDeleteTitle: "Delete Product Format",
    productFormatDeleteInfo:
      "Are you sure that you wish to delete this product format?",
    productFormatUpdateButton: "Update Product Format",
    productFormatCreated: "Product Format Created!",
    productFormatUpdated: "Product Format Updated!",
    productFormatDeleted: "Product Format Deleted!",
  
    productVersionsTitle: "Product Versions",
    productVersionCreateButton: "Create Product Version",
    productVersionDeleteTitle: "Delete Product Version",
    productVersionDeleteInfo:
      "Are you sure that you wish to delete this product version?",
    productVersionUpdateButton: "Update Product Version",
    productVersionCreated: "Product Version Created!",
    productVersionUpdated: "Product Version Updated!",
    productVersionDeleted: "Product Version Deleted!",
  
    // --- SKUs ---
  
    skuLabel: "SKU",
    skuCloneLabel: "Clone Sku",
    skuTitleLabel: "Title",
    skuProductLink: "This SKU is part of product {productLink}",
    skuProductFormatLabel: "Product Format",
    skuFormCreateButton: "Create SKU",
    skuFormUpdateButton: "Update SKU",
    skuSavedMessage: "The Sku was saved correctly!",
    skuCloneError:
      "Error trying to clone the sku, please try again or contact to the IT team",
  
    skuFormDetailsTitle: "SKU Details",
    skuFormTitleLabel: "Title",
    skuFormDescriptionLabel: "Description",
    skuFormCreditsLabel: "Total Credits",
    skuFormCreditLimitLabel: "Credit Limit",
    skuFormPriceLabel: "Price",
    skuFormSequenceLabel: "Sequence",
    skuFormProductLabel: "Product",
    skuFormProductFormatLabel: "Product Format",
    skuFormProductVersionLabel: "Product Version",
    skuFormProductYearLabel: "Product Year",
    skuFormProductStatusLabel: "Product Status",
    skuFormEventDateLabel: "Event Date",
    skuFormEventStartDateLabel: "Event Start Date",
    skuFormEventEndDateLabel: "Event End Date",
    skuFormExpirationDateLabel: "Expiration Date",
    skuFormReleaseDateLabel: "Release Date",
    skuFormOfflineDateLabel: "Offline Date",
    skuFormCreditSubmissionExpirationDateLabel:
      "Credit Submission Expiration Date",
    skuFormCorporateEntityLabel: "Corporate Entity",
    skuFormAdvancedPreparationsLabel: "Advanced Preparations",
    skuFormTaxClassLabel: "Tax Class",
    skuFormPasscodeLabel: "Passcode",
    skuFormLatestVersionSkuIdLabel: "Latest Version Sku Id",
    skuFormAdvancedPreperationLabel: "Advanced Preparations",
    skuFormHotTopicLabel: "Hot Topic",
    skuFormGeneratePasscodeUrlLabel: "Generate Passcode URL",
    skuFormGeneratePasscodeUrlSuccessLabel: "Passcode URL generated!",
    skuFormGeneratePasscodeUrlErrorLabel:
      "Please enter a Passcode and make sure to save this SKU in order to generate a URL",
    skuFormAutoComplete: "Auto Complete",
    skuFormAutoCompleteTooltip:
      "Please select Product Format to enable auto-complete feature",
    skuDeleteTitle: "Delete Sku",
    skuDeleteInfo: "Are you sure that you wish to delete this sku?",
  
    skuFormTopicLabel: "Topics",
    skuFormQualificationLabel: "Qualifications",
  
    skuContentRulesTitle: "SKU Rules",
    skuFormHasChildLabel: "Has Includes or Excludes?",
    accordionSkuContentRulesDisabled:
      'The SKU has to have the "Has Includes or Excludes?" checkbox set on true',
    skuFormHasChildWarningTitle: "Update SKU",
    skuFormHasChildWarningQuestion:
      'Are you sure you want to change the "Has Includes or Excludes?" value? If you continue, all the SKU content rules will be deleted.',
    skuRuleDetailsError: "Error retrieving sku rule details",
  
    skuRuleDeleteTitle: "Delete SKU Rule",
    skuRuleDeleteQuestion: "Are you sure you want to delete this rule?",
    skuRuleProductFilterDeleteTitle: "Delete SKU Rule Product Filter",
    skuRuleProductFilterDeleteQuestion:
      "Are you sure you want to delete this filter?",
    skuRuleProductFilterDeleted: "SKU Rule Product Filter Deleted!",
    skuRuleProductFilterCreateTitle: "Create SKU Rule Product Filter",
  
    skuRuleTypeLabel:
      "{name, select, Sku {SKU List} Product {Product Based Filter} other {type}}",
  
    skuUpdatedMessage: "SKU successfully updated!",
  
    // --- Resource Libraries ---
  
    resourceLibraryListNameLabel: "Library",
    resourceLibraryListApplicationLabel: "Application",
    resourceLibraryListApplicationInstanceLabel: "Instance",
    resourceLibraryListApplicationInstanceClientLabel: "Client",
    resourceLibraryListLabel: "Resource Libraries Add/Edit",
    resourceLibraryFormPathLabel: "Path",
    resourceLibraryFormContentNameLabel: "Content Name",
    resourceLibraryFormUpdateButton: "Update Resource Library",
    resourceLibraryCreated: "Resource Library successfully created!",
    resourceLibraryUpdated: "Resource Library successfully updated!",
    resourceLibraryLoadError: "Error retrieving Resource Library",
    resourceLibraryDeleteTitle: "Delete Resource Library",
    resourceLibraryDeleteInfo:
      "Deleting a Resource Library will remove all Library Items as well. Do you want to delete this Resource Library?",
    resourceLibraryFormCreateButton: "Create Resource Library",
    resourceLibraryItemLoadError: "Error loading Resource Library Item",
    resourceLibraryFormItemsLabel: "Resource Library Items Items",
    resourceLibraryFormAddItemButton: "Add Item",
    resourceLibraryItemListNameLabel: "Name",
    resourceLibraryItemListResourceTypeLabel: "Resource Type",
    resourceLibraryItemCreated: "Resource Library Item successfully created!",
    resourceLibraryItemFileLabel: "Upload File",
    resourceLibraryFormLibraryNameLabel: "Library Name",
    resourceLibraryFormItemTypeNameLabel: "Resource Type Item",
    resourceLibraryFormPublicationDateLabel: "Publication Date",
    resourceLibraryFormSequenceLabel: "Sequence",
    resourceLibraryItemListLabel: "Resource Library Items Add/Edit",
    resourceLibraryFormCreateItemButton: "Create Library Item",
    resourceLibraryFormUploadRequiredLabel: "A valid file is required",
    resourceLibraryFormUploadFileTypeErrorLabel:
      ".exe is not an accepted file type. Please attach a different file.",
    resourceLibraryDetailsNameLabel: "Name",
    resourceLibraryDetailsLibraryNameLabel: "Library Name",
    resourceLibraryDetailsTypeLabel: "Resource Item Type",
    resourceLibraryDetailsFileNameLabel: "File Name",
    resourceLibraryDetailsSequenceLabel: "Sequence",
    resourceLibraryItemDeleteTitle: "Delete Resource Library Item",
    resourceLibraryItemDeleteInfo:
      "Do you want to delete this Resource Library Item?",
    resourceLibraryItemUpdated: "Resource Library Item successfully updated!",
    resourceLibraryItemFormUpdateButton: "Update Resource Library Item",
    resourceLibraryDetailsPublicationLabel: "Publication Date",
    resourceLibraryItemTopicListNameLabel: "Topic",
    resourceLibraryItemTopicListLabel: "Topics Add/Delete",
    resourceLibraryFormAddItemTopicButton: "Add Topic",
    resourceLibraryItemTopicCreated:
      "Resource Library Item Topic successfully created!",
    resourceLibraryFormTopicLabel: "Topic",
    resourceLibraryItemProfessionListNameLabel: "Profession",
    resourceLibraryItemProfessionListLabel: "Professions Add/Delete",
    resourceLibraryFormAddItemProfessionButton: "Add Profession",
    resourceLibraryItemProfessionCreated:
      "Resource Library Item Profession successfully created!",
    resourceLibraryFormCreateItemProfessionButton: "Add Profession",
    resourceLibraryFormCreateItemTopicButton: "Add Topic",
    skuActionsLabel: "Actions",
  
    //sku knowledge levels
    selectKnowledgeLevelsFetchFailed: "Unable to fetch Knowledge Levels list...",
    skuKnowledgeLevelDeleteQuestion:
      "Are you sure you wish to delete this Knowledge Level?",
    skuKnowledgeLevelDeleted: "The Knowledge Level has been deleted.",
    skuKnowledgeLevelCreated: "New Knowledge Level created!",
    skuKnowledgeLevelRepeated:
      "The Knowledge Level that you selected is already present for the current sku",
    skuKnowledgeLevelLabel: "Knowledge Levels",
    skuKnowledgeLevelTitle: "Knowledge Level",
    selectKnowledgeLevelLabel: "Select Knowledge Level from the list",
    skuKnowledgeLevelEmpty:
      "The knowledge level can't be empty. Please specify a value",
    skuKnowledgeLevelCreateButtonLabel: "Add Knowledge Level",
    skuKnowledgeLevelSaveButtonLabel: "Save Sku Knowledge Level",
    skuFormKnowledgeLevelTitle: "Knowledge Levels",
    skuKnowledgeLevelDeleteTitle: "Delete Knowledge Level",
  
    //sku delivery methods
    skuFormDeliveryMethodTitle: "Delivery Methods",
    skuFormDeliveryMethodKeyLabel: "Delivery Method Key",
    skuFormDeliveryMethodSequenceLabel: "Sequence",
    skuFormDeliveryMethodNameLabel: "Display Text",
    skuDeliveryMethodTitle: "Delivery Method",
    skuDeliveryMethodSaveButtonLabel: "Save Sku Delivery Method",
    skuDeliveryMethodCreateButtonLabel: "Add Delivery Method",
    skuDeliveryMethodCreated: "New Delivery Method created!",
    skuDeliveryMethodDeleteQuestion:
      "Are you sure you wish to delete this Delivery Method?",
    skuDeliveryMethodDeleteTitle: "Delete Delivery Method",
    skuDeliveryMethodDeleted: "The Delivery Method has been deleted",
  
    //sku learning levels
    selectLearningLevelsFetchFailed: "Unable to fetch Learning Levels list...",
    skuLearningLevelDeleteQuestion:
      "Are you sure you wish to delete this Learning Level?",
    skuLearningLevelDeleted: "The Learning Level has been deleted.",
    skuLearningLevelCreated: "New Learning Level created!",
    skuLearningLevelRepeated:
      "The Learning Level that you selected is already present for the current sku",
    skuLearningLevelLabel: "Learning Levels",
    skuLearningLevelCreateButtonLabel: "Add Learning Level",
    skuFormLearningLevelTitle: "Learning Levels",
    skuFormLearningLevelLabel: "Learning Levels",
    selectLearningLevelLabel: "Select Learning Level from the list",
    skuLearningLevelDeleteTitle: "Delete Learning Level",
  
    //sku topics
    skuTopicDeleteTitle: "Delete Topic",
    skuTopicDeleteQuestion: "Are you sure you wish to delete this Topic?",
    skuTopicDeleted: "The Topic has been deleted.",
    skuTopicLabel: "Topics",
    skuTopicCreated: "New Topic created!",
    skuTopicRepeated:
      "The Topic that you selected is already present for the current sku",
    skuTopicCreateButtonLabel: "Add Topic",
    skuFormTopicTitle: "Topics",
    selectTopicLabel: "Select Topic from the list",
  
    //sku study fields
    skuStudyFieldDeleteTitle: "Delete Study Field",
    skuStudyFieldDeleteQuestion:
      "Are you sure you wish to delete this Study Field?",
    skuStudyFieldDeleted: "The Study Field has been deleted.",
    skuStudyFieldLabel: "Select Study Field from the list",
    skuStudyFieldCreditsLabel: "Credits",
    skuStudyFieldCreated: "New Study Field created!",
    skuStudyFieldRepeated:
      "The Study Field that you selected is already present for the current sku",
    skuStudyFieldCreditsOverpassed:
      "The credits for Study Fields can't overpass the amount of credits defined for the current sku",
    skuStudyFieldCreateButtonLabel: "Add Study Field",
    skuFormStudyFieldTitle: "Study Fields",
    skuCreditsLowerThanSkuStudyFieldCredits:
      "The Sku credits can't be lower than the sum of credits assign to Study Fields",
    skuCreditsBehaviourMessage: "Total Credits",
    //sku resources
    skuResourcesTitle: "Resources",
    skuFormResourceTitle: "Resources",
    skuResourceCreateButtonLabel: "Add Resource",
    skuResourceCreateButton: "Save Sku Resource",
    skuResourceTypesTitle: "Resource Types",
    selectResourceTypesFetchFailed: "Unable to fetch Resource Types",
    skuResourceTypeLabel: "Resource Type",
    skuResourceLabel: "Resource",
    skuResourceDeleted: "The Resource has been deleted",
    skuResourceCreated: "New Resource created!",
    skuResourceEmpty: "The resource can't be empty. Please specify a value",
    skuResourceDeleteTitle: "Delete Resource",
    skuResourceDeleteQuestion: "Are you sure you wish to delete this Resource?",
    skuResourceCreateMessage: "Select or type for creating a new resource",
    skuResourceRepeated:
      "There's already a resource with the values that you have specified",
  
    //sku major topics
    skuFormMajorTopicTitle: "Major Topics",
    skuMajorTopicCreateButtonLabel: "Add Major Topic",
    skuMajorTopicCreateButton: "Create Major Topic",
    skuMajorTopicDeleteQuestion:
      "Are you sure you wish to delete this Major Topic?",
    skuMajorTopicDeleteTitle: "Delete Major Topic",
    skuMajorTopicDeleted: "The Major Topic has been deleted",
    majorTopicPlaceholder: "Enter a major topic description...",
    professionLabel: "Profession",
    majorTopicEmptyProfessionMessage:
      "You can leave this field empty if don't want to set a value of profession",
    skuMajorTopicCreated: "Major topic created!",
    skuPassCodeFormUrlLabel: "Passcode URL",
    skuMajorTopicTitle: "Major Topics",
  
    //sku qualifications
    skuQualificationTitle: "Qualifications",
    skuQualificationQualificationLabel: "Qualification",
    skuQualificationProfessionLabel: "Profession",
    skuQualificationCourseNumberLabel: "Course Number",
    skuQualificationAprovalCodeLabel: "Approval Code",
    skuQualificationAprovalDateLabel: "Approval Date",
    skuQualificationCreateButtonLabel: "Add Qualification",
    skuQualificationSaveButtonLabel: "Save Qualification",
    skuQualificationDeleteTitle: "Delete Qualification",
    skuFormQualificationTitle: "Qualifications",
    skuQualificationFormProfessionLabel: "Profession",
    skuQualificationFormQualificationLabel: "Qualification",
    skuQualificationFormCourseNumberLabel: "Course Number",
    skuQualificationFormAprovalCodeLabel: "Approval Code",
    skuQualificationFormApprovalDateLabel: "Approval Date",
    skuQualificationEmptyQualificationMessage:
      "The qualification can't be empty. Please specify a value",
    skuQualificationEmptyProfessionMessage:
      "You can leave this field empty if don't want to set a value of profession",
    skuQualificationDeleteQuestion:
      "Are you sure you want to delete this Qualification?",
    skuQualificationDeleted: "The Qualification has been deleted.",
    skuQualificationUpdated: "The Qualification has been updated.",
    skuQualificationCreated: "New Qualification created!",
    selectQualificationFetchFailed: "Unable to fetch Qualifications list...",
    skuQualificationAllOthersLabel: "All Others",
  
    //sku sponsors
    sponsorLabel: "Sponsor",
    sponsorTypeLabel: "Sponsor Type",
    skuFormSponsorTitle: "Sponsors",
    skuSponsorCreated: "New sponsor created!",
    skuSponsorDeleted: "The sponsor has been deleted.",
    skuSponsorCreateButtonLabel: "Add sponsor",
    skuSponsorSaveButtonLabel: "Save Sku Sponsor",
    skuSponsorDeleteTitle: "Delete Sponsor",
    skuSponsorDeleteQuestion: "Are you sure you wish to delete this Sponsor?",
    selectSponsorTypeFetchFailed: "Unable to fetch Sponsor Types list...",
  
    //certificates
    certificatesLabel: "Certificates",
    certificateNameLabel: "Name",
    certificateDescriptionLabel: "Description",
    certificateLoadError: "Error loading certificate",
    certificateThemeLabel: "Certificate Theme",
    certificateTemplateLabel: "Certificate Template",
    certificateIssuerLabel: "Issuer",
    certificateDeleteTitle: "Delete Certificate",
    certificateDeleteInfo:
      "Are you sure that you wish to delete this certificate?",
    certificateFormNameLabel: "Name",
    certificateFormValueLabel: "Value",
    certificateFormDescriptionLabel: "Description",
    certificateFormEditTitle: "Edit - Certificate",
    certificateFormCreateTitle: "Create - Certificate",
    certificateFormCreateButton: "Create Certificate",
    certificateFormUpdateButton: "Update Certificate",
    detailsLabel: "Details",
    certificateUpdated: "Certificate updated sucessfully!",
    certificateCreated: "Certificate created sucessfully!",
    certificateSkuFormTitle: "Certificate SKUs",
    certificateProductsTitle: "Certificate Products",
    certificateSkuSkuLabel: "Sku",
    certificateSkuCreateButtonLabel: "Add Certificate Sku",
    certificateSkuDeleteTitle: "Delete Certificate Sku",
    certificateSkuDeleteQuestion:
      "Are you sure you wish to delete this Sku from the current certificate?",
    certificateSkuDeleted: "The certificate sku has been deleted.",
    certificateSkuDialogTitle: "Add Sku to Certificate",
    certificateSkuCreateMessage: "Certificate sku added successfully!",
    accordionDisabledToCreationMessage:
      "This option will enabled as soon as you create the entity",
    certificateProductDeleted: "The certificate product has been deleted.",
    certificateProductDeleteTitle: "Delete Certificate Sku",
    certificateProductProductLabel: "Product",
    certificateProductProductTypeLabel: "Product Type",
    certificateProductProductVersionLabel: "Product Version",
    certificateProductProductFormatLabel: "Product Format",
    certificateProductProductYearLabel: "Product Year",
    certificateProductCreateButtonLabel: "Add Certificate Product",
    certificateProductCreateMessage: "Certificate product added successfully!",
    certificateProductEmptyValuesMessage:
      "You have to select at least one option from the product based fields.",
    certificateProductDeleteQuestion:
      "Are you sure you want to remove these product filters from the current certificate?",
  
    // certificate themes
    certificateThemeNameLabel: "Name",
    certificateThemeDescriptionLabel: "Description",
    certificateThemeApplicationLabel: "Application",
    certificateThemeApplicationInstanceLabel: "Instance",
    certificateThemeApplicationInstanceClientLabel: "Client",
    certificateThemes: "Certificate Themes Add/Edit",
    certificateThemeFormCreateTitle: "Add - Certificate Theme",
    certificateThemeFormCreateButton: "Create Certificate Theme",
    certificateThemeFormFormUpdateButton: "Update Certificate Theme",
    certificateThemeFormNameLabel: "Name",
    certificateThemeFormValueLabel: "Value",
    certificateThemeFormDescriptionLabel: "Description",
    certificateThemeFormContentLabel: "Content",
    certificateThemeLoadError: "Error loading certificate theme",
    certificateThemeFormEditTitle: "Edit - Certificate Theme",
    certificateThemeDeleteTitle: "Delete Certificate Theme",
    certificateThemeDeleteInfo:
      "Are you sure that you wish to delete this certificate theme?",
  
    // certificate templates
    certificateTemplateNameLabel: "Name",
    certificateTemplateDescriptionLabel: "Description",
    certificateTemplateDeleteTitle: "Delete Template",
    certificateTemplateDeleteInfo:
      "Are you sure you want to delete this template?",
    certificateTemplates: "Certificate Templates Add/Edit",
    certificateTemplateFormCreateTitle: "Add - Certificate Template",
    certificateTemplateFormCreateButton: "Create Certificate Template",
    certificateTemplateFormFormUpdateButton: "Update Certificate Template",
    certificateTemplateFormNameLabel: "Name",
    certificateTemplateFormValueLabel: "Value",
    certificateTemplateFormDescriptionLabel: "Description",
    certificateTemplateFormUnaccreditedLabel: "Unaccredited",
    certificateTemplateFormContentLabel: "Certificate Template Design",
    certificateTemplateLoadError: "Error loading certificate template",
    certificateTemplateFormEditTitle: "Edit - Certificate Template",
    certificateTemplateProfessionTemplateOverride:
      "Override Template Based on Profession",
    certificateTemplateAddProfession: "Add Override",
    certificateCompletionLabel: "Certificate of Completion",
    certificateTemplateSaveProfession: "Save Override",
    certificateTemplateProfessionsDialogTitleKey: "Add/Edit Override",
    certificateTemplateProfessionsOverrideLabel: "Template Override",
    certificateTemplatesOverrideDeleteTitle:
      "Delete Certificate Template Override",
    certificateTemplatesOverrideDeleteQuestion:
      "Are you sure you wish to delete this Certificate Template Override?",
    certificateTemplatesOverrideCreated:
      "Certificate Template Override saved successfully!",
    certificateTemplatesOverrideDeleted: "Certificate Template Override deleted!",
    certificateTemplateProfessionTemplateOverridenLabel: "Templates overriden",
    certificateTemplatesOverrideRepeated:
      "There is already a template for the selected profession",
  
    //sponsors
    sponsorNameLabel: "Name",
    sponsors: "Sponsors",
    sponsorLogoContentName: "Logo Content Name",
    sponsorDescriptionContentName: "Description Content Name",
    sponsorDeleteTitle: "Delete Sponsor",
    sponsorDeleteInfo: "Are you sure you wish to delete this sponsor?",
    sponsorUpdated: "Sponsor saved successfully!",
    selectContentFetchFailed: "Unable to fetch contents list...",
    logoContentNameLabel: "Logo Content Name",
    descriptionContentNameLabel: "Description Content Name",
    enableContentSearchMessage:
      "Press this button for enabling the search for a content item",
  
    //Sku Learning Objectives
    skuFormLearningObjectiveTitle: "Learning Objectives",
    skuLearningObjectiveCreateButtonLabel: "Add Learning Objective",
    skuLearningObjectiveCreateButton: "Create Learning Objective",
    skuLearningObjectiveUpdateButton: "Update Learning Objective",
    skuLearningObjectiveDeleteQuestion:
      "Are you sure you wish to delete this Learning Objective?",
    skuLearningObjectiveDeleteTitle: "Delete Learning Objective",
    skuLearningObjectiveDeleted: "The Learning Objective has been deleted",
    learningObjectivePlaceholder: "Enter a Learning Objective description...",
    learningObjectiveEmptyProfessionMessage:
      "You can leave this field empty if don't want to set a value of profession",
    skuLearningObjectiveCreated: "Learning Objective created!",
    unspecifiedProfessionMessage:
      "In case you want to add a Profession, please do it by pressing the edit button",
    skuLearningObjectiveTitle: "Learning Objectives",
  
    // Qualifications
    qualificationListLabel: "Qualifications",
    qualificationListValueLabel: "Value",
    qualificationListAcronymLabel: "Acronym",
    qualificationFormAddTitle: "Add Qualification",
    qualificationFormEditTitle: "Edit Qualification",
    qualificationFormValueLabel: "Value",
    qualificationFormDisplayValueLabel: "Display Value",
    qualificationFormAcronymLabel: "Acronym",
    qualificationFormSaveButton: "Save",
    qualificationDetailsTitle: "Qualification",
    qualificationLoadError: "Error loading qualification",
    qualificationCreated: "Qualification successfully created!",
    qualificationUpdated: "Qualification successfully updated!",
    qualificationDeleted: "Qualification deleted!",
    qualificationDeleteQuestion:
      "Are you sure you want to delete this qualification?",
    qualificationStatementListLabel: "Qualification Statements",
    qualificationStatementListTypeLabel: "Type",
    qualificationStatementListContentLabel: "Content",
    qualificationStatementFormAddTitle: "Add Qualification Statement",
    qualificationStatementFormEditTitle: "Edit Qualification Statement",
    qualificationStatementFormAddItemButton: "Add statement",
    qualificationStatementFormSaveButton: "Save",
    qualificationStatementFormContentNameLabel: "Content",
    qualificationStatementFormTypeLabel: "Type",
    qualificationStatementCreated:
      "Qualification statement successfully created!",
    qualificationStatementDeleteTitle: "Delete qualification statement",
    qualificationStatementDeleteQuestion:
      "Are you sure you want to delete this qualification statement?",
    qualificationStatementDeleted: "Qualification statement deleted!",
    qualificationFormCreatedInCrmValueMessage:
      "This qualification was created in CRM and the value can't be edited in Admin Portal.",
  
    /*Menus */
    menusLabel: "Menus",
    menuTypeLabel: "Menu Type",
    backToDynamicMenu: "Back to options",
    menuLoadError: "Error loading menu...",
    menuFormNameLabel: "Name",
    menuFormDescriptionLabel: "Description",
    menuDeleteTitle: "Delete Menu",
    menuDeleteInfo: "Are you sure that you wish to delete this menu?",
    menuFormMenuTypeLabel: "Menu Type",
    menuFormEditTitle: "Edit - Menu",
    menuFormCreateTitle: "Add - Menu",
    menuFormEditButton: "Update Menu Information",
    menuFormCreateButton: "Save Menu Information",
  
    /*Menu Items */
    menuItemsLabel: "Menu Items",
    menuItemLabel: "Menu Item",
    menuItemDeleteTitle: "Delete Menu Item",
    menuItemDeleteInfo: "Are you sure that you wish to delete this menu item?",
    menuItemFormCreateTitle: "Add - Menu Item",
    menuItemFormEditTitle: "Edit - Menu Item",
    menuItemFormCreateButton: "Create Menu Item",
    menuItemLoadError: "There was an error loading the menu item...",
    menuItemFormEditButton: "Update Menu Item",
  
    /*Menu Structures */
    menuStructuresLabel: "Menu Structures",
    bodyTagErrorMessage:
      "The theme content should contain the keyword [[BODY]] to wrap the template. Please add this keyword in order to save it.",
    menuStructureTypeLabel: "Menu Structure Type",
  
    /*Menu Items */
    toolTipLabel: "ToolTip",
    urlLabel: "URL",
    claimLabel: "Claim",
    iconLabel: "Icon",
  
    emptyIconErrorMessage:
      "An icon has to be selected for the given menu icon. Please, pick one using the tool.",
    searchIconsPlaceholder: "Search Icons...",
    selectFetchFailed: "Unable to fetch the requested list.",
    parentMenuStructureLabel: "Parent Menu Structure",
    menuStructureCreateButtonLabel: "{prefix} Menu Structure",
    menuStructureDeleteTitle: "Delete Menu Structure",
    menuStructureDeleteQuestion:
      "Are you sure that you wish to delete this menu structure?",
    menuStructureDeleted: "Menu structure deleted!",
    goToMenuItemsLabel: "Go To Menu Items",
    goToMenusLabel: "Go To Menus",
    menuStructureCreateMessage: "Menu Structure created!",
    sequenceLabel: "Sequence",
  
    htmlWarningMessage:
      "In order to add HTML code, please press the '<>' button located at the right of the toolbar.",
  
    dataMigrationStep1Label: "Data Migration Step 1",
    dataMigrationStep2Label: "Data Migration Step 2",
    dataMigrationStep3Label: "Data Migration Step 3",
    selectLabel: "Select",
    emptyColumnsExcelMessage:
      "The CSV provided doesn't contains any column or could not be processed. Please remove the file and retry.",
    notYetEvaluatedMessage: "Not yet evaluated/Ignored",
    validationCheckFailedMessage:
      "The first {rows} of column No. {column} could not be converted to the target type.",
    validationCheckSuccessfullMessage:
      "Column No. {column} was successfully converted to the target type.",
    relatesToLabel: "relates to",
    notAllColumnsRequiredAreValidMessage:
      "There are required columns which couldn't be parsed to the required type. Please review the ones that are highlighted.",
    dataImportContentError: "The was an error processing the given file",
    dataMigrationProcessFileTitle: "Process Data Import",
    dataMigrationProcessFileQuestion:
      "Are you sure you want to process the file with the given configuration?",
    dataMigrationUploadSuccess: "Data successfully queued for migration!",
    dataMigrationUploadSuccessMessage:
      "You have successfully submitted your file for import.",
    dataMigrationUploadAbortedMessage:
      "The process has been aborted. You can safely abandon this page or restart the process.",
    dataMigrationUploadSuccessNote:
      "Please note, the import process will run in the background - You may close this page.",
    emtyValueColumnMessage:
      "Some column of your file has empty data. Please, remove that column to continue to the mapping page.",
    mappingLabel: "Mapping",
    fileColumnNameLabel: "File Column Name",
    successAssignmentMessageLabel:
      "The assignment was successful. You can process the file!",
    pendingAssignmentLabel: "Pending Assignment",
    pendingAssignmentMessageLabel:
      "There are required fields that has not been properly assigned in the current import. Pending assignments: ",
    migrationTypeLabel: "Migration Type",
  
    previewLabel: "Preview",
    previewTemplatesAndOverridesLabel: "Preview Templates & Overrides",
    templateEmptyMessage:
      "The template is empty. Please add some content in order to display it.",
    overrideNameLabel: "Override: {profession}",
  };
  
  export default en;
  