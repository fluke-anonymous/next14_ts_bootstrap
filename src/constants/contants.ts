export const API_TIMEOUT = 200000;
export const API_WITH_CREDENTIAL = false;
export const RED_COLOR = "#EB0A1E";
export const DEFAULT_GRID_RECORD = 10;
export const REGEX_DD_YY_MMMM = /^\d{2}([./-])\d{2}\1\d{4}$/;
export const REGEX_YYYY_MM = /^\d{4}\1\d{2}$/;

export const {
  REACT_APP_API_BASE_URL: ADMIN_SERVICE,
  REACT_APP_API_BASE_URL2: INVOICE_SERVICE,
  REACT_APP_API_BASE_URL3: MONTH_SERVICE,
  REACT_APP_API_BASE_URL4: DAILY_SERVICE,
  REACT_APP_API_BASE_URL5: INVOICE_BATCH,
  REACT_APP_API_BASE_URL6: DAILY_BATCH,
  REACT_APP_API_BASE_URL7: MONTH_BATCH,
} = {
  REACT_APP_API_BASE_URL: "/tpex-admin-service/",
  REACT_APP_API_BASE_URL2: "/tpex-invoice-service/",
  REACT_APP_API_BASE_URL3: "/tpex-month-service/",
  REACT_APP_API_BASE_URL4: "/tpex-daily-service/",
  REACT_APP_API_BASE_URL5: "/tpex-invoice-batch/",
  REACT_APP_API_BASE_URL6: "/tpex-daily-batch/",
  REACT_APP_API_BASE_URL7: "/tpex-month-batch/",
};

export const MODULE_CONST = {
  ON_DEMAND_DOWNLOAD: {
    API_BASE_URL: ADMIN_SERVICE,
    DOWNLOAD_API: "on-demand-downloads/report-download",
    REPORT_STATUS: "on-demand-downloads/report-names-status",
    GRID_API: "on-demand-downloads/reports",
  },

  CODE_MASTER: {
    API_BASE_URL: ADMIN_SERVICE,

    ADD_API: "code-masters",
    EDIT_API: "code-masters",
    DELETE_API: "code-masters",
    LIST: "code-masters/names",
    API_PATH: "codeMaster/",
    CODE_MASTER_DETAILS: "code-masters/names/",
    CURR_BUYER_DROPDOWN_API: "code-masters/final-destination-master",
  },

  INVOICE_GENERATION: {
    API_BASE_URL: INVOICE_SERVICE,

    // DOWNLOAD_API: "invoice/downloadInvoiceGenPlan",
    DOWNLOAD_API: "work-plan/invoice-plan",

    //SAVE_API: "invoice/saveInvoice",
    SAVE_API: "work-plan",

    // DESTINATION_API: "invoice/destCodeAndDestName",
    DESTINATION_API: "work-plan/destination/code-name",

    // SEARCH_API: "invoice/invoiceDetails"
    SEARCH_API: "work-plan/details",
  },

  COMMON_DOWNLOAD_UPLOAD: {
    API_BASE_URL: ADMIN_SERVICE,
    API_BASE_URL_INVOICE: INVOICE_SERVICE,
    API_BASE_URL_MONTHLY: MONTH_SERVICE,
    API_BASE_URL_DAILY: DAILY_SERVICE,
    API_BASE_URL_MONTH_BATCH: MONTH_BATCH,

    FETCH_REPORT_API: "common-uploads-downloads/reports-process-details",
    FETCH_CALENDAR_API: "common-uploads-downloads/report",
    DOWNLOAD_REPORT_LOT_PART_SHORTAGE_API:
      "common-uploads-downloads/lotpart-shortage-report",
    FETCH_MASTER_COUNTRY_CODE_NAME_API:
      "common-uploads-downloads/countrycodename",

    // FETCH_LOT_PART_SHORTAGE_CAR_DESTINATION_API: "invoice/carFamilyAndDestinationMaster",
    FETCH_LOT_PART_SHORTAGE_CAR_DESTINATION_API:
      "returnable-packing/car-family-destination-master",

    DOWNLOAD_API: "common-uploads-downloads/national-calender-masters",
    MASTER_BARCODE_DOWNLOAD_API: "common-uploads-downloads/barcode-users",
    CUSTOMER_BROKER: "common-uploads-downloads/custom-broker-master",
    DOWNLOAD_FORMAT_API:
      "common-uploads-downloads/national-calendermaster-template",
    DOWNLOAD_MASTER_ADDRESS_API: "common-uploads-downloads/address-master",
    DOWNLOAD_CAR_FAMILY_DESTINATION_API:
      "common-uploads-downloads/carfamily-destination-master-report",
    DOWNLOAD_COUNTRY_OF_ORIGIN_MASTER_API:
      "common-uploads-downloads/country-origin-master",
    DOWNLOAD_FILE_PATH_API: "on-demand-downloads/report-download",
    MASTER_LOTPARTPRICE_DOWNLOAD_FORMAT_API:
      "common-uploads-downloads/partprice-master-template",
    UPLOAD_API:
      "common-uploads-downloads/national-calender-masters?batchName=NationalCalendarexcelBatchReceiving",
    UPLOAD_LOTPARTPRICE_MASTER:
      "common-uploads-downloads/lot-partprice-masters",
    UPLOAD_MASTER_ADDRESS_DOWNLOAD_TEMPLATE_API:
      "common-uploads-downloads/address-master-template",
    UPLOAD_COUNTRY_OF_ORIGIN_API:
      "common-uploads-downloads/country-code-origins",
    UPLOAD_COUNTRY_OF_ORIGIN_TEMPLATE_API:
      "common-uploads-downloads/country-origin-template",
    UPLOAD_MASTER_ADDRESS_API: "common-uploads-downloads/address-masters",
    UPLOAD_PART_MASTER_API: "commonUploadDownload/uploadPartMaster",
    UPLOAD_MASTER_PART_PRICE_DOWNLOAD_TEMPLATE_API:
      "common-uploads-downloads/pxp-partprice-template",
    UPLOAD_MASTER_PART_PRICE_API:
      "common-uploads-downloads/pxp-partprice-masters",
    UPLOAD_INVOICE_GENERATION_API:
      "common-uploads-downloads/work-plan-masters?batchName=BINS027",
    DOWNLOAD_CAR_FAMILY_MASTER_TEMPLATE:
      "common-uploads-downloads/carfamily-destination-master",
    UPLOAD_CAR_FAMILY_MASTER_API:
      "common-uploads-downloads/carfamily-destination-masters?batchName=BINS126",
    DOWNLOAD_DAILY_CONTAINER_RSHEET:
      "common-uploads-downloads/container-requisition",
    DOWNLOAD_ACTUAL_PACKING_STATUS:
      "common-uploads-downloads/actual-packingstatus-report",
    DOWNLOAD_ACTUAL_VANNING_STATUS:
      "common-uploads-downloads/actual-vanningstatus-report",
    MONTHLY_VPR: "monthly-vpr/part-report",
    DAILY_VPR: "daily-reports/vpr-part-report",
    DAILY_VPP: "daily-reports/vpp-part-report",
    DAILY_TMCEDI: "daily-reports/tmcedi-module-information",
    DAILY_VPR_MODULE: "daily-reports/vpr-module-acrequest",
    // DISCREPANCY_REPORT: "commonUploadDownload/printDiscrepancyeReport",
    DISCREPANCY_REPORT: "discrepancies/data-discrepancy",
    PACKING_DEPARTMENT_LIST: "dropdown/packing-departments",
    PART_NAME_DIFF_LIST: "common-uploads-downloads/reports/downloads",
    DOWNALOD_MOTHLY_REQ: "dropdowns/mcr",
    SHIPMENT_SCH_PLAN: "shipment-schedules/report",
    PORT_MASTER_LIST: "port-masters",

    // TMC_EDI_DATA: "invoice/tmcedidatareport",
    TMC_EDI_DATA: "tmc-edit-data/report",

    CONTAINER_BY_VAN: "common-uploads-downloads/containers",

    // INV_PART_LABEL: "invoice/invoicepartlabel",
    INV_PART_LABEL: "tmc-edit-data/part-label",

    // TMC_Invoice_Information: "invoice/tmcInvInfoReport",
    TMC_Invoice_Information: "tmc-information/report",

    DOWNLOAD_CUSTOM_QUERY: "customQuery",
    DOWNLOAD_PART_MATERIAL: "common-uploads-downloads/part-material-address",
    DOWNLOAD_PACKING_TIME_SEQ: "common-uploads-downloads/packingtime-seq-order",
    UPLOAD_PART_MATERIAL: "common-uploads-downloads/part-material-address",
    UPLOAD_PACKING_TIME_SEQ: "common-uploads-downloads/packingtime-seq-order",
    DISCREPANCY_ROLE_API: "discrepancies/roles",
    DOWNLOAD_BARCODE_APPUSER: "common-uploads-downloads/flp-user-data",
    UPLOAD_BARCODE_APPUSER: "common-uploads-downloads/flp-user-data",
  },

  HAISEN_DETAILS_RETRIEVAL: {
    API_BASE_URL: INVOICE_SERVICE,

    // FETCH_SEARCH_API: "invoice/searchInvoice",
    FETCH_SEARCH_API: "invoices/companycode-buyer",

    // FETCH_SAVE_HAISEN_API: "invoice/saveInvHaisenDetails",
    FETCH_SAVE_HAISEN_API: "haisen-details",

    // FETCH_INVOICE_DETAILS: "invoice/getInvDtlsByHaisenNo",
    FETCH_INVOICE_DETAILS: "invoices/haisen-no",

    // SAVE_INVOICE_DETAILS: "invoice/updateInvoiceDetails",
    SAVE_INVOICE_DETAILS: "haisen-details",
  },

  INVOICE_RECALCULATION: {
    API_BASE_URL: INVOICE_SERVICE,

    // FETCH_SEARCH_API: "invoice/invoiceDetailsByInv",
    FETCH_SEARCH_API: "recalculate",

    // SEARCH_API: "invoice/invrecalculatedetails",
    SEARCH_API: "recalculate",

    // SAVE_API: "invoice/recalculateInvoice"
    SAVE_API: "recalculate",
  },

  INVOICE_SHIPPING_REPORT: {
    API_BASE_URL: INVOICE_SERVICE,
    API_BASE_URL_REPORT: INVOICE_SERVICE,

    // REPORT_PATH: "invoice/downloadInvoiceReports",
    REPORT_PATH: "inquiry-shipping-reports/invoice-reports",

    // REPORT_TYPES_DESTINATION: "invoice/destinationAndShippingReports",
    REPORT_TYPES_DESTINATION:
      "inquiry-shipping-reports/destination-shipping-reports",

    // PRINT_REPORT: "invoice/downloadInvoiceReports",
    PRINT_REPORT: "inquiry-shipping-reports/invoice-reports",

    //DOWNLOAD_PDF_XLS: "invoice/downloadExportedReports",
    DOWNLOAD_PDF_XLS: "inquiry-shipping-reports/download/exported-reports",
  },

  SHIPPING_CONTAINER_RESULT: {
    API_BASE_URL: INVOICE_SERVICE,

    // DEST_API: "invoice/destCodeAndDestName",
    DEST_API: "work-plan/destination/code-name",

    // RENBAN_API: "invoice/renbanCodesByContDstCode",
    RENBAN_API: "work-plan/renban-code",

    //GRID_API: "invoice/invShippingContainerResults",
    GRID_API: "inquiry-shipping-reports/shipping-container/results",
  },

  INVOICE_MAINTENANCE: {
    API_BASE_URL: INVOICE_SERVICE,

    // INVOICE_LIST_API: "invoice/orderTypeAndInvoiceNo",
    INVOICE_LIST_API: "inquiry-shipping-reports/maintenance",

    // INVOICE_SEARCH_API: "invoice/searchByInvoiceNo",
    INVOICE_SEARCH_API: "invoices/invoice-no",

    // INVOICE_UPDATE_API: "invoice/updateInvDetailsByInvNo",
    INVOICE_UPDATE_API: "invoices",
  },

  LOT_PRICE_MASTER: {
    API_BASE_URL: INVOICE_SERVICE,

    // GRID_API: "invoice/searchLotPriceMasterDetails",
    GRID_API: "lot-price/master-details",

    // CAR_FAMILY_DEST: "invoice/destinationAndCarfamily",
    CAR_FAMILY_DEST: "lot-price/destination-car-family",

    // PART_PRICE_API: "invoice/searchLotPartPricePopupDetails",
    PART_PRICE_API: "lot-price/price-details",

    // EDIT_API: "invoice/UpdateLotPartPricePopupDetails"
    EDIT_API: "lot-price/price-details",
  },

  INQUIRY_PROCESS_STATUS_CONTROL: {
    API_BASE_URL: ADMIN_SERVICE,

    INQUIRY_LIST_API: "common-process-control/process-names",
    INQUIRY_INTERFACE_API: "common-process-control/process-interface-names",
    INQUIRY_LIST_SELECTION_API: "common-process-control/process-names/",
    INQUIRY_LIST_SUBMIT_API: "common-process-control/submitProcess",
    INQUIRY_LIST_SYSTEM_API: "common-process-control/system-names",
    INQUIRY_LIST_PROCESS_API: "common-process-control/process-status",
    INQUIRY_LIST_PROCESS_LOGS_API: "common-process-control/process-logs",
    INQUIRY_LIST_DOWNLOAD_PROCESS_LOGS_API:
      "common-process-control/process-logs/downloads",
    INQUIRY_LIST_DOWNLOAD_ERR_PROCESS_LOGS_API:
      "common-process-control/process-logs/excel-exports",
  },

  VESSEL_BOOKING_MASTER: {
    API_BASE_URL: MONTH_SERVICE,
    TPEX_INVOICE_BATCH: INVOICE_BATCH,

    // WORK_PLAN_MASTER_API: "invoice/uplaodWrkPlanMasterFromVesselBooking",
    WORK_PLAN_MASTER_API: "work-plan-master/vessel-booking",

    VESSEL_BOOKING_DEST: "dropdowns/destinations-shipping-companies",
    SEARCH_API: "vessel-bookings",
    SAVE_API: "vessel-bookings/vessel-container",
    UPLOAD_API: "vessel-bookings/uploads",
    DOWNLOAD_API: "vessel-bookings/downloads",
  },

  SHIPPING_CONTROL_MASTER_LIST: {
    API_BASE_URL: INVOICE_SERVICE,

    // ONLOAD_LIST_API: "invoice/shippingControlMasterList",
    ONLOAD_LIST_API: "shipping",

    // BUYER_SELECTED_LIST_API: "invoice/consigneeAndNotifyPartyByBuyer",
    BUYER_SELECTED_LIST_API: "shipping/consignee-buyer",

    // SAVE_API: "invoice/saveShippingControlMaster",
    SAVE_API: "shipping",

    // DELETE_API: "invoice/deleteShippingControlMaster",
    DELETE_API: "shipping",
  },

  MIX_PRIVILEGE_MASTER: {
    API_BASE_URL: INVOICE_SERVICE,

    // GRID_API: "invoice/fetchMixPrivilegeDetails",
    GRID_API: "mix-privilege",

    // CAR_FAMILY_DEST: "invoice/destinationAndCarfamily",
    CAR_FAMILY_DEST: "lot-price/destination-car-family",

    // SAVE_API: "invoice/saveMixPrivilegeMaster",
    SAVE_API: "mix-privilege",

    // DELETE_API: "invoice/deleteMixPrivilegeMaster",
    DELETE_API: "mix-privilege",
  },

  PXP_PART_PRICE_MAINTENANCE: {
    API_BASE_URL: INVOICE_SERVICE,

    // CAR_FAMILY_DEST: "invoice/destinationAndCarfamilyCodes?userId=",
    CAR_FAMILY_DEST: "part-price-master/destination-car-family-codes?userId=",

    // GRID_API: "invoice/partPriceMasterList",
    GRID_API: "part-price-master/price-details",

    // ADD_API: "invoice/savePxpPartPriceMaster",
    ADD_API: "part-price-master",

    // EDIT_API: "invoice/updatePxpPartPriceMaster",
    EDIT_API: "part-price-master/pxpupdate",

    // DELETE_API: "invoice/deletePxpPartPriceMaster",
    DELETE_API: "part-price-master",

    // DOWNLOAD_API: "invoice/downloadPartPriceMasterDetails",
    DOWNLOAD_API: "part-price-master/download",

    // GET_PARTNAME: "invoice/partName/",
    GET_PARTNAME: "part-price-master/part-name/",
  },

  RENBANE_GROUP_CODE_MASTER: {
    API_BASE_URL: INVOICE_SERVICE,

    // RENBANE_CODE_MASTER_DEST: "invoice/destCodeAndDestName",
    RENBANE_CODE_MASTER_DEST: "work-plan/destination/code-name",

    // SEARCH_API: "invoice/renbanGroupCodeByDestination",
    SEARCH_API: "renban-group-code/details",

    // SAVE_API: "invoice/saveRenbanCodeMaster",
    SAVE_API: "renban-group-code",

    // UPDATE_API: "invoice/updateRenbanCodeMaster",
    UPDATE_API: "renban-group-code",

    // DELETE_API: "invoice/renbanGroupCode",
    DELETE_API: "renban-group-code",
  },

  ISO_CONTAINER: {
    API_BASE_URL: DAILY_SERVICE,
    PLANT_DEST_CODE: "iso-containers/plant-destinations",
    SEARCH_API: "iso-containers/details",
    SAVE_API: "iso-containers",
  },

  INVOICE_SETUP_MASTER: {
    API_BASE_URL: INVOICE_SERVICE,

    // IMPORTER_CODE_API: "invoice/destCodeAndDestName",
    IMPORTER_CODE_API: "work-plan/destination/code-name",

    // SEARCH_API: "invoice/invoiceSetupMaster",
    SEARCH_API: "setup-master",

    // DELETE_API: "invoice/invoiceSetupMaster",
    DELETE_API: "setup-master",

    // SAVE_API: "invoice/invoiceSetupMaster"
    SAVE_API: "setup-master",
  },

  RETURNABLE_PACKING_MASTER: {
    API_BASE_URL: INVOICE_SERVICE,

    // ONLOAD_API: "invoice/packingPlantAndImporterCode",
    ONLOAD_API: "returnable-packing/packing-plant-importer-code",

    // SEARCH_API: "invoice/returnablePackingMasterList",
    SEARCH_API: "returnable-packing",

    // DELETE_API: "invoice/deleteReturnablePackingMasterList",
    DELETE_API: "returnable-packing",

    //SAVE_API: "invoice/saveReturnablePackingMasterList",
    SAVE_API: "returnable-packing",
  },

  COMPANY_CODE: {
    API_BASE_URL: ADMIN_SERVICE,
    DROP_DOWN_URL: "dropdown/company-plants",
  },

  PART_MASTER_INQUIRY: {
    API_BASE_URL: INVOICE_SERVICE,

    // SEARCH_URL: "invoice/partmaster/search",
    SEARCH_URL: "part-master",

    // Add_URL: "invoice/partmaster/save",
    Add_URL: "part-master/code-master",

    // EDIT_URL: "invoice/partmaster/update",
    EDIT_URL: "part-master",

    // DELETE_URL: "invoice/partmaster/delete",
    DELETE_URL: "part-master",

    // INHOUSE_SHOP: "invoice/partmaster/inhouseshop?companyCode=",
    INHOUSE_SHOP: "part-master/inhouse-shop?companyCode=",
  },

  MANUAL_INVOICE_GENERATION: {
    API_BASE_URL: INVOICE_SERVICE,

    // INVOICE_LIST_API: "invoice/searchManualInvoice",
    INVOICE_LIST_API: "manual-invoice",
  },

  DAILY_PACKING_MASTER: {
    API_BASE_URL: DAILY_SERVICE,
    API_ADMIN_URL: ADMIN_SERVICE,

    PLANT_DEST_URL: "dropdown/plants-destination-codes?dpkFlag=Y&companyCode=",
    SEARCH_URL: "manual-packings",
    PACK_URL: "manual-packings",
  },

  PACKING_MONITORING_STATUS: {
    API_BASE_URL: DAILY_SERVICE,
    API_BASE_URL_CAR_FAMILY: INVOICE_SERVICE,
    API_ADMIN_URL: ADMIN_SERVICE,

    PLANT_DEST_URL: "dropdown/plants-destination-codes?dpkFlag=N&companyCode=",

    // CAR_FAMILY_DEST: "invoice/destinationAndCarfamily",
    CAR_FAMILY_DEST: "part-price-master/destination-car-family-codes",
    SEARCH_URL: "packing-monitoring/module-destination",
    UNPACK_URL: "packing-monitoring/unpack-operation",
  },

  D_LANE_PROCESSING: {
    API_BASE_URL: INVOICE_SERVICE,
    API_DAILY_SERVICE: DAILY_SERVICE,

    // API_PACKING_PLANT: "invoice/vanningPlant?planningFlag=p&companyCode=",
    API_PACKING_PLANT:
      "packing-vanning/vanning-plants?planningFlag=p&dpkFlag=Y&companyCode=",

    API_PACKING_LINE: "daily/dlaneprocessing/packinglinegroupcode?companyCode=",
    API_SEARCH: "/dlane-processing",
    API_SAVE: "dlane-processing/process-masters",
  },

  SINGLE_MODULE_PACKING_LINE_MASTER: {
    API_ADMIN_SERVICE_BASE_URL: ADMIN_SERVICE,
    API_INVOICE_SERVICE_BASE_URL: INVOICE_SERVICE,

    API_SEARCH_URL: "single-module/packing-plants",
    API_DELETE_URL: "single-module/packing-plants",
    API_EDIT_URL: "single-module/packing-plants",
  },
  UNPACK_URL: "packing-monitoring/unpack-operation",
};

export const MIME_TYPE = {
  csv: "text/csv",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  pdf: "application/pdf",
  txt: "text/plain",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xml: "application/xml",
  zip: "application/zip",
};

export const CODE_MASTER_ID = {
  CAR_FAMILY_MASTER: "1",
  COUNTRY_CODE_FOR_CEO: "2",
  CURRENCY_CODE_MASTER: "3",
  FINAL_DEST_MASTER: "4",
  PAYMENT_TERM_MASTER: "5",
  PORT_MASTER: "6",
  REASON_STOP_AND_CALL_MASTER: "9",
};

export const SC2_URL = {
  SC2_DEV: "https://sc2-dev.tmap-em.toyota-asia.com/",
};

export const AZURE_URL = {
  DEV: "https://tpex-dev.tdem.toyota-asia.com/authservice/azure/login",
  TRIAL: "https://tpex-trial.tdem.toyota-asia.com/authservice/azure/login",
};
