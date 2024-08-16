/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * AccountInfo
 * 科目信息
 */
export interface AccountInfo {
  /** 科目编码 */
  accountCode?: string
  /** 主键id */
  accountId?: string
  /** 如果是银存科目，此处保存银行账户的account no */
  accountNo?: string
  /** 科目类型 */
  accountType?: string
  /** 在会计软件侧的唯一id */
  accountingAccountId?: string
  /** 授权记录id */
  accountingAuthRecordId?: string
  /**
   * 会计软件中该科目数据最后一次更新时间
   * @format date-time
   */
  accountingModifyTime?: string
  /** 会计软件侧的组织id */
  accountingOrgId?: string
  /** 科目对应的税率 */
  accountingTaxCode?: string
  /**
   * 是否是银存科目
   * @example false
   */
  bankAccountFlag?: boolean
  /** 银行账户持有人名称 */
  bankAccountHolderName?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 科目币种 */
  currency?: string
  /** 科目描述 */
  description?: string
  /** 银行名称 */
  institutionName?: string
  /**
   * 修改时间
   * @format date-time
   */
  modifyTime?: string
  /** 科目名称 */
  name?: string
  /** 组织id */
  orgId?: string
  /** 会计软件 */
  software?: string
  /** 如果是银存科目，此处保存银行账户的sort code */
  sortCode?: string
  /** 科目状态 */
  status?: string
}

/**
 * AccountPredictRequest
 * 科目预测请求
 */
export interface AccountPredictRequest {
  /** 关联的银行流水ID */
  bankStatementLineId?: string
  /** 对手方ID */
  contactId: string
  /** 组织ID */
  orgId: string
  /** 关联的Doc的OcrVoucher的ID */
  voucherId?: string
}

/**
 * AccountQueryRequest
 * 科目查询请求
 */
export interface AccountQueryRequest {
  /** 组织id */
  orgId: string
}

/** AccountStatisticInfo */
export interface AccountStatisticInfo {
  /** 科目ID */
  accountId: string
  /** 科目名称 */
  accountName: string
  /** 科目子类型 */
  accountSubType: string
  /** 原始发生额，正数表示借记、负数表示贷记 */
  accountingNetAmount?: MoneyInfo
  /** 金额，永远是正数，配合amountDirection使用 */
  amount?: MoneyInfo
  /** 资金方向，借或者贷，跟amount配合使用 */
  amountDirection?: string
  /**
   * 贡献率
   * @format int32
   */
  contributionPercentage?: number
  /**
   * 报表结束日期
   * @format date-time
   */
  endDate?: string
  /**
   * 环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  mom?: number
  /** 展示金额 */
  showAmount: MoneyInfo
  /**
   * 报表开始日期
   * @format date-time
   */
  startDate?: string
}

/**
 * AccountingAllowAccessRequest
 * 同步xero数据请求
 */
export interface AccountingAllowAccessRequest {
  /**
   * 用户是否通过授权，true表示通过，false表示没通过
   * @example false
   */
  allowAccess: boolean
  /** xero授权码 */
  authCode: string
  /** xero授权state */
  state: string
}

/**
 * AccountingAuthRecordInfo
 * 会计软件授权记录
 */
export interface AccountingAuthRecordInfo {
  /** 授权码 */
  authCode?: string
  /** 会计软件的授权url */
  authUrl?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string
  /**
   * 最后修改时间
   * @format date-time
   */
  modifyTime: string
  /** 主键id */
  recordId: string
  /** 请求幂等id */
  requestId: string
  /** 授权范围 */
  scopeList: string[]
  /**
   * 会计软件
   * @example "AccountingSoftwareEnum"
   */
  software: string
  /**
   * 授权状态
   * @example "AccountingAuthStatusEnum"
   */
  status?: string
  /** 授权用户id */
  userId?: string
}

/**
 * AddressInfo
 * 地址信息
 */
export interface AddressInfo {
  /** 详细街道地址 */
  addressLine1?: string
  /** 详细地址公寓房间号 */
  addressLine2?: string
  /** addressLine3 */
  addressLine3?: string
  /** addressLine4 */
  addressLine4?: string
  /** 城市 */
  city?: string
  /** 国家 */
  country?: string
  /** 国家地区码 */
  countryCode?: string
  /** 州/省 */
  state?: string
}

/**
 * AesKeyFetchRequest
 * 获取前后端加解密信息请求模型
 */
export interface AesKeyFetchRequest {
  /** 客户端RSA公钥值 */
  clientRsaPublicKey: string
  /** 使用服务端RSA公钥的KEY ID */
  serverRsaKeyId: string
}

/**
 * AesKeyQueryRequest
 * 查询公私钥信息请求
 */
export interface AesKeyQueryRequest {
  /** 使用服务端分发的AES KEY ID */
  aesKeyId: string
  /** 客户端RSA公钥值 */
  clientRsaPublicKey: string
}

/**
 * AllEnumsInfo
 * 包含所有前端需要感知的枚举类，用于在swagger json中生成枚举类，和前端代码通过swagger json保持同步
 */
export interface AllEnumsInfo {
  /**
   * 科目状态
   * @example "AccountStatusEnum"
   */
  accountStatus?: 'ACTIVE' | 'ARCHIVED'
  /**
   * 科目类型
   * @example "AccountTypeEnum"
   */
  accountType?: 'ASSET' | 'EQUITY' | 'EXPENSE' | 'LIABILITY' | 'REVENUE'
  /**
   * 会计软件授权状态枚举
   * @example "AccountingAuthStatusEnum"
   */
  accountingAuthStatus?: 'AUTHED' | 'CANCELED' | 'INIT'
  /**
   * 会计软件授权类型
   * @example "AccountingAuthTypeEnum"
   */
  accountingAuthTypeEnum?: 'ADD_ORG' | 'SIGN_IN' | 'SIGN_UP'
  /**
   * 会计软件断连原因
   * @example "AccountingDisconnectReasonEnum"
   */
  accountingDisconnectReasonEnum?: 'ACCOUNTING_RESPONSE_AUTH_FAILED' | 'USER_DISCONNECT_IN_PINVO'
  /**
   * 展示报表类型
   * @example "AccountingReportShowTypeEnum"
   */
  accountingReportShowTypeEnum?: 'TOP_COST_OF_SALES_SUPPLIERS' | 'TOP_REVENUE_CUSTOMERS'
  /**
   * 会计软件枚举
   * @example "AccountingSoftwareEnum"
   */
  accountingSoftware?: 'QB' | 'SAGE' | 'XERO'
  /**
   * 附件关联对象类型
   * @example "AttachmentTargetTypeEnum"
   */
  attachmentTargetTypeEnum?: 'CHASING_RECORD' | 'GENERAL_QUESTION' | 'VOUCHER'
  /**
   * 附件上传方式
   * @example "AttachmentUploadMethodEnum"
   */
  attachmentUploadMethodEnum?: 'EMAIL' | 'MANUAL' | 'PINVO_IO_SYNC'
  /**
   * 附件上传场景
   * @example "AttachmentUploadSceneEnum"
   */
  attachmentUploadSceneEnum?:
    | 'APPLY_CHASING_UPLOAD_ATTACHMENT'
    | 'BKP_UPLOAD_ATTACHMENTS_FOR_GENERAL_QUESTION'
    | 'CLIENT_UPLOAD_DOCUMENTS'
    | 'CLIENT_UPLOAD_DOCUMENT_AND_MATCH_STATEMENT_LINE'
    | 'EMAIL_ATTACHMENT'
    | 'PINVO_IO_SYNC'
    | 'REPLY_CHASING_UPLOAD_ATTACHMENT'
  /**
   * 银行流水科目来源
   * @example "BankStatementAccountSourceEnum"
   */
  bankStatementAccountSource?:
    | 'FUND_DESCRIPTION'
    | 'NONE'
    | 'ORG_CONFIRMED_VOUCHERS'
    | 'SYSTEM_CERTAIN_RECON_VOUCHERS'
    | 'SYSTEM_UNCERTAIN_RECON_VOUCHERS'
  /**
   * 银行流水chasing状态
   * @example "BankStatementLineChasingShowStatusEnum"
   */
  bankStatementLineChasingShowStatusEnum?: 'CHASING' | 'COMPLETED' | 'NO_NEED_TO_CHASE' | 'TO_CHASE'
  /**
   * 系统匹配到已有对手方的匹配方式
   * @example "BankStatementLineContactMatchResultEnum"
   */
  bankStatementLineContactMatchResultEnum?:
    | 'MATCH_CONTACT_ACCOUNT_NO'
    | 'MATCH_CONTACT_BANK_ACCOUNT_NAME'
    | 'MATCH_CONTACT_NAME'
    | 'MATCH_CONTACT_PERSON_EMAIL'
    | 'MATCH_CONTACT_PERSON_FIRST_NAME'
    | 'MATCH_CONTACT_PERSON_FULL_NAME'
    | 'MATCH_CONTACT_PERSON_LAST_NAME'
    | 'NO_MATCH_CONTACT'
    | 'SIMILAR_STATEMENT_LINE_MATCH_CONTACT'
    | 'STATEMENT_LINE_NO_COUNTER_PARTY_NAME_OR_ACCOUNT_NO'
  /**
   * 银行流水展示状态
   * @example "BankStatementLineShowStatusEnum"
   */
  bankStatementLineShowStatus?:
    | 'CERTAIN_RECON_SUCCESS'
    | 'ORG_CONFIRMED'
    | 'ORG_DENIED'
    | 'PRE_PROCESSING'
    | 'RECONCILING'
    | 'UNCERTAIN_RECON_FAILED'
    | 'UNCERTAIN_RECON_SUCCESS'
    | 'VOUCHER_PRE_PROCESSING'
  /**
   * 记账频率
   * @example "BookkeepingFrequencyEnum"
   */
  bookkeepingFrequencyEnum?: 'BI_WEEKLY' | 'DAILY' | 'MONTHLY' | 'QUARTERLY'
  /**
   * 面向客户的记账进度状态
   * @example "BookkeepingProgressToClientStatusEnum"
   */
  bookkeepingProgressToClientStatusEnum?:
    | 'CHASING_CLIENT'
    | 'CONFIRMED'
    | 'HISTORICAL_DATA'
    | 'IN_PROGRESS'
    | 'NOT_START_YET'
  /**
   * BILL/INVOICE业务凭证状态
   * @example "BusinessVoucherStatusEnum"
   */
  businessVoucherStatus?: 'CANCELED' | 'DELETED' | 'DRAFT' | 'ISSUED' | 'PAID' | 'UNKNOWN'
  /**
   * chasing问题类型
   * @example "ChasingQuestionTypeEnum"
   */
  chasingQuestionTypeEnum?: 'BANK_STATEMENT_LINE_PERSONAL_OR_BUSINESS' | 'OPEN_QUESTION'
  /**
   * chasing角色类型
   * @example "ChasingRoleTypeEnum"
   */
  chasingRoleTypeEnum?: 'BOOKKEEPER' | 'CLIENT'
  /**
   * chasing状态
   * @example "ChasingStatusEnum"
   */
  chasingStatusEnum?: 'CANCELLED' | 'CHASING' | 'COMPLETED' | 'INIT' | 'REPLIED'
  /**
   * chasing目标类型
   * @example "ChasingTargetTypeEnum"
   */
  chasingTargetTypeEnum?: 'BANK_STATEMENT_LINE' | 'GENERAL_QUESTION' | 'VOUCHER'
  /**
   * chasing类型
   * @example "ChasingTypeEnum"
   */
  chasingTypeEnum?: 'CHASING_CONTEXT' | 'CHASING_VOUCHER'
  /**
   * 通讯录装填
   * @example "ContactStatusEnum"
   */
  contactStatus?: 'ACTIVE' | 'ARCHIVED' | 'UNKNOWN'
  /**
   * 币种
   * @example "CurrencyEnum"
   */
  currencyEnum?:
    | 'AUD'
    | 'BGN'
    | 'BRL'
    | 'CAD'
    | 'CHF'
    | 'CNY'
    | 'CZK'
    | 'DKK'
    | 'EUR'
    | 'GBP'
    | 'HKD'
    | 'HRK'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'ISK'
    | 'JPY'
    | 'KRW'
    | 'MXN'
    | 'MYR'
    | 'NOK'
    | 'NZD'
    | 'PHP'
    | 'PLN'
    | 'RON'
    | 'RUB'
    | 'SEK'
    | 'SGD'
    | 'THB'
    | 'TRY'
    | 'USD'
    | 'ZAR'
  /**
   * 凭证文档类型
   * @example "DocumentTypeEnum"
   */
  documentTypeEnum?: 'BANK_STATEMENT' | 'BILL' | 'INVOICE' | 'PAYSLIP' | 'RECEIPT' | 'UNKNOWN'
  /**
   * 资金方向
   * @example "FundDirectionEnum"
   */
  fundDirection?: 'RECEIVE' | 'SPEND'
  /**
   * 资金凭证状态
   * @example "FundVoucherStatusEnum"
   */
  fundVoucherStatus?: 'CANCELED' | 'DELETED' | 'NORMAL'
  /**
   * HTTP内容类型枚举
   * @example "HttpContentTypeEnum"
   */
  httpContentTypeEnum?:
    | 'AIFF'
    | 'ASP'
    | 'AUDIO_BASIC'
    | 'AUDIO_MPEG'
    | 'AVI'
    | 'BASIC'
    | 'BMP'
    | 'CSS'
    | 'CSV'
    | 'FAX'
    | 'GIF'
    | 'GZIP'
    | 'HEIC'
    | 'HEIF'
    | 'HTML'
    | 'IVF'
    | 'JPEG'
    | 'MID'
    | 'MOV'
    | 'MP1'
    | 'MP2'
    | 'MP3'
    | 'MP4'
    | 'MPEG4'
    | 'MPEGURL'
    | 'MSWORD'
    | 'PDF'
    | 'PNETVUE'
    | 'PNG'
    | 'RN_MPEG'
    | 'SCPLS'
    | 'TIFF'
    | 'TXT'
    | 'VIDEO_MPEG'
    | 'VND_APPLE_NUMBERS'
    | 'VND_MS_EXCEL'
    | 'VND_MS_POWERPOINT'
    | 'VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION'
    | 'VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET'
    | 'VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT'
    | 'VND_RAR'
    | 'VND_RN_REALMEDIA_VBR'
    | 'WAV'
    | 'WEBP'
    | 'XML'
    | 'X_7Z_COMPRESSED'
    | 'X_BMP'
    | 'X_BZIP'
    | 'X_BZIP2'
    | 'X_ICO'
    | 'X_ICON'
    | 'X_IMG'
    | 'X_IWORK_NUMBERS_SFFNUMBERS'
    | 'X_JPG'
    | 'X_LA_LMS'
    | 'X_LIQUID_FILE'
    | 'X_LIQUID_SECURE'
    | 'X_M4A'
    | 'X_MEI_AAC'
    | 'X_MPEG'
    | 'X_MPG'
    | 'X_MS_ASF'
    | 'X_MS_BMP'
    | 'X_MS_WAX'
    | 'X_MS_WM'
    | 'X_MS_WMA'
    | 'X_MS_WMV'
    | 'X_MS_WMX'
    | 'X_MS_WVX'
    | 'X_PIC'
    | 'X_PNG'
    | 'X_PPT'
    | 'X_SGI_MOVIE'
    | 'X_TAR'
    | 'X_XLS'
    | 'X_ZIP_COMPRESSED'
    | 'ZIP'
  /**
   * item的金额类型
   * @example "ItemAmountTypeEnum"
   */
  itemAmountType?: 'EXCLUSIVE' | 'INCLUSIVE' | 'NO_TAX'
  /**
   * 人工对账记录状态
   * @example "ManualReconRecordStatusEnum"
   */
  manualReconRecordStatusEnum?: 'CONFIRMED' | 'INIT' | 'SYNCED' | 'SYNCING'
  /**
   * 媒体类型
   * @example "MediumTypeEnum"
   */
  mediumType?: 'AUDIO' | 'FILE' | 'IMAGE' | 'TEXT' | 'VIDEO'
  ocrBusinessVoucherTypeEnum?: 'BANK_STATEMENT' | 'INVOICE' | 'PAYSLIP' | 'RECEIPT' | 'UNKNOWN'
  /**
   * OCR凭证状态
   * @example "OcrVoucherStatusEnum"
   */
  ocrVoucherStatus?: 'CANCELED' | 'CONFIRMED' | 'DELETED' | 'INIT' | 'NORMAL'
  /**
   * OCR识别单据类型
   * @example "OcrBusinessVoucherTypeEnum"
   */
  ocrVoucherTypeEnum?: 'BANK_STATEMENT' | 'INVOICE' | 'PAYSLIP' | 'RECEIPT' | 'UNKNOWN'
  /**
   * OB支付授权状态
   * @example "OpenBankingPaymentAuthStatusEnum"
   */
  openBankingPaymentAuthStatus?:
    | 'AUTHORIZED'
    | 'AWAITING_AUTHORIZATION'
    | 'CONSUMED'
    | 'FAILED'
    | 'REJECTED'
    | 'REVOKED'
  /**
   * OB支付ISO状态
   * @example "OpenBankingPaymentISOStatusEnum"
   */
  openBankingPaymentISOStatus?:
    | 'ACCC'
    | 'ACCP'
    | 'ACFC'
    | 'ACSC'
    | 'ACSP'
    | 'ACTC'
    | 'ACWC'
    | 'ACWP'
    | 'CANC'
    | 'PART'
    | 'PATC'
    | 'PDNG'
    | 'RCVD'
    | 'RJCT'
  /**
   * OB支付状态
   * @example "OpenBankingPaymentStatusEnum"
   */
  openBankingPaymentStatus?: 'COMPLETED' | 'FAILED' | 'PENDING'
  /**
   * 客户否定对账的原因枚举
   * @example "OrgReconDeniedReasonEnum"
   */
  orgReconDeniedReason?:
    | 'BANK_STATEMENT_CAN_NOT_MATCH_FUND_DESC'
    | 'VOUCHER_MATCH_OTHER_STATEMENT_LINE'
    | 'VOUCHER_UPLOADED_WAIT_RECON'
  /**
   * 组织任务完成状态枚举
   * @example "OrgTaskStatusEnum"
   */
  orgTaskStatusEnum?: 'DELETE' | 'DONE' | 'INIT'
  /**
   * 组织任务类型
   * @example "OrgTaskTypeEnum"
   */
  orgTaskTypeEnum?:
    | 'AUTHORIZE_CLIENT_ACCESS_XERO'
    | 'CHECK_AND_SUBMIT_CIS_AUTH_CODE'
    | 'CHECK_AND_SUBMIT_COMPANIES_HOUSE_AUTH_CODE'
    | 'CHECK_AND_SUBMIT_CORPORATE_TAX_AUTH_CODE'
    | 'CHECK_AND_SUBMIT_PAYE_AUTH_CODE'
    | 'CHECK_AND_SUBMIT_UTR_NUMBER'
    | 'CHECK_AND_SUBMIT_VAT_AUTH_CODE'
    | 'DOCUMENTS_REQUEST'
    | 'GENERAL_QUESTION_ANSWERING'
    | 'TRANSACTION_CONTEXT_CONFIRM'
    | 'UPLOAD_BANK_STATEMENT_LINES_MANUALLY'
    | 'XERO_BIND_BANK_ACCOUNT'
  /**
   * 组织类型枚举
   * @example "OrgTypeEnum"
   */
  orgType?: 'COMPANY' | 'PERSON'
  /**
   * 支付类型
   * @example "PaymentTypeEnum"
   */
  paymentType?:
    | 'BULK_PAYMENT'
    | 'DIRECT_DEBIT'
    | 'DOMESTIC_RECURRING_PAYMENT'
    | 'DOMESTIC_SCHEDULED_PAYMENT'
    | 'DOMESTIC_SINGLE_PAYMENT'
  /**
   * Pinvo服务包
   * @example "PinvoServicePackageEnum"
   */
  pinvoServicePackageEnum?: 'BESPOKE' | 'GROWTH' | 'LITE' | 'MINI' | 'PRO' | 'PRO_MAX' | 'STARTER'
  /**
   * 对账记录大类的对账状态
   * @example "ReconRecordCategoryShowStatusEnum"
   */
  reconRecordCategoryShowStatusEnum?:
    | 'ASKING_CLIENT'
    | 'DONE'
    | 'EXPORTING'
    | 'PROCESSING'
    | 'TO_REVIEW'
  /**
   * 对账记录显示的对账状态
   * @example "ReconRecordShowStatusEnum"
   */
  reconRecordShowStatusEnum?:
    | 'BANK_STATEMENT_PRE_PROCESSING'
    | 'RECONCILING'
    | 'VOUCHER_PRE_PROCESSING'
  /**
   * 对账记录状态
   * @example "ReconRecordStatusEnum"
   */
  reconRecordStatus?:
    | 'CERTAIN_RECON_FAILED'
    | 'CERTAIN_RECON_SUCCESS'
    | 'INIT'
    | 'ORG_CONFIRMED'
    | 'ORG_DENIED'
    | 'UNCERTAIN_RECON_FAILED'
    | 'UNCERTAIN_RECON_SUCCESS'
  /**
   * 对账成功的原因
   * @example "ReconResultEnum"
   */
  reconResult?:
    | 'BANK_FUND'
    | 'INTERNAL_TRANSFER'
    | 'ONLY_MATCH_VOUCHER_RECONCILED_IN_ACCOUNTING'
    | 'RECON_WITH_VOUCHERS'
  /**
   * 可读错误码
   * @example "PaiResultCode"
   */
  resultCode?:
    | 'ACCOUNTING_VOUCHER_ID_IS_NOT_BLANK'
    | 'PAI_ACCOUNTING_ALLOW_ACCESS_IS_NULL'
    | 'PAI_ACCOUNTING_AUTHED_RECORD_ALREADY_EXISTS'
    | 'PAI_ACCOUNTING_AUTH_CODE_IS_BLANK'
    | 'PAI_ACCOUNTING_AUTH_CONFIRM_IS_NULL'
    | 'PAI_ACCOUNTING_AUTH_RECORD_NOT_EXIST'
    | 'PAI_ACCOUNTING_AUTH_RECORD_STATUS_NOT_AUTHED'
    | 'PAI_ACCOUNTING_AUTH_RECORD_STATUS_TURN_EXCEPTION'
    | 'PAI_ACCOUNTING_AUTH_TYPE_IS_NULL'
    | 'PAI_ACCOUNTING_DATA_ILLEGAL'
    | 'PAI_ACCOUNTING_PLAN_NOT_SUPPORT_INVOICES'
    | 'PAI_ACCOUNTING_REPORT_SHOW_TYPE_ILLEGAL'
    | 'PAI_ACCOUNTING_SOFTWARE_ILLEGAL'
    | 'PAI_ACCOUNT_ID_IS_BLANK'
    | 'PAI_ACCOUNT_NOT_BANK_ACCOUNT_TYPE'
    | 'PAI_ACCOUNT_NOT_EXIST'
    | 'PAI_ACCOUNT_PREDICT_REQUEST_IS_NULL'
    | 'PAI_ACCOUNT_STATUS_NOT_ACTIVE'
    | 'PAI_ACCOUNT_TYPE_ILLEGAL'
    | 'PAI_AES_KEY_ID_IS_BLANK'
    | 'PAI_AMOUNT_IS_NULL'
    | 'PAI_ATTACHMENT_UPLOAD_METHOD_IS_BLANK'
    | 'PAI_ATTACHMENT_UPLOAD_METHOD_IS_INVALID'
    | 'PAI_ATTACHMENT_UPLOAD_SCENE_IS_BLANK'
    | 'PAI_ATTACHMENT_UPLOAD_SCENE_IS_INVALID'
    | 'PAI_AUTH_CODE_INCONSISTENCY'
    | 'PAI_AUTH_CODE_IS_BLANK'
    | 'PAI_BANK_ACCOUNT_ID_IS_BLANK'
    | 'PAI_BANK_STATEMENT_LINE_DISCUSS_IS_BLANK'
    | 'PAI_BANK_STATEMENT_LINE_ID_IS_NULL'
    | 'PAI_BANK_STATEMENT_LINE_ID_LIST_IS_EMPTY'
    | 'PAI_BANK_STATEMENT_LINE_RECON_STATUS_IS_INVALID'
    | 'PAI_BASE_CURRENCY_IS_NULL'
    | 'PAI_BUSINESS_VOUCHER_PAYMENT_RECORD_NOT_EXIST'
    | 'PAI_CALL_AUTO_BKP_COMPLETION_ERROR'
    | 'PAI_CALL_GOOGLE_ERROR'
    | 'PAI_CALL_NUXT_BKP_COMPLETION_ERROR'
    | 'PAI_CALL_PINVO_ERROR'
    | 'PAI_CHASING_FAILED'
    | 'PAI_CHASING_QUESTION_IS_NULL'
    | 'PAI_CHASING_QUESTION_TYPE_IS_ILLEGAL'
    | 'PAI_CHASING_QUESTION_TYPE_IS_NULL'
    | 'PAI_CHASING_RECORD_ID_IS_BLANK'
    | 'PAI_CHASING_RECORD_NOT_EXIST'
    | 'PAI_CHASING_RECORD_STATUS_ILLEGAL'
    | 'PAI_CHASING_RECORD_TARGET_TYPE_ILLEGAL'
    | 'PAI_CHASING_STATUS_IS_NULL'
    | 'PAI_CHASING_TARGET_TYPE_IS_NULL'
    | 'PAI_CHASING_TYPE_IS_NULL'
    | 'PAI_CHECK_STATISTIC_DATA_FAIL'
    | 'PAI_CLIENT_ID_IS_BLANK'
    | 'PAI_CLIENT_RSA_PUBLIC_KEY_IS_BLANK'
    | 'PAI_COMPANY_HOUSE_NAME_NOT_MATCH'
    | 'PAI_COMPANY_HOUSE_SEARCH_NO_RESULT'
    | 'PAI_CONTACT_CREATE_REQUEST_NULL'
    | 'PAI_CONTACT_ID_IS_BLANK'
    | 'PAI_CONTACT_IS_NULL'
    | 'PAI_CONTACT_MODIFY_REQUEST_NULL'
    | 'PAI_CONTACT_NAME_IS_BLANK'
    | 'PAI_CONTACT_NAME_NOT_EMPTY'
    | 'PAI_CONTACT_NOT_EXIST'
    | 'PAI_CONTACT_PAGE_QUERY_REQUEST_NULL'
    | 'PAI_CURRENCY_EXCHANGE_ERROR'
    | 'PAI_CURRENCY_ILLEGAL'
    | 'PAI_DATE_IS_BLANK'
    | 'PAI_DESCRIPTION_IS_BLANK'
    | 'PAI_DISCONNECT_XERO_ORG_EXCEPTION'
    | 'PAI_EMAIL_DELIVER_RECORD_NOT_EXIST'
    | 'PAI_EMAIL_FORMAT_ILLEGAL'
    | 'PAI_EMAIL_IS_BLANK'
    | 'PAI_EMAIL_TEMPLATE_NOT_EXIST'
    | 'PAI_ENCRYPT_CONFIG_RECORD_NOT_EXIST'
    | 'PAI_ENDING_DATE_ILLEGAL'
    | 'PAI_FETCH_MEDIUM_UPLOAD_URL_PARAM_ILLEGAL'
    | 'PAI_FUND_DATE_ILLEGAL'
    | 'PAI_FUND_DESCRIPTION_ID_IS_BLANK'
    | 'PAI_FUND_DIRECTION_IS_NULL'
    | 'PAI_FUND_DIRECTION_UNEQUAL'
    | 'PAI_FUND_MAIN_DESCRIPTION_IS_BLANK'
    | 'PAI_FUND_SUB_DESCRIPTIONS_IS_EMPTY'
    | 'PAI_FUND_SUB_DESCRIPTION_IS_BLANK'
    | 'PAI_FUND_VOUCHER_ACCOUNTING_RECONCILED_IS_NULL'
    | 'PAI_FUND_VOUCHER_BANK_ACCOUNT_ID_IS_BLANK'
    | 'PAI_GENERAL_QUESTION_IS_BLANK'
    | 'PAI_GENERAL_QUESTION_NOT_EXIST'
    | 'PAI_GET_XERO_ORG_EXCEPTION'
    | 'PAI_GET_XERO_TOKEN_EXCEPTION'
    | 'PAI_GOOGLE_DRIVE_FOLDER_NOT_EXIST'
    | 'PAI_GOOGLE_SHEETS_TEMPLATE_NOT_EXIST'
    | 'PAI_ITEMS_IS_EMPTY'
    | 'PAI_ITEM_AMOUNT_ILLEGAL'
    | 'PAI_ITEM_AMOUNT_TYPE_IS_NULL'
    | 'PAI_ITEM_DESCRIPTION_IS_BLANK'
    | 'PAI_ITEM_NOT_EXIST'
    | 'PAI_ITEM_QUANTITY_ILLEGAL'
    | 'PAI_ITEM_TAX_AMOUNT_ILLEGAL'
    | 'PAI_ITEM_UNIT_AMOUNT_ILLEGAL'
    | 'PAI_LOGIN_ID_IS_BLANK'
    | 'PAI_LOGIN_ID_NOT_EXIST'
    | 'PAI_LOGIN_OTP_IS_BLANK'
    | 'PAI_LOGIN_PWD_IS_BLANK'
    | 'PAI_MANUAL_CONFIRMED_VOUCHER_NOT_ALLOWED_TO_SYNC_DIRECTLY'
    | 'PAI_MANUAL_RECON_RECORD_IS_NULL'
    | 'PAI_MANUAL_RECON_RECORD_STATUS_ILLEGAL'
    | 'PAI_MAX_INDEX_IS_NULL'
    | 'PAI_MEDIUM_IDS_IS_NULL'
    | 'PAI_MEDIUM_NOT_EXIST'
    | 'PAI_MEDIUM_REGISTER_REQUEST_IS_NULL'
    | 'PAI_MEDIUM_TYPE_IS_NOT_SUPPORT'
    | 'PAI_MEDIUM_TYPE_IS_NULL'
    | 'PAI_MORE_THAN_ONE_BUSINESS_VOUCHER_PAYMENT_RECORD'
    | 'PAI_MULTI_ITEM_VOUCHER_CANNOT_UPDATE_ACCOUNT_OR_TAX_RATE'
    | 'PAI_NOTIFICATION_CONTENT_ASSEMBLER_NOT_EXIST'
    | 'PAI_NOTIFICATION_DELIVER_RECORD_ID_NOT_EXIST'
    | 'PAI_ONBOARDING_CALL_AUDIO_URL_IS_BLANK'
    | 'PAI_ONBOARDING_CALL_AUDIO_URL_IS_INVALID'
    | 'PAI_ONLY_SUPPORT_UK_ORG'
    | 'PAI_ORG_ASSIGNED_EMAIL_STATUS_IS_NOT_NORMAL'
    | 'PAI_ORG_ASSIGNED_EMAIL_USER_NAME_IS_BLANK'
    | 'PAI_ORG_CONFIRM_RECON_VOUCHER_DETAILS_IS_EMPTY'
    | 'PAI_ORG_HAS_INIT_OR_PRE_PROCESSING_BANK_STATEMENT_LINE'
    | 'PAI_ORG_HAS_INIT_RECON_RECORD'
    | 'PAI_ORG_HAS_NO_BOOKKEEPER'
    | 'PAI_ORG_ID_IS_BLANK'
    | 'PAI_ORG_ID_UNEQUAL'
    | 'PAI_ORG_NOT_CONNECT_TO_ACCOUNTING'
    | 'PAI_ORG_NOT_EXIST'
    | 'PAI_ORG_TASK_DEST_STATUS_IS_BLANK'
    | 'PAI_ORG_TASK_DEST_STATUS_IS_INVALID'
    | 'PAI_ORG_TASK_ID_IS_BLANK'
    | 'PAI_ORG_TASK_NOT_EXIST'
    | 'PAI_PAGE_IS_NULL'
    | 'PAI_PAGE_QUERY_UNMATCHED_VOUCHER_REQUEST_IS_NULL'
    | 'PAI_PAGE_QUERY_VOUCHER_REQUEST_IS_NULL'
    | 'PAI_PAGE_SIZE_IS_NULL'
    | 'PAI_PAYMENT_RECORD_AMOUNT_ILLEGAL'
    | 'PAI_PAYMENT_RECORD_DATE_IS_BLANK'
    | 'PAI_PAYMENT_RECORD_ID_ILLEGAL'
    | 'PAI_PAYMENT_RECORD_PAYMENT_BANK_ILLEGAL'
    | 'PAI_PNG_FILE_PATH_IS_BLANK'
    | 'PAI_PROFIT_AND_LOSS_REPORT_NOT_EXIST'
    | 'PAI_QUERY_FILE_PARAM_ILLEGAL'
    | 'PAI_QUERY_IMAGE_PARAM_ILLEGAL'
    | 'PAI_QUESTION_NAME_IS_BLANK'
    | 'PAI_RECON_AMOUNT_IS_NULL'
    | 'PAI_RECON_AMOUNT_NOT_EQUAL'
    | 'PAI_RECON_DENIED_REASON_IS_NULL'
    | 'PAI_RECON_FAILED'
    | 'PAI_RECON_RECORD_CATEGORY_SHOW_STATUS_IS_BLANK'
    | 'PAI_RECON_RECORD_CATEGORY_SHOW_STATUS_IS_INVALID'
    | 'PAI_RECON_RECORD_EXCEPTION'
    | 'PAI_RECON_RECORD_EXIST'
    | 'PAI_RECON_RECORD_NOT_EXIST'
    | 'PAI_RECON_RECORD_SHOW_STATUS_IS_BLANK'
    | 'PAI_RECON_RECORD_SHOW_STATUS_IS_INVALID'
    | 'PAI_RECON_RECORD_STATUS_ILLEGAL'
    | 'PAI_RECON_RECORD_STATUS_IS_BLANK'
    | 'PAI_RECON_RECORD_TYPE_IS_BLANK'
    | 'PAI_RECON_RECORD_TYPE_IS_INVALID'
    | 'PAI_RECON_VOUCHER_DETAIL_NOT_EXIST'
    | 'PAI_RECORD_ID_IS_BLANK'
    | 'PAI_REFRESH_TOKEN_FAILED'
    | 'PAI_REGISTER_FILE_PARAM_ILLEGAL'
    | 'PAI_REGISTER_IMAGE_PARAM_ILLEGAL'
    | 'PAI_REPLY_CHASING_REQUESTS_IS_EMPTY'
    | 'PAI_REQUEST_ID_DUPLICATE'
    | 'PAI_REQUEST_ID_IS_BLANK'
    | 'PAI_REQUEST_IS_NULL'
    | 'PAI_SERVER_RSA_KEY_ID_IS_BLANK'
    | 'PAI_STARTING_DATE_ILLEGAL'
    | 'PAI_STATEMENT_LINE_ID_IS_BLANK'
    | 'PAI_STATEMENT_LINE_NOT_EXIST'
    | 'PAI_STATEMENT_LINE_RECON_STATUS_ILLEGAL'
    | 'PAI_STATE_IS_BLANK'
    | 'PAI_STRIPE_CHECKOUT_SESSION_NOT_EXIST'
    | 'PAI_STRIPE_PAYMENT_METHOD_ID_IS_BLANK'
    | 'PAI_STRIPE_PAYMENT_METHOD_NOT_EXIST'
    | 'PAI_SWITCH_SYNC_IS_NULL'
    | 'PAI_SYNC_ATTACHMENT_TO_XERO_EXCEPTION'
    | 'PAI_SYNC_BANK_TRANSACTION_TO_XERO_EXCEPTION'
    | 'PAI_SYNC_CONTACT_TO_XERO_EXCEPTION'
    | 'PAI_SYNC_DATA_TO_XERO_EXCEPTION'
    | 'PAI_SYNC_INVOICE_TO_XERO_EXCEPTION'
    | 'PAI_SYNC_PAYMENT_TO_XERO_EXCEPTION'
    | 'PAI_SYSTEM_PARAM_KEY_IS_BLANK'
    | 'PAI_SYSTEM_PARAM_KEY_IS_INVALID'
    | 'PAI_SYSTEM_PARAM_VALUE_IS_BLANK'
    | 'PAI_TAX_RATE_ID_IS_BLANK'
    | 'PAI_TAX_RATE_NOT_EXIST'
    | 'PAI_UNKNOWN_VAT_RATE'
    | 'PAI_UNMATCHED_BANK_STATEMENT_LINES_PAGE_QUERY_REQUEST_IS_NULL'
    | 'PAI_UNSUPPORTED_CURRENCY'
    | 'PAI_UPLOAD_MEDIUM_FAILED'
    | 'PAI_URL_IS_BLANK'
    | 'PAI_USER_DENIED_XERO_AUTH'
    | 'PAI_USER_EMAIL_NOT_BKP'
    | 'PAI_USER_ID_IS_BLANK'
    | 'PAI_USER_LOGIN_PARAM_ILLEGAL'
    | 'PAI_USER_LOGIN_PWD_ERROR'
    | 'PAI_USER_LOGIN_PWD_ERROR_TIMES_REACH_UPPER_LIMIT'
    | 'PAI_USER_LOGIN_STATUS_ILLEGAL'
    | 'PAI_USER_NOT_EXIST'
    | 'PAI_USER_NOT_REGISTER_EMAIL_PWD_LOGIN'
    | 'PAI_USER_NO_PERMISSION_OPERATE_ORG'
    | 'PAI_USER_ORG_ROLE_RELATION_NOT_EXIST'
    | 'PAI_USER_ROLE_INVALID'
    | 'PAI_USER_ROLE_IS_BLANK'
    | 'PAI_USER_ROLE_LIST_IS_EMPTY'
    | 'PAI_VOUCHER_AMOUNT_INCONSISTENCY'
    | 'PAI_VOUCHER_AMOUNT_NOT_MATCH'
    | 'PAI_VOUCHER_CONTACT_ID_IS_BLANK'
    | 'PAI_VOUCHER_DOCUMENT_TYPE_IS_BLANK'
    | 'PAI_VOUCHER_DOCUMENT_TYPE_IS_INVALID'
    | 'PAI_VOUCHER_DOC_TYPE_ILLEGAL'
    | 'PAI_VOUCHER_DOC_TYPE_NOT_ACCOUNTING_VOUCHER_TYPE'
    | 'PAI_VOUCHER_DUE_DATE_IS_BLANK'
    | 'PAI_VOUCHER_IDS_IS_NULL'
    | 'PAI_VOUCHER_ID_IS_BLANK'
    | 'PAI_VOUCHER_INVALID_REQUEST_IS_NULL'
    | 'PAI_VOUCHER_ISSUE_DATE_IS_BLANK'
    | 'PAI_VOUCHER_MODIFY_REQUEST_IS_NULL'
    | 'PAI_VOUCHER_NOT_EXIST'
    | 'PAI_VOUCHER_NO_DUPLICATE'
    | 'PAI_VOUCHER_NO_IS_BLANK'
    | 'PAI_VOUCHER_NO_IS_DUPLICATE'
    | 'PAI_VOUCHER_QUERY_REQUEST_IS_NULL'
    | 'PAI_VOUCHER_RECON_STATUS_ILLEGAL'
    | 'PAI_VOUCHER_SOURCE_ILLEGAL'
    | 'PAI_VOUCHER_SUB_TYPE_IS_NULL'
    | 'PAI_VOUCHER_SYNC_TO_ACCOUNTING_REASON_ILLEGAL'
    | 'PAI_VOUCHER_SYNC_TO_ACCOUNTING_STATUS_ILLEGAL'
    | 'PAI_VOUCHER_TOTAL_AMOUNT_IS_NULL'
    | 'PAI_VOUCHER_TYPE_ILLEGAL'
    | 'PAI_VOUCHER_TYPE_IS_NULL'
    | 'PAI_WEB_ELEMENT_GRAB_FAILED'
    | 'PAI_XERO_ACCOUNT_CREATE_FAILED'
    | 'PAI_XERO_ACCOUNT_INCONSISTENCY'
    | 'PAI_XERO_ACCOUNT_UPDATE_FAILED'
    | 'PAI_XERO_GET_DATA_EXCEPTION'
    | 'PAI_XERO_ORG_HAS_MORE_THAN_ONE_AUTHED_RECORD'
    | 'PAI_XERO_WEBHOOK_EVENT_ILLEGAL'
    | 'PAI_XERO_WEBHOOK_EVENT_IS_BLANK'
    | 'PAI_XERO_WEBHOOK_SIGNATURE_ILLEGAL'
    | 'PAI_XERO_WEBHOOK_SIGNATURE_IS_BLANK'
    | 'PAI_YAPILY_ACCOUNT_AUTH_CONSENT_NOT_EXIST'
    | 'PAI_YAPILY_ACCOUNT_AUTH_CREATE_FAILED'
    | 'PAI_YAPILY_ACCOUNT_AUTH_RECONFIRM_FAILED'
    | 'PAI_YAPILY_ACCOUNT_AUTH_RECORD_ID_IS_NULL'
    | 'PAI_YAPILY_ACCOUNT_AUTH_RECORD_NOT_EXIST'
    | 'PAI_YAPILY_ACCOUNT_AWAITING_RE_AUTHORIZATION'
    | 'PAI_YAPILY_BANK_STATEMENT_DUPLICATE'
    | 'PAI_YEAR_AND_MONTH_ILLEGAL'
    | 'Pai_TARGET_CURRENCY_IS_NULL'
  /**
   * 授权状态
   * @example "StripeCheckoutStatusEnum"
   */
  stripeCheckoutStatusEnum?: 'COMPLETE' | 'EXPIRED' | 'FAILED' | 'PROCESSING'
  /**
   * 同步到会计软件的原因
   * @example "SyncToAccountingReasonEnum"
   */
  syncToAccountingReasonEnum?:
    | 'RECON_WITH_STATEMENT_LINE'
    | 'SYNC_BUSINESS_VOUCHER_PAYMENT_RECORD'
    | 'SYNC_DIRECTLY'
    | 'SYNC_FROM_PINVO_IO_TO_ACCOUNTING'
    | 'SYNC_VOUCHER_ATTACHMENT'
  /**
   * 同步到会计软件的状态
   * @example "SyncToAccountingStatusEnum"
   */
  syncToAccountingStatusEnum?: 'SYNCED' | 'SYNCING'
  syncToXeroReasonEnum?:
    | 'RECON_WITH_STATEMENT_LINE'
    | 'SYNC_BUSINESS_VOUCHER_PAYMENT_RECORD'
    | 'SYNC_DIRECTLY'
    | 'SYNC_FROM_PINVO_IO_TO_ACCOUNTING'
    | 'SYNC_VOUCHER_ATTACHMENT'
  syncToXeroStatusEnum?: 'SYNCED' | 'SYNCING'
  /**
   * 系统参数KEY枚举
   * @example "SystemParamKeyEnum"
   */
  systemParamKeyEnum?:
    | 'BOOKKEEPER_EMAIL_WHITE_LIST'
    | 'CLICK_UP_WEBHOOK_CONFIGS'
    | 'GOOGLE_OAUTH_ACCESS_TOKEN'
    | 'PAL_REPORT_TAXATION_ACCOUNT_NAME_LIST'
    | 'STRIPE_PAYMENT_SETUP_CHECKOUT_SESSION_MESSAGE'
    | 'STRIPE_PAYMENT_SETUP_PAYMENT_METHODS'
    | 'SYNC_FROM_XERO_TO_PINVO_INTERVAL'
    | 'VALID_ORG_IDS'
    | 'VOUCHER_AND_BANK_STATEMENT_LINE_SYNC_BETWEEN_ORG'
  /**
   * 表格报表的单元格元数据类型
   * @example "TableReportCellMetaDataTypeEnum"
   */
  tableReportCellMetaDataTypeEnum?:
    | 'ACCOUNT_ID'
    | 'CONTACT_ID'
    | 'END_DATE'
    | 'START_DATE'
    | 'UNFOLD'
  /**
   * 表格报表的单元格值类型
   * @example "TableReportCellValueTypeEnum"
   */
  tableReportCellValueTypeEnum?: 'AMOUNT' | 'PERCENTAGE' | 'TEXT'
  /**
   * 税信息的来源：pinvo初始化 或 从会计软件导入
   * @example "TaxRateSourceEnum"
   */
  taxRateSource?: 'QB' | 'SAGE' | 'XERO'
  /**
   * 税率状态
   * @example "TaxRateStatusEnum"
   */
  taxRateStatus?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'UNKNOWN'
  /**
   * 试算对账记录明细状态
   * @example "TrialReconRecordDetailStatusEnum"
   */
  trialReconRecordDetailStatus?: 'CERTAIN_MATCH' | 'INIT' | 'UNCERTAIN_MATCH'
  /**
   * 试算对账记录状态
   * @example "TrialReconRecordStatusEnum"
   */
  trialReconRecordStatus?: 'COMPLETED' | 'INIT'
  /**
   * 用户角色
   * @example "UserRoleEnum"
   */
  userRoleEnum?: 'BOOKKEEPER' | 'DIRECTOR' | 'OBSERVER'
  /**
   * 凭证子类型
   * @example "VoucherSubTypeEnum"
   */
  voucherSubTypeEnum?:
    | 'BILL'
    | 'BILL_CREDIT_NOTE'
    | 'DIRECT_PAYMENT'
    | 'INTERNAL_TRANSFER'
    | 'INVOICE'
    | 'INVOICE_CREDIT_NOTE'
    | 'OVERPAYMENT'
    | 'PREPAYMENT'
}

/**
 * ApiDataEncryptConfigRecordInfo
 * 加解密秘钥信息
 */
export interface ApiDataEncryptConfigRecordInfo {
  /**
   * AES秘钥失效时间
   * @format date-time
   */
  aesInvalidTime?: string
  /** aes秘钥id */
  aesKeyId?: string
  /** 使用客户端RSA公钥加密后的AES秘钥 */
  encryptedAesKey?: string
  /**
   * 服务端rsa秘钥失效时间
   * @format date-time
   */
  rsaInvalidTime: string
  /** 服务端rsa秘钥id */
  rsaKeyId: string
  /** 服务端rsa公钥 */
  rsaPublicKey: string
}

/**
 * ApplyBankStatementLineChasingRequest
 * 将银行流水加入到chasing列表的请求
 */
export interface ApplyBankStatementLineChasingRequest {
  /** Chasing的银行流水ID */
  bankStatementLineId: string
  /** Chasing Context关联的附件媒体ID列表 */
  chasingAttachmentMediumIds?: string[]
  /** Chasing和银行流水匹配的Voucher ID */
  chasingMatchVoucherId?: string
  /** Chasing Context的问题 */
  chasingQuestion?: string
  /**
   * Chasing Context问题类型
   * @example "ChasingQuestionTypeEnum"
   */
  chasingQuestionType?: string
  /**
   * Chasing类型
   * @example "ChasingTypeEnum"
   */
  chasingType: string
  /** 组织id */
  orgId: string
}

/**
 * ApplyGeneralQuestionChasingRequest
 * 申请开放性问题Chasing请求
 */
export interface ApplyGeneralQuestionChasingRequest {
  /** Chasing Context关联的附件媒体ID列表 */
  chasingAttachmentMediumIds?: string[]
  /** Chasing Context的问题 */
  chasingQuestion: string
  /**
   * Chasing Context问题类型
   * @example "ChasingQuestionTypeEnum"
   */
  chasingQuestionType: string
  /** Chasing的开放性问题ID */
  generalQuestionId: string
  /** 组织id */
  orgId: string
}

/**
 * ApplyReProcessBankStatementLineRequest
 * 申请重新处理银行流水请求
 */
export interface ApplyReProcessBankStatementLineRequest {
  /** 需要chasing的流水id */
  statementLineId: string
}

/**
 * ApplySyncAccountingDataRequest
 * 同步会计软件数据的请求
 */
export interface ApplySyncAccountingDataRequest {
  /** 组织id */
  orgId: string
}

/**
 * ApplyVoucherChasingRequest
 * 将凭证加入到chasing列表的请求
 */
export interface ApplyVoucherChasingRequest {
  /** Chasing Context关联的附件媒体ID列表 */
  chasingAttachmentMediumIds?: string[]
  /** Chasing Context的问题 */
  chasingQuestion: string
  /**
   * Chasing Context问题类型
   * @example "ChasingQuestionTypeEnum"
   */
  chasingQuestionType: string
  /** 组织id */
  orgId: string
  /** Chasing的凭证ID */
  voucherId: string
}

/**
 * AttachmentInfo
 * 附件信息
 */
export interface AttachmentInfo {
  /** 附件ID */
  attachmentId: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string
  /** 关联的媒体ID */
  mediumId: string
  /** 关联的媒体信息 */
  mediumInfo: MediumInfo
  /**
   * 最后修改时间
   * @format date-time
   */
  modifyTime: string
  /**
   * OCR识别单据类型
   * @example "OcrVoucherTypeEnum"
   */
  ocrVoucherType?: 'BANK_STATEMENT' | 'INVOICE' | 'PAYSLIP' | 'RECEIPT' | 'UNKNOWN'
  /** 组织ID */
  orgId: string
  /** 附件关联对象ID */
  targetId?: string
  /**
   * 附件关联对象类型
   * @example "AttachmentTargetTypeEnum"
   */
  targetType?: 'CHASING_RECORD' | 'GENERAL_QUESTION' | 'VOUCHER'
  /**
   * 附件上传方式
   * @example "AttachmentUploadMethodEnum"
   */
  uploadMethod: 'EMAIL' | 'MANUAL' | 'PINVO_IO_SYNC'
  /**
   * 附件上传场景
   * @example "AttachmentUploadSceneEnum"
   */
  uploadScene:
    | 'APPLY_CHASING_UPLOAD_ATTACHMENT'
    | 'BKP_UPLOAD_ATTACHMENTS_FOR_GENERAL_QUESTION'
    | 'CLIENT_UPLOAD_DOCUMENTS'
    | 'CLIENT_UPLOAD_DOCUMENT_AND_MATCH_STATEMENT_LINE'
    | 'EMAIL_ATTACHMENT'
    | 'PINVO_IO_SYNC'
    | 'REPLY_CHASING_UPLOAD_ATTACHMENT'
  /** 上传的用户ID */
  uploadUserId?: string
}

/**
 * AuthUserInfo
 * 授权用户信息
 */
export interface AuthUserInfo {
  /** 登录号 */
  loginId: string
  /** 用户ID */
  userId: string
  /** 用户角色列表 */
  userRoleList: string[]
}

/**
 * AuthorizeUserToOrgRequest
 * 授权用户与组织的授权请求
 */
export interface AuthorizeUserToOrgRequest {
  /** 用户登录号 */
  loginId: string
  /** 组织id */
  orgId: string
  /**
   * 用户角色列表
   * @example "UserRoleEnum"
   */
  userRoleList: string[]
}

/**
 * BankStatementLineInfo
 * 银行流水
 */
export interface BankStatementLineInfo {
  /** 银存科目，里面有银行名称，账户持有人名称、sort code和account no */
  accountInfo?: AccountInfo
  /** 账户余额（交易后） */
  balance?: MoneyInfo
  /**
   * 银行流水对账显示状态
   * @example "BankStatementLineShowStatusEnum"
   */
  bankStatementLineShowStatus?: string
  /**
   * 是否正在客户催账
   * @example false
   */
  clientChasing?: boolean
  /**
   * 系统匹配到已有对手方的匹配方式
   * @example "BankStatementLineContactMatchResultEnum"
   */
  contactMatchResult?: string
  /** 对手方名称 */
  counterPartyName?: string
  /** 交易的描述信息，描述交易的具体内容 */
  description?: string
  /** 系统从description中抽取的对手方名称 */
  extractCounterPartyName?: string
  /** 系统从description抽取的支付方式 */
  extractPaymentMethods?: string
  /** 系统从description中抽取的用户手输的reference */
  extractUserReference?: string
  /**
   * 流水资金方向
   * @example "FundDirectionEnum"
   */
  fundDirection?: string
  /** 人工对账记录 */
  manualReconRecordInfo?: ManualReconRecordInfo
  /** 系统匹配到的已有对手方 */
  matchedContact?: ContactInfo
  /** 原始交易金额，抛去银行的charge费用，并且转化为交易币种，不管流入还是流出，都是正数。如果涉及换汇，这是原始币种金额，对应业务凭证金额。 */
  originalTransAmount?: MoneyInfo
  /**
   * true：流出；false：流入
   * @example false
   */
  payout?: boolean
  /** 预测的对手方联系人id */
  predictContactId?: string
  /** 对账科目ID */
  reconAccountId?: string
  /** 对账科目名称 */
  reconAccountName?: string
  /** 系统自动收集的银行流水的对手方信息 */
  relatedContactInfo?: RelatedContactInfo
  /** 银行流水id，pinvo系统生成的。 */
  statementLineId?: string
  /** 交易金额，不管流入还是流出，都是正数。如果涉及换汇，这是支付币种的金额，不是业务凭证币种金额。 */
  transAmount?: MoneyInfo
  /**
   * 交易时间，用于展示给用户
   * @format date-time
   */
  transDateTime?: string
}

/** BaseResponse */
export interface BaseResponse {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  message?: string
}

/** BaseVoucherInfo */
export interface BaseVoucherInfo {
  /** 供应商银行账户名称 */
  accountName?: string
  /** 供应商银行账户号 */
  accountNo?: string
  /** xero deeplink 地址 */
  accountingDeepLink?: string
  /** 附件id */
  attachmentId?: string
  /** 附件信息 */
  attachmentInfo?: AttachmentInfo
  /** 资金凭证是在哪个银存科目下发生的。 */
  bankAccountId?: string
  /** 供应商银行名称 */
  bankName?: string
  /** 确定的已对账金额.包括certain recon、org confirm这两种已对账的金额 */
  certainReconedAmount?: MoneyInfo
  /**
   * 是否正在客户催账
   * @example false
   */
  clientChasing?: boolean
  /** 对手方ID */
  contactId?: string
  /** 对手方信息 */
  contactInfo?: ContactInfo
  /** 对手方名称，如果是bill则为supplierName，如果是invoice则为customerName */
  contactName?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 币种
   * @example "CurrencyEnum"
   */
  currency?: string
  /** 客户地址 */
  customerAddress?: string
  /** 客户联系人ID */
  customerContactId?: string
  /** 客户名称 */
  customerName?: string
  /**
   * 凭证文档类型
   * @example "DocumentTypeEnum"
   */
  documentType?: string
  /**
   * 支付截止时间
   * @format date-time
   */
  dueDate?: string
  /**
   * Receipt资金发生时间
   * @format date-time
   */
  fundDate?: string
  /**
   * 资金方向，是流入还是流出。
   * @example "FundDirectionEnum"
   */
  fundDirection?: string
  /** 供应商银行iban号 */
  iban?: string
  /**
   * 生效时间
   * @format date-time
   */
  issueDate?: string
  /**
   * 每个item中的itemAmount是否含税
   * @example "ItemAmountTypeEnum"
   */
  itemAmountType?: string
  /** 交付物信息 */
  items?: ItemInfo[]
  /**
   * 最后修改时间
   * @format date-time
   */
  modifyTime?: string
  /** OCR识别的交付物信息 */
  ocrItems?: ItemInfo[]
  /** 组织id */
  orgId?: string
  /** 备注 */
  reference?: string
  /** 供应商银行sortCode */
  sortCode?: string
  /**
   * 凭证状态
   * @example "VoucherStatusEnum"
   */
  status?: string
  /** 税前总金额 */
  subtotalAmount?: MoneyInfo
  /** 供应商地址 */
  supplierAddress?: string
  /** 供应商联系人ID */
  supplierContactId?: string
  /** 供应商名称 */
  supplierName?: string
  /** 待对账金额 */
  toReconAmount?: MoneyInfo
  /** 总金额 */
  totalAmount?: MoneyInfo
  /** 税金总额 */
  vatAmount?: MoneyInfo
  /** VAT税号 */
  vatNo?: string
  /** 凭证id */
  voucherId?: string
  /** 凭证编号 */
  voucherNo?: string
  /**
   * 凭证子类型
   * @example "VoucherSubTypeEnum"
   */
  voucherSubType?: string
  /**
   * 凭证类型
   * @example "VoucherTypeEnum"
   */
  voucherType?: string
}

/** BatchConfirmChasingRequest */
export interface BatchConfirmChasingRequest {
  /** chasing记录id列表 */
  chasingRecordIdList: string[]
  /** 组织id */
  orgId: string
}

/** BatchReplyChasingRequest */
export interface BatchReplyChasingRequest {
  /** 组织id */
  orgId: string
  /** 回复Chasing的请求列表 */
  replyChasingRequests: ReplyChasingRequest[]
}

/**
 * BookkeepingProgressInfo
 * 记账进度信息
 */
export interface BookkeepingProgressInfo {
  /** chasing类型，记账状态为chasing是才有值 */
  chasingType?: 'CHASING_CONTEXT' | 'CHASING_VOUCHER'
  /**
   * 记账月份
   * @format date-time
   */
  date: string
  /** 记账状态 */
  status: 'CHASING_CLIENT' | 'CONFIRMED' | 'HISTORICAL_DATA' | 'IN_PROGRESS' | 'NOT_START_YET'
}

/**
 * BusinessVoucherInfo
 * 业务凭证，包括invoice、bill、credit note等
 */
export interface BusinessVoucherInfo {
  /** 供应商银行账户名称 */
  accountName?: string
  /** 供应商银行账户号 */
  accountNo?: string
  /** xero deeplink 地址 */
  accountingDeepLink?: string
  /** 附件id */
  attachmentId?: string
  /** 附件信息 */
  attachmentInfo?: AttachmentInfo
  /** 资金凭证是在哪个银存科目下发生的。 */
  bankAccountId?: string
  /** 供应商银行名称 */
  bankName?: string
  /** 确定的已对账金额.包括certain recon、org confirm这两种已对账的金额 */
  certainReconedAmount?: MoneyInfo
  /**
   * 是否正在客户催账
   * @example false
   */
  clientChasing?: boolean
  /** 对手方ID */
  contactId?: string
  /** 对手方信息 */
  contactInfo?: ContactInfo
  /** 对手方名称，如果是bill则为supplierName，如果是invoice则为customerName */
  contactName?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 币种
   * @example "CurrencyEnum"
   */
  currency?: string
  /** 客户地址 */
  customerAddress?: string
  /** 客户联系人ID */
  customerContactId?: string
  /** 客户名称 */
  customerName?: string
  /**
   * 凭证文档类型
   * @example "DocumentTypeEnum"
   */
  documentType?: string
  /**
   * 支付截止时间
   * @format date-time
   */
  dueDate?: string
  /**
   * Receipt资金发生时间
   * @format date-time
   */
  fundDate?: string
  /**
   * 资金方向，是流入还是流出。
   * @example "FundDirectionEnum"
   */
  fundDirection?: string
  /** 供应商银行iban号 */
  iban?: string
  /**
   * 生效时间
   * @format date-time
   */
  issueDate?: string
  /**
   * 每个item中的itemAmount是否含税
   * @example "ItemAmountTypeEnum"
   */
  itemAmountType?: string
  /** 交付物信息 */
  items?: ItemInfo[]
  /**
   * 最后修改时间
   * @format date-time
   */
  modifyTime?: string
  /** OCR识别的交付物信息 */
  ocrItems?: ItemInfo[]
  /** 组织id */
  orgId?: string
  /** 备注 */
  reference?: string
  /** 供应商银行sortCode */
  sortCode?: string
  /**
   * 凭证状态
   * @example "VoucherStatusEnum"
   */
  status?: string
  /** 税前总金额 */
  subtotalAmount?: MoneyInfo
  /** 供应商地址 */
  supplierAddress?: string
  /** 供应商联系人ID */
  supplierContactId?: string
  /** 供应商名称 */
  supplierName?: string
  /** 待对账金额 */
  toReconAmount?: MoneyInfo
  /** 总金额 */
  totalAmount?: MoneyInfo
  /** 税金总额 */
  vatAmount?: MoneyInfo
  /** VAT税号 */
  vatNo?: string
  /** 凭证id */
  voucherId?: string
  /** 凭证编号 */
  voucherNo?: string
  /**
   * 凭证子类型
   * @example "VoucherSubTypeEnum"
   */
  voucherSubType?: string
  /**
   * 凭证类型
   * @example "VoucherTypeEnum"
   */
  voucherType?: string
}

/** CancelChasingRecordRequest */
export interface CancelChasingRecordRequest {
  /** Chasing Record ID */
  chasingRecordId: string
}

/**
 * CashFlowReportInfo
 * 现金流量报表
 */
export interface CashFlowReportInfo {
  /** 流入资金的科目 */
  cashInAccounts?: string[]
  /** 流入资金金额 */
  cashInAmount: MoneyInfo
  /** 流出资金的科目 */
  cashOutAccounts?: string[]
  /** 流出资金金额 */
  cashOutAmount: MoneyInfo
  /**
   * 报表结束日期
   * @format date-time
   */
  endDate?: string
  /**
   * 报表开始日期
   * @format date-time
   */
  startDate?: string
}

/**
 * ChasingRecordInfo
 * ChasingRecordInfo model
 */
export interface ChasingRecordInfo {
  /** chasing发起人id */
  bookkeeperId: string
  /** chasing的附件id列表 */
  chasingAttachmentIds?: string[]
  /** chasing的附件列表 */
  chasingAttachmentInfos?: AttachmentInfo[]
  /** Chasing的通用开放性问题 */
  chasingGeneralQuestionInfo?: GeneralQuestionInfo
  /** chasing银行流水匹配的凭证 */
  chasingMatchVoucherInfo?: BaseVoucherInfo
  /** chasing的问题 */
  chasingQuestion?: string
  /**
   * chasing的问题类型
   * @example "ChasingQuestionTypeEnum"
   */
  chasingQuestionType: string
  /** Chasing银行流水信息 */
  chasingStatementLineInfo?: BankStatementLineInfo
  /**
   * chasing状态
   * @example "ChasingStatusEnum"
   */
  chasingStatus: string
  /** chasing的对象id */
  chasingTargetId: string
  /**
   * chasing的对象类型
   * @example "ChasingTargetTypeEnum"
   */
  chasingTargetType: string
  /**
   * chasing类型
   * @example "ChasingTypeEnum"
   */
  chasingType: string
  /** Chasing的凭证信息 */
  chasingVoucherInfo?: BaseVoucherInfo
  /** 客户对于Chasing问题的答案 */
  clientAnswer?: string
  /** 客户对于Chasing问题回答的附件id列表 */
  clientAnswerAttachmentIds?: string[]
  /** 客户对于Chasing问题回答的附件列表 */
  clientAnswerAttachmentInfos?: AttachmentInfo[]
  /** 回答Chasing的客户id */
  clientId?: string
  /**
   * Client匹配无凭证
   * @example false
   */
  clientMatchNoVoucherFlag?: boolean
  /** Client匹配的凭证ID */
  clientMatchVoucherId?: string
  /** Client匹配的凭证信息 */
  clientMatchVoucherInfo?: BaseVoucherInfo
  /**
   * chasing完成时间
   * @format date-time
   */
  completeTime?: string
  /**
   * chasing创建时间
   * @format date-time
   */
  createTime: string
  /**
   * chasing修改时间
   * @format date-time
   */
  modifyTime: string
  /** orgId */
  orgId: string
  /** 主键id */
  recordId: string
}

/** ChasingRecordMessageInfo */
export interface ChasingRecordMessageInfo {
  /** 消息的附件列表 */
  attachmentInfos?: AttachmentInfo[]
  /** 关联的Chasing Record Id */
  chasingRecordId: string
  /**
   * Chasing的角色
   * @example "ChasingRoleTypeEnum"
   */
  chasingRoleType: string
  /**
   * 消息创建时间
   * @format date-time
   */
  createTime: string
  /** 消息文本内容 */
  message: string
  /** 消息ID */
  messageId: string
  /** 消息发送用户 */
  userInfo: UserInfo
}

/**
 * CheckOnboardingFormInfo
 * check onboarding form info
 */
export interface CheckOnboardingFormInfo {
  /** 公司地址 */
  companyAddress?: string
  /** 公司名称 */
  companyLegalName?: string
}

/**
 * ClientMarkStatementLinesAsNoDocumentRequest
 * Client标识流水无凭证的请求
 */
export interface ClientMarkStatementLinesAsNoDocumentRequest {
  /** Chasing记录ID */
  chasingRecordId: string
}

/**
 * ClientMatchStatementLineWithVoucherRequest
 * Client给流水匹配凭证的请求
 */
export interface ClientMatchStatementLineWithVoucherRequest {
  /** Chasing记录ID */
  chasingRecordId: string
  /** Voucher媒体注册请求 */
  voucherMediumRegisterRequest: MediumRegisterRequest
}

/**
 * ConfirmReconRequest
 * 确认对账的请求
 */
export interface ConfirmReconRequest {
  /** 科目id，只有在voucher有多item的情况下不需要传 */
  accountId?: string
  /** 对手方id */
  contactId: string
  /** 组织id */
  orgId: string
  /** 银行流水id */
  statementLineId: string
  /** 税率id，只有在voucher有多item的情况下不需要传 */
  taxRateId?: string
  /** 凭证id，必传，除非是类似Bank fee这种无凭证对账。 */
  voucherId?: string
}

/**
 * ContactCreateRequest
 * 联系人创建请求
 */
export interface ContactCreateRequest {
  /** 联系人名称 */
  contactName: string
  customer?: boolean
  /** 组织id */
  orgId: string
  /** 备注 */
  remarks?: string
  supplier?: boolean
}

/**
 * ContactInfo
 * Contact Info
 */
export interface ContactInfo {
  /** 会计软件中的联系人id */
  accountingContactId?: string
  /**
   * 是否银行
   * @example false
   */
  bank?: boolean
  /** Xero 侧的银行账户信息 */
  bankAccountDetails?: string
  /** 银行账户名称 */
  bankAccountName?: string
  /** 银行账户Account no */
  bankAccountNo?: string
  /** Company registration number */
  companyNumber?: string
  /**
   * 是否客户确认过的
   * @example false
   */
  confirmedByClient?: boolean
  /** 主键id */
  contactId?: string
  /** 联系人email */
  contactPersonEmail?: string
  /** 联系人first name */
  contactPersonFirstName?: string
  /** 联系人last name */
  contactPersonLastName?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 是否客户
   * @example false
   */
  customer?: boolean
  /**
   * 是否员工
   * @example false
   */
  employee?: boolean
  /**
   * 修改时间
   * @format date-time
   */
  modifyTime?: string
  /** 名称 */
  name?: string
  /** 组织id */
  orgId?: string
  /** 备注 */
  remarks?: string
  /** 银行账户sort code */
  sortCode?: string
  /** 状态 */
  status?: string
  /**
   * 是否供应商
   * @example false
   */
  supplier?: boolean
}

/**
 * ContactModifyRequest
 * 联系人修改请求
 */
export interface ContactModifyRequest {
  /** 联系人id */
  contactId: string
  /** 备注 */
  remarks?: string
}

/**
 * ContactPageQueryRequest
 * 联系人分页查询请求
 */
export interface ContactPageQueryRequest {
  /** @format int64 */
  maxCent?: number
  /** @format date-time */
  maxDate?: string
  maxIndex?: string
  minIndex?: string
  orderType?: string
  /** 组织id */
  orgId: string
  /**
   * 分页查询，查询的页数，从0开始
   * @format int64
   */
  page?: number
  /**
   * 分页查询，每次查询的条数
   * @format int64
   */
  pageSize: number
}

/**
 * ContactStatisticInfo
 * 对手方维度的统计信息
 */
export interface ContactStatisticInfo {
  /** 对手方ID */
  contactId: string
  /** 对手方名称 */
  contactName: string
  /**
   * 贡献率，比如统计维度是收入项中，每个客户的交易额。那这个值就是客户的交易额占统计维度的收入项总金额的比例，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  contributionPercentage?: number
  /**
   * 环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  mom?: number
  /** 展示金额 */
  showAmount: MoneyInfo
}

/** CreateAndApplyGeneralQuestionChasingRequest */
export interface CreateAndApplyGeneralQuestionChasingRequest {
  /** 关联的附件媒体ID列表 */
  attachmentMediumIds?: string[]
  /** 组织ID */
  orgId?: string
  /** 开放性问题 */
  question?: string
}

/**
 * CreateBusinessVoucherPaymentRecordRequest
 * 创建业务凭证支付记录的请求模型
 */
export interface CreateBusinessVoucherPaymentRecordRequest {
  /** 金额 */
  amount?: MoneyInfo
  /** 日期 */
  date?: string
  /** 支付的银行 */
  paymentBank?: string
  /** reference */
  reference?: string
}

/**
 * CreateItemRequest
 * 创建item的请求
 */
export interface CreateItemRequest {
  /** item描述 */
  description?: string
  /** 折算discount之后的最终价格，这个价格可能包含税也可能不包含税 */
  itemAmount?: MoneyInfo
  /**
   * 数量
   * @format double
   */
  quantity?: number
  /**
   * 税的金额？
   * 每一行的税需要依赖BusinessContext中的"是否含税"来反向计算的。
   */
  taxAmount?: MoneyInfo
  /**
   * 税率
   * @format double
   */
  taxRate?: number
  /**
   * item单位金额，因为有些业务场景单位金额小于最小单位金额，所以使用Double存储
   * @format double
   */
  unitAmount?: number
}

/**
 * DashboardReportInfo
 * 数据看板报告信息
 */
export interface DashboardReportInfo {
  /** 管理费用 */
  adminCostsAmount: MoneyInfo
  /** 现金 */
  cashInHand: MoneyInfo
  /** 成本 */
  costOfSalesAmount: MoneyInfo
  /** 运营利润 */
  grossProfitAmount: MoneyInfo
  /** 关键信息 */
  insights?: InsightInfo[]
  /** 净利润 */
  netProfitAmount: MoneyInfo
  /** 营业利润 */
  operatingProfitAmount: MoneyInfo
  /** 总成本 */
  totalCostsAmount: MoneyInfo
  /** 营业额 */
  turnoverAmount: MoneyInfo
}

/**
 * ExchangeRateInfo
 * 汇率
 */
export interface ExchangeRateInfo {
  /** 基础货币 */
  baseCurrency: string
  /** 汇率日期 */
  date: string
  /**
   * 汇率
   * @format double
   */
  exchangeRate: number
  /** 目标货币 */
  targetCurrency: string
}

/**
 * FileInfo
 * 文件信息
 */
export interface FileInfo {
  /** 文件的封面图片链接 */
  coverImageUrl?: string
  /** 媒体类型 */
  mediumContentType: string
  /** 媒体摘要 */
  mediumDigest: string
  /** 媒体ID */
  mediumId: string
  /** 媒体名，可选 */
  mediumName?: string
  /**
   * 媒体大小
   * @format int64
   */
  mediumSize: number
  /** 媒体状态 */
  mediumStatus: string
  /**
   * 媒体类型
   * @example "MediumTypeEnum"
   */
  mediumType: string
  /** 媒体链接 */
  mediumUrl: string
  /** 上传用户的id */
  uploadUserId: string
}

/**
 * FileQueryRequest
 * 文件查询请求
 */
export interface FileQueryRequest {
  /** 文件的内容摘要 */
  fileDigest: string
}

/**
 * FileRegisterRequest
 * 文件注册请求
 */
export interface FileRegisterRequest {
  /** 文件的封面图片链接 */
  coverImageUrl?: string
  /** 文件类型，必填 */
  fileContentType: string
  /** 文件摘要，必填 */
  fileDigest: string
  /** 文件名，可选 */
  fileName?: string
  /**
   * 文件大小，必填
   * @format int64
   */
  fileSize: number
  /** 文件链接，必填 */
  fileUrl: string
}

/**
 * FundVoucherInfo
 * 资金支付凭证，包括Direct Payment，Over Payment，Split Payment
 */
export interface FundVoucherInfo {
  /** 供应商银行账户名称 */
  accountName?: string
  /** 供应商银行账户号 */
  accountNo?: string
  /** xero deeplink 地址 */
  accountingDeepLink?: string
  /** 附件id */
  attachmentId?: string
  /** 附件信息 */
  attachmentInfo?: AttachmentInfo
  /** 资金凭证是在哪个银存科目下发生的。 */
  bankAccountId?: string
  /** 供应商银行名称 */
  bankName?: string
  /** 确定的已对账金额.包括certain recon、org confirm这两种已对账的金额 */
  certainReconedAmount?: MoneyInfo
  /**
   * 是否正在客户催账
   * @example false
   */
  clientChasing?: boolean
  /** 对手方ID */
  contactId?: string
  /** 对手方信息 */
  contactInfo?: ContactInfo
  /** 对手方名称，如果是bill则为supplierName，如果是invoice则为customerName */
  contactName?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 币种
   * @example "CurrencyEnum"
   */
  currency?: string
  /** 客户地址 */
  customerAddress?: string
  /** 客户联系人ID */
  customerContactId?: string
  /** 客户名称 */
  customerName?: string
  /**
   * 凭证文档类型
   * @example "DocumentTypeEnum"
   */
  documentType?: string
  /**
   * 支付截止时间
   * @format date-time
   */
  dueDate?: string
  /**
   * Receipt资金发生时间
   * @format date-time
   */
  fundDate?: string
  /**
   * 资金方向，是流入还是流出。
   * @example "FundDirectionEnum"
   */
  fundDirection?: string
  /** 供应商银行iban号 */
  iban?: string
  /**
   * 生效时间
   * @format date-time
   */
  issueDate?: string
  /**
   * 每个item中的itemAmount是否含税
   * @example "ItemAmountTypeEnum"
   */
  itemAmountType?: string
  /** 交付物信息 */
  items?: ItemInfo[]
  /**
   * 最后修改时间
   * @format date-time
   */
  modifyTime?: string
  /** OCR识别的交付物信息 */
  ocrItems?: ItemInfo[]
  /** 组织id */
  orgId?: string
  /** 备注 */
  reference?: string
  /** 供应商银行sortCode */
  sortCode?: string
  /**
   * 凭证状态
   * @example "VoucherStatusEnum"
   */
  status?: string
  /** 税前总金额 */
  subtotalAmount?: MoneyInfo
  /** 供应商地址 */
  supplierAddress?: string
  /** 供应商联系人ID */
  supplierContactId?: string
  /** 供应商名称 */
  supplierName?: string
  /** 待对账金额 */
  toReconAmount?: MoneyInfo
  /** 总金额 */
  totalAmount?: MoneyInfo
  /** 税金总额 */
  vatAmount?: MoneyInfo
  /** VAT税号 */
  vatNo?: string
  /** 凭证id */
  voucherId?: string
  /** 凭证编号 */
  voucherNo?: string
  /**
   * 凭证子类型
   * @example "VoucherSubTypeEnum"
   */
  voucherSubType?: string
  /**
   * 凭证类型
   * @example "VoucherTypeEnum"
   */
  voucherType?: string
}

/**
 * GeneralQuestionInfo
 * Bookkeeper General Question Info model
 */
export interface GeneralQuestionInfo {
  attachmentInfos?: AttachmentInfo[]
  bookkeeperId?: string
  /** @format date-time */
  createTime?: string
  /** @format date-time */
  modifyTime?: string
  orgId?: string
  question?: string
  questionId?: string
}

/** GenericPageQueryResult«List«BankStatementLineInfo»» */
export interface GenericPageQueryResultListBankStatementLineInfo {
  /** @format int64 */
  cent?: number
  /** @format date-time */
  date?: string
  detailResultMessage?: string
  extInfo?: Record<string, string>
  /** @format int32 */
  httpStatus?: number
  index?: string
  orderType?: 'ASC' | 'DESC'
  readableResultCode?: string
  success?: boolean
  /** @format int64 */
  sum?: number
  value?: BankStatementLineInfo[]
}

/** GenericPageQueryResult«List«BaseVoucherInfo»» */
export interface GenericPageQueryResultListBaseVoucherInfo {
  /** @format int64 */
  cent?: number
  /** @format date-time */
  date?: string
  detailResultMessage?: string
  extInfo?: Record<string, string>
  /** @format int32 */
  httpStatus?: number
  index?: string
  orderType?: 'ASC' | 'DESC'
  readableResultCode?: string
  success?: boolean
  /** @format int64 */
  sum?: number
  value?: BaseVoucherInfo[]
}

/** GenericPageQueryResult«List«ChasingRecordMessageInfo»» */
export interface GenericPageQueryResultListChasingRecordMessageInfo {
  /** @format int64 */
  cent?: number
  /** @format date-time */
  date?: string
  detailResultMessage?: string
  extInfo?: Record<string, string>
  /** @format int32 */
  httpStatus?: number
  index?: string
  orderType?: 'ASC' | 'DESC'
  readableResultCode?: string
  success?: boolean
  /** @format int64 */
  sum?: number
  value?: ChasingRecordMessageInfo[]
}

/** GenericPageQueryResult«List«ContactInfo»» */
export interface GenericPageQueryResultListContactInfo {
  /** @format int64 */
  cent?: number
  /** @format date-time */
  date?: string
  detailResultMessage?: string
  extInfo?: Record<string, string>
  /** @format int32 */
  httpStatus?: number
  index?: string
  orderType?: 'ASC' | 'DESC'
  readableResultCode?: string
  success?: boolean
  /** @format int64 */
  sum?: number
  value?: ContactInfo[]
}

/** GenericPageQueryResult«List«ReconRecordInfo»» */
export interface GenericPageQueryResultListReconRecordInfo {
  /** @format int64 */
  cent?: number
  /** @format date-time */
  date?: string
  detailResultMessage?: string
  extInfo?: Record<string, string>
  /** @format int32 */
  httpStatus?: number
  index?: string
  orderType?: 'ASC' | 'DESC'
  readableResultCode?: string
  success?: boolean
  /** @format int64 */
  sum?: number
  value?: ReconRecordInfo[]
}

/**
 * GenericResponse«AccountingAuthRecordInfo»
 * 请求结果
 */
export interface GenericResponseAccountingAuthRecordInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 会计软件授权记录 */
  data?: AccountingAuthRecordInfo
  message?: string
}

/**
 * GenericResponse«AllEnumsInfo»
 * 请求结果
 */
export interface GenericResponseAllEnumsInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 包含所有前端需要感知的枚举类，用于在swagger json中生成枚举类，和前端代码通过swagger json保持同步 */
  data?: AllEnumsInfo
  message?: string
}

/**
 * GenericResponse«ApiDataEncryptConfigRecordInfo»
 * 请求结果
 */
export interface GenericResponseApiDataEncryptConfigRecordInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 加解密秘钥信息 */
  data?: ApiDataEncryptConfigRecordInfo
  message?: string
}

/**
 * GenericResponse«BaseVoucherInfo»
 * 请求结果
 */
export interface GenericResponseBaseVoucherInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: BaseVoucherInfo
  message?: string
}

/**
 * GenericResponse«ChasingRecordInfo»
 * 请求结果
 */
export interface GenericResponseChasingRecordInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** ChasingRecordInfo model */
  data?: ChasingRecordInfo
  message?: string
}

/**
 * GenericResponse«CheckOnboardingFormInfo»
 * 请求结果
 */
export interface GenericResponseCheckOnboardingFormInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** check onboarding form info */
  data?: CheckOnboardingFormInfo
  message?: string
}

/**
 * GenericResponse«ContactInfo»
 * 请求结果
 */
export interface GenericResponseContactInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** Contact Info */
  data?: ContactInfo
  message?: string
}

/**
 * GenericResponse«DashboardReportInfo»
 * 请求结果
 */
export interface GenericResponseDashboardReportInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 数据看板报告信息 */
  data?: DashboardReportInfo
  message?: string
}

/**
 * GenericResponse«ExchangeRateInfo»
 * 请求结果
 */
export interface GenericResponseExchangeRateInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 汇率 */
  data?: ExchangeRateInfo
  message?: string
}

/**
 * GenericResponse«FileInfo»
 * 请求结果
 */
export interface GenericResponseFileInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 文件信息 */
  data?: FileInfo
  message?: string
}

/**
 * GenericResponse«GenericPageQueryResult«List«BankStatementLineInfo»»»
 * 请求结果
 */
export interface GenericResponseGenericPageQueryResultListBankStatementLineInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: GenericPageQueryResultListBankStatementLineInfo
  message?: string
}

/**
 * GenericResponse«GenericPageQueryResult«List«BaseVoucherInfo»»»
 * 请求结果
 */
export interface GenericResponseGenericPageQueryResultListBaseVoucherInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: GenericPageQueryResultListBaseVoucherInfo
  message?: string
}

/**
 * GenericResponse«GenericPageQueryResult«List«ChasingRecordMessageInfo»»»
 * 请求结果
 */
export interface GenericResponseGenericPageQueryResultListChasingRecordMessageInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: GenericPageQueryResultListChasingRecordMessageInfo
  message?: string
}

/**
 * GenericResponse«GenericPageQueryResult«List«ContactInfo»»»
 * 请求结果
 */
export interface GenericResponseGenericPageQueryResultListContactInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: GenericPageQueryResultListContactInfo
  message?: string
}

/**
 * GenericResponse«GenericPageQueryResult«List«ReconRecordInfo»»»
 * 请求结果
 */
export interface GenericResponseGenericPageQueryResultListReconRecordInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: GenericPageQueryResultListReconRecordInfo
  message?: string
}

/**
 * GenericResponse«ImageInfo»
 * 请求结果
 */
export interface GenericResponseImageInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 图片信息 */
  data?: ImageInfo
  message?: string
}

/**
 * GenericResponse«List«AccountInfo»»
 * 请求结果
 */
export interface GenericResponseListAccountInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: AccountInfo[]
  message?: string
}

/**
 * GenericResponse«List«AuthUserInfo»»
 * 请求结果
 */
export interface GenericResponseListAuthUserInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: AuthUserInfo[]
  message?: string
}

/**
 * GenericResponse«List«BankStatementLineInfo»»
 * 请求结果
 */
export interface GenericResponseListBankStatementLineInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: BankStatementLineInfo[]
  message?: string
}

/**
 * GenericResponse«List«CashFlowReportInfo»»
 * 请求结果
 */
export interface GenericResponseListCashFlowReportInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: CashFlowReportInfo[]
  message?: string
}

/**
 * GenericResponse«List«ChasingRecordInfo»»
 * 请求结果
 */
export interface GenericResponseListChasingRecordInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: ChasingRecordInfo[]
  message?: string
}

/**
 * GenericResponse«List«OrgTaskInfo»»
 * 请求结果
 */
export interface GenericResponseListOrgTaskInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: OrgTaskInfo[]
  message?: string
}

/**
 * GenericResponse«List«OrganizationInfo»»
 * 请求结果
 */
export interface GenericResponseListOrganizationInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: OrganizationInfo[]
  message?: string
}

/**
 * GenericResponse«List«ProfitAndLossReportInfo»»
 * 请求结果
 */
export interface GenericResponseListProfitAndLossReportInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: ProfitAndLossReportInfo[]
  message?: string
}

/**
 * GenericResponse«List«TaskNotificationInfo»»
 * 请求结果
 */
export interface GenericResponseListTaskNotificationInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: TaskNotificationInfo[]
  message?: string
}

/**
 * GenericResponse«List«TaxRateInfo»»
 * 请求结果
 */
export interface GenericResponseListTaxRateInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: TaxRateInfo[]
  message?: string
}

/**
 * GenericResponse«LoginInfo»
 * 请求结果
 */
export interface GenericResponseLoginInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 登录信息 */
  data?: LoginInfo
  message?: string
}

/**
 * GenericResponse«ManualReconRecordInfo»
 * 请求结果
 */
export interface GenericResponseManualReconRecordInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 人工对账记录 */
  data?: ManualReconRecordInfo
  message?: string
}

/**
 * GenericResponse«Map«date-time,List«ContactStatisticInfo»»»
 * 请求结果
 */
export interface GenericResponseMapDateTimeListContactStatisticInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: Record<string, ContactStatisticInfo[]>
  message?: string
}

/**
 * GenericResponse«Map«date-time,MoneyInfo»»
 * 请求结果
 */
export interface GenericResponseMapDateTimeMoneyInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: Record<string, MoneyInfo>
  message?: string
}

/**
 * GenericResponse«MediumUploadUrlInfo»
 * 请求结果
 */
export interface GenericResponseMediumUploadUrlInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 媒体上传URL信息 */
  data?: MediumUploadUrlInfo
  message?: string
}

/**
 * GenericResponse«OrgContextInfo»
 * 请求结果
 */
export interface GenericResponseOrgContextInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 组织背景信息 */
  data?: OrgContextInfo
  message?: string
}

/**
 * GenericResponse«OrganizationInfo»
 * 请求结果
 */
export interface GenericResponseOrganizationInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 组织信息 */
  data?: OrganizationInfo
  message?: string
}

/**
 * GenericResponse«PredictAccountInfo»
 * 请求结果
 */
export interface GenericResponsePredictAccountInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 预测的科目信息 */
  data?: PredictAccountInfo
  message?: string
}

/**
 * GenericResponse«ReconRecordCountInfo»
 * 请求结果
 */
export interface GenericResponseReconRecordCountInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 对账记录统计信息 */
  data?: ReconRecordCountInfo
  message?: string
}

/**
 * GenericResponse«StripeCheckoutSessionInfo»
 * 请求结果
 */
export interface GenericResponseStripeCheckoutSessionInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** Stripe 授权结果 */
  data?: StripeCheckoutSessionInfo
  message?: string
}

/**
 * GenericResponse«TableReportInfo»
 * 请求结果
 */
export interface GenericResponseTableReportInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 通用的表格式报表信息 */
  data?: TableReportInfo
  message?: string
}

/**
 * GenericResponse«UserInfo»
 * 请求结果
 */
export interface GenericResponseUserInfo {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** 用户信息 */
  data?: UserInfo
  message?: string
}

/**
 * GenericResponse«long»
 * 请求结果
 */
export interface GenericResponseLong {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  /** @format int64 */
  data?: number
  message?: string
}

/**
 * GenericResponse«string»
 * 请求结果
 */
export interface GenericResponseString {
  /**
   * 可读结果码
   * @example "PaiResultCode"
   */
  code: string
  data?: string
  message?: string
}

/**
 * GetAccountingAuthUrlRequest
 * 获取会计软件授权URL
 */
export interface GetAccountingAuthUrlRequest {
  /**
   * 会计软件
   * @example "AccountingSoftwareEnum"
   */
  accountingSoftware: string
  /** 组织id，只有在断连组织重连的时候需要传 */
  orgId?: string
  /** requestId */
  requestId: string
}

/**
 * HistoryChasingRecordPageQueryRequest
 * 分页查询历史chasing记录请求
 */
export interface HistoryChasingRecordPageQueryRequest {
  /** 需要查询历史Chasing记录的chasing记录ID */
  chasingRecordId: string
  /** @format int64 */
  maxCent?: number
  /** @format date-time */
  maxDate?: string
  maxIndex?: string
  minIndex?: string
  orderType?: string
  /**
   * 分页查询，查询的页数，从0开始
   * @format int64
   */
  page?: number
  /**
   * 分页查询，每次查询的条数
   * @format int64
   */
  pageSize: number
}

/**
 * ImageInfo
 * 图片信息
 */
export interface ImageInfo {
  /** 将标准化后的模糊处理后的图片URL */
  blurImageUrl?: string
  /** 媒体类型 */
  mediumContentType: string
  /** 媒体摘要 */
  mediumDigest: string
  /** 媒体ID */
  mediumId: string
  /** 媒体名，可选 */
  mediumName?: string
  /**
   * 媒体大小
   * @format int64
   */
  mediumSize: number
  /** 媒体状态 */
  mediumStatus: string
  /**
   * 媒体类型
   * @example "MediumTypeEnum"
   */
  mediumType: string
  /** 媒体链接 */
  mediumUrl: string
  /**
   * 原始图片内容高度
   * @format int32
   */
  sourceImageHeight: number
  /**
   * 原始图片内容宽度
   * @format int32
   */
  sourceImageWidth: number
  /** 可展示的标准化后的图片URL */
  standardImageUrl: string
  /** 上传用户的id */
  uploadUserId: string
}

/**
 * ImageQueryRequest
 * 图片查询请求
 */
export interface ImageQueryRequest {
  /** 原始图片的内容摘要 */
  imageDigest: string
}

/**
 * ImageRegisterRequest
 * 图片注册请求
 */
export interface ImageRegisterRequest {
  /** 源图的内容类型 image/png */
  imageContentType: string
  /** 源图的内容摘要 */
  imageDigest: string
  /**
   * 源图的高度，像素
   * @format int32
   */
  imageHeight: number
  /** 文件名，可选 */
  imageName?: string
  /**
   * 源图的大小
   * @format int64
   */
  imageSize: number
  /** 源图的URL */
  imageUrl: string
  /**
   * 源图的宽度，像素
   * @format int32
   */
  imageWidth: number
  /** 前端压缩后的标准图片的URL */
  standardImageUrl: string
}

/**
 * InsightInfo
 * 关键信息
 */
export interface InsightInfo {
  /**
   * 指标时间，取到月份
   * @format date-time
   */
  insightPeriod: string
  /** 关键指标 */
  keyBullets: string[]
}

/**
 * ItemInfo
 * 交付物信息
 */
export interface ItemInfo {
  /** 科目 */
  account?: AccountInfo
  /** 科目ID */
  accountId?: string
  /** 描述信息，必填 */
  description: string
  /** xero中创建purchase order的时候可以在line item上输入discount，带有discount的purchase order生成的bill也会有discount信息 */
  discountAmount?: MoneyInfo
  /**
   * 折扣
   * @format double
   */
  discountRate?: number
  /** 折算discount之后的最终价格，这个价格可能包含税也可能不包含税 */
  itemAmount?: MoneyInfo
  /** 主键id */
  itemId: string
  /** 组织id */
  orgId: string
  /** 预测科目id */
  predictAccountId?: string
  /** 预测科目名称 */
  predictAccountName?: string
  /** 预测科目理由 */
  predictAccountReason?: string
  /**
   * 数量
   * @format double
   */
  quantity?: number
  /**
   * 税的金额？
   * 每一行的税需要依赖BusinessContext中的"是否含税"来反向计算的。
   */
  taxAmount?: MoneyInfo
  /** 税率 */
  taxRate?: TaxRateInfo
  /** 税率ID */
  taxRateId?: string
  /**
   * item单位金额，因为有些业务场景单位金额小于最小单位金额，所以使用Double存储
   * @format double
   */
  unitAmount?: number
  /** item金额货币单位 */
  unitAmountCurrencyCode?: string
  /** 业务凭证id */
  voucherId: string
}

/**
 * LoginInfo
 * 登录信息
 */
export interface LoginInfo {
  /** pinvo ai 登录 token */
  jwtToken: string
  /**
   * 登录密码错误次数
   * @format int32
   */
  passwordErrorTimes?: number
  /** pinvo io 登录 token */
  pinvoJwtToken?: string
  /** pinvo ai userId */
  userId: string
}

/**
 * ManualMatchVoucherRequest
 * 手动匹配Doc请求
 */
export interface ManualMatchVoucherRequest {
  /** 银行流水ID */
  bankStatementLineId: string
  /**
   * 是否标记为无凭证
   * @example false
   */
  markAsNoDoc?: boolean
  /** 选择匹配的VoucherId */
  voucherId?: string
}

/**
 * ManualReconRecordInfo
 * 人工对账记录
 */
export interface ManualReconRecordInfo {
  bookkeeperConfirmNoDoc?: boolean
  /** 附件信息 */
  bookkeeperMatchDoc?: AttachmentInfo
  bookkeeperMatchDocVoucherId?: string
  clientConfirmNoDoc?: boolean
  /** 附件信息 */
  clientMatchDoc?: AttachmentInfo
  clientMatchDocVoucherId?: string
  /** 对账记录中使用的业务凭证信息 */
  confirmedReconVoucherDetail?: ReconVoucherDetailInfo
  confirmedReconVoucherDetailId?: string
  /** @format date-time */
  createTime?: string
  /** @format date-time */
  modifyTime?: string
  orgId?: string
  recordId?: string
  statementLineId?: string
  /**
   * 状态
   * @example "ManualReconRecordStatusEnum"
   */
  status: string
}

/**
 * MediumInfo
 * 媒体信息类型
 */
export interface MediumInfo {
  /** 媒体类型 */
  mediumContentType: string
  /** 媒体摘要 */
  mediumDigest: string
  /** 媒体ID */
  mediumId: string
  /** 媒体名，可选 */
  mediumName?: string
  /**
   * 媒体大小
   * @format int64
   */
  mediumSize: number
  /** 媒体状态 */
  mediumStatus: string
  /**
   * 媒体类型
   * @example "MediumTypeEnum"
   */
  mediumType: string
  /** 媒体链接 */
  mediumUrl: string
  /** 上传用户的id */
  uploadUserId: string
}

/**
 * MediumRegisterRequest
 * 媒体注册请求
 */
export interface MediumRegisterRequest {
  /** 文件注册请求 */
  fileRegisterRequest?: FileRegisterRequest
  /** 图片注册请求 */
  imageRegisterRequest?: ImageRegisterRequest
  /**
   * 媒体类型
   * @example "MediumTypeEnum"
   */
  mediumType: string
}

/**
 * MediumUploadUrlFetchRequest
 * 媒体临时上传URL获取请求
 */
export interface MediumUploadUrlFetchRequest {
  /**
   * 媒体的内容类型 image/png
   * @example "HttpContentTypeEnum"
   */
  mediumContentType: string
  /**
   * 媒体类型
   * @example "MediumTypeEnum"
   */
  mediumType: string
}

/**
 * MediumUploadUrlInfo
 * 媒体上传URL信息
 */
export interface MediumUploadUrlInfo {
  /** 媒体临时上传URL */
  mediumUploadUrl: string
  /** 生成的媒体访问URL */
  mediumUrl: string
}

/** ModelAndView */
export interface ModelAndView {
  empty?: boolean
  model?: object
  modelMap?: Record<string, object>
  reference?: boolean
  status?:
    | 'ACCEPTED'
    | 'ALREADY_REPORTED'
    | 'BAD_GATEWAY'
    | 'BAD_REQUEST'
    | 'BANDWIDTH_LIMIT_EXCEEDED'
    | 'CHECKPOINT'
    | 'CONFLICT'
    | 'CONTINUE'
    | 'CREATED'
    | 'DESTINATION_LOCKED'
    | 'EXPECTATION_FAILED'
    | 'FAILED_DEPENDENCY'
    | 'FORBIDDEN'
    | 'FOUND'
    | 'GATEWAY_TIMEOUT'
    | 'GONE'
    | 'HTTP_VERSION_NOT_SUPPORTED'
    | 'IM_USED'
    | 'INSUFFICIENT_SPACE_ON_RESOURCE'
    | 'INSUFFICIENT_STORAGE'
    | 'INTERNAL_SERVER_ERROR'
    | 'I_AM_A_TEAPOT'
    | 'LENGTH_REQUIRED'
    | 'LOCKED'
    | 'LOOP_DETECTED'
    | 'METHOD_FAILURE'
    | 'METHOD_NOT_ALLOWED'
    | 'MOVED_PERMANENTLY'
    | 'MOVED_TEMPORARILY'
    | 'MULTIPLE_CHOICES'
    | 'MULTI_STATUS'
    | 'NETWORK_AUTHENTICATION_REQUIRED'
    | 'NON_AUTHORITATIVE_INFORMATION'
    | 'NOT_ACCEPTABLE'
    | 'NOT_EXTENDED'
    | 'NOT_FOUND'
    | 'NOT_IMPLEMENTED'
    | 'NOT_MODIFIED'
    | 'NO_CONTENT'
    | 'OK'
    | 'PARTIAL_CONTENT'
    | 'PAYLOAD_TOO_LARGE'
    | 'PAYMENT_REQUIRED'
    | 'PERMANENT_REDIRECT'
    | 'PRECONDITION_FAILED'
    | 'PRECONDITION_REQUIRED'
    | 'PROCESSING'
    | 'PROXY_AUTHENTICATION_REQUIRED'
    | 'REQUESTED_RANGE_NOT_SATISFIABLE'
    | 'REQUEST_ENTITY_TOO_LARGE'
    | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
    | 'REQUEST_TIMEOUT'
    | 'REQUEST_URI_TOO_LONG'
    | 'RESET_CONTENT'
    | 'SEE_OTHER'
    | 'SERVICE_UNAVAILABLE'
    | 'SWITCHING_PROTOCOLS'
    | 'TEMPORARY_REDIRECT'
    | 'TOO_EARLY'
    | 'TOO_MANY_REQUESTS'
    | 'UNAUTHORIZED'
    | 'UNAVAILABLE_FOR_LEGAL_REASONS'
    | 'UNPROCESSABLE_ENTITY'
    | 'UNSUPPORTED_MEDIA_TYPE'
    | 'UPGRADE_REQUIRED'
    | 'URI_TOO_LONG'
    | 'USE_PROXY'
    | 'VARIANT_ALSO_NEGOTIATES'
  view?: View
  viewName?: string
}

/** MoneyInfo */
export interface MoneyInfo {
  /** 金额。币种的基准单位，比如1.55英镑，则传1.55 */
  amount: string
  /** 币种，比如GBP */
  currency: string
}

/**
 * OcrVoucherInfo
 * OCR识别的业务凭证
 */
export interface OcrVoucherInfo {
  /** 供应商银行账户名称 */
  accountName?: string
  /** 供应商银行账户号 */
  accountNo?: string
  /** xero deeplink 地址 */
  accountingDeepLink?: string
  /** 附件id */
  attachmentId?: string
  /** 附件信息 */
  attachmentInfo?: AttachmentInfo
  /** 资金凭证是在哪个银存科目下发生的。 */
  bankAccountId?: string
  /** 供应商银行名称 */
  bankName?: string
  /** 确定的已对账金额.包括certain recon、org confirm这两种已对账的金额 */
  certainReconedAmount?: MoneyInfo
  /**
   * 是否正在客户催账
   * @example false
   */
  clientChasing?: boolean
  /** 对手方ID */
  contactId?: string
  /** 对手方信息 */
  contactInfo?: ContactInfo
  /** 对手方名称，如果是bill则为supplierName，如果是invoice则为customerName */
  contactName?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 币种
   * @example "CurrencyEnum"
   */
  currency?: string
  /** 客户地址 */
  customerAddress?: string
  /** 客户联系人ID */
  customerContactId?: string
  /** 客户名称 */
  customerName?: string
  /**
   * 凭证文档类型
   * @example "DocumentTypeEnum"
   */
  documentType?: string
  /**
   * 支付截止时间
   * @format date-time
   */
  dueDate?: string
  /**
   * Receipt资金发生时间
   * @format date-time
   */
  fundDate?: string
  /**
   * 资金方向，是流入还是流出。
   * @example "FundDirectionEnum"
   */
  fundDirection?: string
  /** 供应商银行iban号 */
  iban?: string
  /**
   * 生效时间
   * @format date-time
   */
  issueDate?: string
  /**
   * 每个item中的itemAmount是否含税
   * @example "ItemAmountTypeEnum"
   */
  itemAmountType?: string
  /** 交付物信息 */
  items?: ItemInfo[]
  /**
   * 最后修改时间
   * @format date-time
   */
  modifyTime?: string
  /** OCR识别的交付物信息 */
  ocrItems?: ItemInfo[]
  /** 组织id */
  orgId?: string
  /** 备注 */
  reference?: string
  /** 供应商银行sortCode */
  sortCode?: string
  /**
   * 凭证状态
   * @example "VoucherStatusEnum"
   */
  status?: string
  /** 税前总金额 */
  subtotalAmount?: MoneyInfo
  /** 供应商地址 */
  supplierAddress?: string
  /** 供应商联系人ID */
  supplierContactId?: string
  /** 供应商名称 */
  supplierName?: string
  /** 待对账金额 */
  toReconAmount?: MoneyInfo
  /** 总金额 */
  totalAmount?: MoneyInfo
  /** 税金总额 */
  vatAmount?: MoneyInfo
  /** VAT税号 */
  vatNo?: string
  /** 凭证id */
  voucherId?: string
  /** 凭证编号 */
  voucherNo?: string
  /**
   * 凭证子类型
   * @example "VoucherSubTypeEnum"
   */
  voucherSubType?: string
  /**
   * 凭证类型
   * @example "VoucherTypeEnum"
   */
  voucherType?: string
}

/**
 * OrgContactPersonInfo
 * 组织联系人信息
 */
export interface OrgContactPersonInfo {
  /** 联系人Email */
  email?: string
  /** 联系人First Name */
  firstName?: string
  /** 联系人全名 */
  fullName?: string
  /** 联系人Last Name */
  lastName?: string
}

/**
 * OrgContextApplyRequest
 * Org背景信息申请生成请求
 */
export interface OrgContextApplyRequest {
  /** 客户OnboardingCass的音频URL */
  onboardingCallAudioUrl: string
  /** 组织id */
  orgId: string
}

/**
 * OrgContextInfo
 * 组织背景信息
 */
export interface OrgContextInfo {
  /** 背景信息 */
  backGroundContext?: string
  /** Onboarding音频地址 */
  onboardingCallAudioUrl?: string
  /** 关联的组织ID */
  orgId?: string
  /**
   * Onboarding音频地址处理标志
   * @example false
   */
  processingOnboardingCallAudioUrlFlag?: boolean
}

/**
 * OrgContextQueryRequest
 * Org背景信息查询请求
 */
export interface OrgContextQueryRequest {
  /** 组织id */
  orgId: string
}

/**
 * OrgContextSaveRequest
 * Org背景信息保存请求
 */
export interface OrgContextSaveRequest {
  /** 背景信息 */
  backGroundContext?: string
  /** 组织id */
  orgId: string
}

/**
 * OrgIdRequest
 * 查询组织信息的通用请求
 */
export interface OrgIdRequest {
  /** 组织id */
  orgId: string
}

/**
 * OrgModifyRequest
 * 组织信息修改请求
 */
export interface OrgModifyRequest {
  /** CIS授权码 */
  cisAuthCode?: string
  /** UK Company House授权码 */
  companiesHouseAuthCode?: string
  /** 企业税务授权码 */
  corporateTaxAuthCode?: string
  /** 组织id */
  orgId: string
  /** PAYE授权码 */
  payeAuthCode?: string
  /** 唯一税务号码 */
  utrNumber?: string
  /** VAT授权码 */
  vatAuthCode?: string
}

/**
 * OrgTaskChangeStatusRequest
 * 组织任务状态变更请求
 */
export interface OrgTaskChangeStatusRequest {
  /**
   * 扭转的目标任务
   * @example "OrgTaskStatusEnum"
   */
  destOrgTaskStatus: string
  /** 任务id */
  orgTaskId: string
}

/**
 * OrgTaskInfo
 * 组织任务信息
 */
export interface OrgTaskInfo {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 修改时间
   * @format date-time
   */
  modifyTime?: string
  /** 组织ID */
  orgId?: string
  /** 任务状态 */
  orgTaskStatus?: string
  /** 任务类型 */
  orgTaskType?: string
  /**
   * 任务优先级
   * @format int32
   */
  priority?: number
  /** 组织任务ID */
  taskId?: string
}

/**
 * OrgTaskQueryRequest
 * 组织任务查询请求
 */
export interface OrgTaskQueryRequest {
  /** 组织id */
  orgId: string
}

/**
 * OrgTaskResetRequest
 * 组织任务重置请求
 */
export interface OrgTaskResetRequest {
  /** 组织id */
  orgId: string
  /** 重置的任务类型列表 */
  orgTaskInfoList?: OrgTaskInfo[]
}

/**
 * OrganizationInfo
 * 组织信息
 */
export interface OrganizationInfo {
  /** 会计软件侧绑定银行账户的url */
  accountingAddBankAccountUrl?: string
  /** 会计软件授权记录 */
  accountingAuthRecordId?: string
  /**
   * 会计软件断连原因
   * @example "AccountingDisconnectReasonEnum"
   */
  accountingDisconnectReason?: string
  /** 分配的专属邮箱 */
  assignedEmail?: string
  /**
   * 记账频率
   * @example "BookkeepingFrequencyEnum"
   */
  bookkeepingFrequency?: 'BI_WEEKLY' | 'DAILY' | 'MONTHLY' | 'QUARTERLY'
  /** 会计进度列表 */
  bookkeepingProgressList?: BookkeepingProgressInfo[]
  /** CIS授权码 */
  cisAuthCode?: string
  /** Companies House授权码 */
  companiesHouseAuthCode?: string
  /**
   * 是否连接会计软件
   * @example false
   */
  connected: boolean
  /** 公司税授权码 */
  corporateTaxAuthCode?: string
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 默认币种
   * @example "CurrencyEnum"
   */
  currency: string
  /**
   * 当前财年开始日期，和‘最新报表日期’一起使用，用来展示当前财年的数据
   * @format date-time
   */
  currentFinancialYearStartDate?: string
  /** 财年结束日期,MMDD */
  financialYearEndDate?: string
  /** 财年开始日期,MMDD */
  financialYearStartDate?: string
  /**
   * 是否已经成功同步过
   * @example false
   */
  hasSuccessSynced?: boolean
  /**
   * 主键id
   * @format int64
   */
  id?: number
  /**
   * 上一次同步成功的时间
   * @format date-time
   */
  lastSuccessSyncTime?: string
  /**
   * 上一次同步是否成功
   * @example false
   */
  lastSyncSuccess?: boolean
  /**
   * 上一次同步时间
   * @format date-time
   */
  lastSyncTime?: string
  /**
   * 最新报表日期
   * @format date-time
   */
  latestReportDate?: string
  /** 组织注册地址 */
  legalOrgAddress?: AddressInfo
  /** 组织注册日期 */
  legalOrgIncorporatedDate?: string
  /** 组织注册名称 */
  legalOrgName?: string
  /** 组织注册号 */
  legalOrgNo?: string
  /** 组织注册类型：LTD/PLC/LLP */
  legalOrgType?: string
  /**
   * 修改时间
   * @format date-time
   */
  modifyTime?: string
  /** 组织地址 */
  orgAddress?: AddressInfo
  /** 组织联系人信息 */
  orgContactPersonInfo?: OrgContactPersonInfo
  /** 组织ID */
  orgId?: string
  /** 组织品牌图片ID */
  orgLogoImageId?: string
  /** 组织名称 */
  orgName?: string
  /** 组织类型：注册公司/个人 */
  orgType?: string
  /** 组织申请的VAT税号 */
  orgVATNo?: string
  /** PAYE授权码 */
  payeAuthCode?: string
  /**
   * pinvo服务套餐
   * @example "PinvoServicePackageEnum"
   */
  pinvoServicePackage?: 'BESPOKE' | 'GROWTH' | 'LITE' | 'MINI' | 'PRO' | 'PRO_MAX' | 'STARTER'
  /** 创建请求ID */
  requestId?: string
  /**
   * 支持的币种列表,含默认币种
   * @uniqueItems true
   * @example "CurrencyEnum"
   */
  supportCurrencies: string[]
  /**
   * 是否同步中
   * @example false
   */
  syncing?: boolean
  /** 唯一税务识别号 */
  utrNumber?: string
  /** VAT授权码 */
  vatAuthCode?: string
  /**
   * VAT注册日期
   * @format date-time
   */
  vatRegisterDate?: string
}

/** PinvoRemoveVoucherRequest */
export interface PinvoRemoveVoucherRequest {
  /** 组织ID */
  orgId?: string
  /** 凭证号 */
  voucherNo?: string
  /** 凭证子类型 */
  voucherSubType?: string
}

/**
 * PinvoSyncVoucherRequest
 * PinvoIO同步凭证的请求
 */
export interface PinvoSyncVoucherRequest {
  /** 对手方 */
  contactName?: string
  /** 过期日期 */
  dueDate?: string
  /** issue date */
  issueDate?: string
  /** item金额类型 */
  itemAmountType?: string
  /** items */
  items?: CreateItemRequest[]
  /** 组织ID */
  orgId?: string
  /** 支付记录 */
  paymentRecords?: CreateBusinessVoucherPaymentRecordRequest[]
  /** PinvoIO的凭证ID */
  pinvoInvoiceId?: string
  /** 备注 */
  reference?: string
  /** 税前总金额 */
  subTotalAmount?: MoneyInfo
  /** 总的税金额 */
  taxAmount?: MoneyInfo
  /** 总金额 */
  totalAmount?: MoneyInfo
  /** 凭证号 */
  voucherNo?: string
  /** 凭证子类型 */
  voucherSubType?: string
}

/**
 * PredictAccountInfo
 * 预测的科目信息
 */
export interface PredictAccountInfo {
  /** 预测的科目信息 */
  accountInfo?: AccountInfo
  /** 预测的税率信息 */
  taxRateInfo?: TaxRateInfo
}

/** ProfitAndLossReportInfo */
export interface ProfitAndLossReportInfo {
  /** 管理费用的科目统计信息 */
  adminCostsAccountStatisticInfos?: AccountStatisticInfo[]
  /** @uniqueItems true */
  adminCostsAccounts?: string[]
  /** 管理费用 */
  adminCostsAmount: MoneyInfo
  /**
   * 管理费用的月环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  adminCostsAmountMoM?: number
  allAccountStatisticInfos?: AccountStatisticInfo[]
  /** 成本的科目统计信息 */
  costOfSalesAccountStatisticInfos?: AccountStatisticInfo[]
  /** @uniqueItems true */
  costOfSalesAccounts?: string[]
  /** 成本 */
  costOfSalesAmount: MoneyInfo
  /**
   * 销售成本的月环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  costOfSalesAmountMoM?: number
  /**
   * 报表结束日期
   * @format date-time
   */
  endDate?: string
  foreignCurrencyGainsAndLosses?: AccountStatisticInfo
  /** 毛利润=收入-成本 */
  grossProfitAmount: MoneyInfo
  /**
   * 毛利润的月环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  grossProfitAmountMoM?: number
  /**
   * 毛利率=毛利润/营业额
   * @format int32
   */
  grossProfitMargin?: number
  netProfitAmount?: MoneyInfo
  /**
   * 净利润环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  netProfitAmountMoM?: number
  /**
   * 净利润率=净利润/营业额
   * @format int32
   */
  netProfitMargin?: number
  /** 营业利润=收入-成本-费用 */
  operatingProfitAmount: MoneyInfo
  /**
   * 毛利环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  operatingProfitAmountMoM?: number
  /**
   * 营业利润率=营业利润/营业额
   * @format int32
   */
  operatingProfitMargin?: number
  otherExpensesAccountStatisticInfos?: AccountStatisticInfo[]
  /** 税金额 */
  otherExpensesAmount: MoneyInfo
  /** 其他收入的科目统计信息 */
  otherIncomeAccountStatisticInfos?: AccountStatisticInfo[]
  /** @uniqueItems true */
  otherIncomeAccounts?: string[]
  /** 其他收入 */
  otherIncomeAmount: MoneyInfo
  /**
   * 其他收入的月环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  otherIncomeAmountMoM?: number
  otherIncomeAndExpensesAmount?: MoneyInfo
  /**
   * 报表开始日期
   * @format date-time
   */
  startDate?: string
  /** @uniqueItems true */
  taxationAccounts?: string[]
  /**
   * 税支出环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  taxationAmountMoM?: number
  /**
   * 是否是总计
   * @example false
   */
  total?: boolean
  /** 营业额的科目统计信息 */
  turnoverAccountStatisticInfos?: AccountStatisticInfo[]
  /** @uniqueItems true */
  turnoverAccounts?: string[]
  /** 营业额 */
  turnoverAmount: MoneyInfo
  /**
   * 营业额的月环比，正常情况下在后面加个%就可以展示；特殊情况：分母为零时会返回null，需要特殊处理
   * @format int32
   */
  turnoverAmountMoM?: number
}

/**
 * QueryAuthUserRequest
 * 查询组织授权的用户列表请求
 */
export interface QueryAuthUserRequest {
  /** 组织ID */
  orgId: string
  /**
   * 用户角色
   * @example "UserRoleEnum"
   */
  userRole?: string
}

/** QueryBankStatementLineChasingRequest */
export interface QueryBankStatementLineChasingRequest {
  /** Chasing的银行流水ID */
  bankStatementLineId: string
  /**
   * Chasing Context问题类型
   * @example "ChasingQuestionTypeEnum"
   */
  chasingQuestionType?: string
  /**
   * Chasing类型
   * @example "ChasingTypeEnum"
   */
  chasingType: string
  /** 组织id */
  orgId: string
}

/**
 * QueryChasingContextListRequest
 * 查询chasing for context列表的请求
 */
export interface QueryChasingContextListRequest {
  /** chasing的问题类型 */
  chasingQuestionType: string
  /** 组织id */
  orgId: string
}

/**
 * QueryChasingListRequest
 * 查询chasing列表的请求
 */
export interface QueryChasingListRequest {
  /** 组织id */
  orgId: string
}

/**
 * QueryChasingRecordRequest
 * 查询chasing列表的请求
 */
export interface QueryChasingRecordRequest {
  /**
   * chasing问题类型列表
   * @example "ChasingQuestionTypeEnum"
   */
  chasingQuestionTypeList?: string[]
  /**
   * chasing状态列表
   * @example "ChasingStatusEnum"
   */
  chasingStatusList?: string[]
  /**
   * chasing对象类型列表
   * @example "ChasingTargetTypeEnum"
   */
  chasingTargetTypeList?: string[]
  /**
   * chasing类型列表
   * @example "ChasingTypeEnum"
   */
  chasingTypeList?: string[]
  /** 组织id */
  orgId: string
}

/**
 * QueryExchangeRateRequest
 * 查询汇率的请求
 */
export interface QueryExchangeRateRequest {
  /**
   * 基础货币，客户手里有的币种，如GBP
   * @example "CurrencyEnum"
   */
  baseCurrency: string
  /** 发生日期，YYYYMMDD， 如20230117 */
  date: string
  /**
   * 目标货币，实际消费的币种，如EUR
   * @example "CurrencyEnum"
   */
  targetCurrency: string
}

/**
 * QueryReportRequest
 * 查询自定义时间范围的数据的请求
 */
export interface QueryReportRequest {
  /** 如果查询条件包含科目，则需传科目id */
  accountId?: string
  /** 如果查询条件包含联系人，则需传联系人id */
  contactId?: string
  /**
   * 结束日期，闭区间，格式：YYYYMMDD。如果是查询BalanceSheet这种某一天的报表，则通过本字段传。如果是查某个月的数据，也通过这个字段传，后端只拿YYYYMM。
   * @format date-time
   */
  endDate: string
  /** 组织ID */
  orgId: string
  /**
   * 开始日期，闭区间，格式：YYYYMMDD。如果是查询BalanceSheet这种某一天的报表，则不需要传。
   * @format date-time
   */
  startDate?: string
  yyyymmddendDate?: string
  yyyymmddstartDate?: string
  yyyymmendDate?: string
}

/** QueryVoucherChasingRequest */
export interface QueryVoucherChasingRequest {
  /**
   * Chasing Context问题类型
   * @example "ChasingQuestionTypeEnum"
   */
  chasingQuestionType: string
  /** 组织id */
  orgId: string
  /** Chasing的凭证ID */
  voucherId: string
}

/**
 * ReconRecordCountInfo
 * 对账记录统计信息
 */
export interface ReconRecordCountInfo {
  /**
   * AskingClient的数量
   * @format int64
   */
  askingClientCount?: number
  /**
   * Xero同步Done的数量
   * @format int64
   */
  exportedCount?: number
  /**
   * Xero同步Exporting的数量
   * @format int64
   */
  exportingCount?: number
  /**
   * 处理中的数量
   * @format int64
   */
  processingCount?: number
  /**
   * To Review的数量
   * @format int64
   */
  toReviewCount?: number
}

/**
 * ReconRecordCountQueryRequest
 * 对账记录统计信息查询
 */
export interface ReconRecordCountQueryRequest {
  /**
   * 银行流水起始时间
   * @format date-time
   */
  bankStatementLineFromDate?: string
  /**
   * 银行流水截止时间
   * @format date-time
   */
  bankStatementLineToDate?: string
  /** 对手方联系人ID */
  contactId?: string
  /** 银行流水最大金额 */
  maxAmount?: MoneyInfo
  /** 银行流水最小金额 */
  minAmount?: MoneyInfo
  /** 组织id */
  orgId: string
}

/**
 * ReconRecordInfo
 * 对账记录,手动对账记录+自动对账记录
 */
export interface ReconRecordInfo {
  /** 对账关联的科目信息 */
  accountInfo?: AccountInfo
  /** 银行流水id，非空 */
  bankStatementLineId: string
  /** 银行流水 */
  bankStatementLineInfo?: BankStatementLineInfo
  /** 对手方联系人id */
  counterPartyContactId?: string
  /** 对手方联系人信息 */
  counterPartyContactInfo?: ContactInfo
  /** 匹配的Ocr业务凭证信息 */
  ocrVoucherInfo?: OcrVoucherInfo
  /** 组织id，非空 */
  orgId: string
  /**
   * 对账记录集合展示状态
   * @example "ReconRecordCategoryShowStatusEnum"
   */
  reconRecordCategoryShowStatus?: string
  /** 对账id，非空 */
  reconRecordId: string
  /**
   * 对账记录展示状态
   * @example "ReconRecordShowStatusEnum"
   */
  reconRecordShowStatus?: string
  /**
   * 对账类型，非空
   * @example "ReconRecordTypeEnum"
   */
  reconRecordType: string
  /** 对手方联系人的相关背景信息 */
  relatedContactInfo?: RelatedContactInfo
  /** 对账关联的税率信息 */
  taxRateInfo?: TaxRateInfo
  /** 系统对账，关联的试算对账记录 */
  trialReconRecordInfo?: TrialReconRecordInfo
  /** 匹配的业务凭证id */
  voucherId?: string
}

/**
 * ReconRecordPageQueryRequest
 * 分页查询对账记录信息
 */
export interface ReconRecordPageQueryRequest {
  /**
   * 银行流水起始时间
   * @format date-time
   */
  bankStatementLineFromDate?: string
  /**
   * 银行流水截止时间
   * @format date-time
   */
  bankStatementLineToDate?: string
  /** 对手方联系人ID */
  contactId?: string
  /** 银行流水最大金额 */
  maxAmount?: MoneyInfo
  /** @format int64 */
  maxCent?: number
  /** @format date-time */
  maxDate?: string
  maxIndex?: string
  /** 银行流水最小金额 */
  minAmount?: MoneyInfo
  minIndex?: string
  orderType?: string
  /** 组织id */
  orgId: string
  /**
   * 分页查询，查询的页数，从0开始
   * @format int64
   */
  page?: number
  /**
   * 分页查询，每次查询的条数
   * @format int64
   */
  pageSize: number
  /**
   * 对账记录大类状态
   * @example "ReconRecordCategoryShowStatusEnum"
   */
  reconRecordCategoryShowStatus: string
}

/**
 * ReconVoucherDetailInfo
 * 对账记录中使用的业务凭证信息
 */
export interface ReconVoucherDetailInfo {
  /** 对账金额，因为支持部分对账，所以需要一个独立的金额字段 */
  reconAmount: MoneyInfo
  /** 凭证信息 */
  voucherInfo: VoucherInfo
}

/**
 * RelatedContactInfo
 * 基于银行流水或者业务单据搜索的对手方信息
 */
export interface RelatedContactInfo {
  /** 联系人在UK Company House的行业信息 */
  companyHouseIndustry?: string
  /** 联系人地址 */
  contactAddress: string
  /** 联系人id，不是ContactInfo的contactId */
  contactId: string
  /** 联系人名称 */
  contactName: string
  /** 组织id */
  orgId: string
  /** 联系人搜索的行业信息 */
  searchIndustry?: string
  /** 联系人搜索的概括信息。 */
  searchProfile?: string
  /** 联系人类型 */
  type: string
}

/**
 * ReplyChasingRequest
 * 回复Chasing的请求
 */
export interface ReplyChasingRequest {
  /** chasing记录ID */
  chasingRecordId: string
  /** 客户回复的答案 */
  clientAnswer: string
  /** 客户回复的附件媒体ID列表 */
  clientAnswerAttachmentMediumIds?: string[]
}

/**
 * RequestIdRequest
 * RequestIdRequest，通常用于查询场景
 */
export interface RequestIdRequest {
  /** 幂等id */
  requestId: string
}

/** SendOtpRequest */
export interface SendOtpRequest {
  email?: string
  requestId?: string
}

/**
 * StripeCheckoutSessionInfo
 * Stripe 授权结果
 */
export interface StripeCheckoutSessionInfo {
  requestId?: string
  /**
   * 授权状态
   * @example "StripeCheckoutStatusEnum"
   */
  status?: 'COMPLETE' | 'EXPIRED' | 'FAILED' | 'PROCESSING'
}

/**
 * SystemParamSetRequest
 * 系统参数更新请求
 */
export interface SystemParamSetRequest {
  /**
   * 系统参数KEY
   * @example "SystemParamKeyEnum"
   */
  key: string
  /** 系统参数VALUE */
  value: string
}

/**
 * TableReportCellInfo
 * 通用的表格式报表的单元格信息
 */
export interface TableReportCellInfo {
  /** 单元格值，金额 */
  cellValueMoneyInfo?: MoneyInfo
  /**
   * 单元格值，百分比
   * @format double
   */
  cellValuePercentage?: number
  /** 单元格值，文本 */
  cellValueText?: string
  /**
   * 单元格值类型，比如Text、MoneyInfo还是百分比
   * @example "TableReportCellValueTypeEnum"
   */
  cellValueType?: 'AMOUNT' | 'PERCENTAGE' | 'TEXT'
  /**
   * 单元格元数据
   * @example "TableReportCellMetaDataTypeEnum"
   */
  metaData?: Record<string, string>
}

/**
 * TableReportInfo
 * 通用的表格式报表信息
 */
export interface TableReportInfo {
  /** 报表行信息列表 */
  tableReportRowInfos?: TableReportRowInfo[]
}

/**
 * TableReportRowInfo
 * 通用的表格式报表的行信息
 */
export interface TableReportRowInfo {
  /** 当前行的单元格信息列表 */
  cells?: TableReportCellInfo[]
  /** 子行信息列表 */
  childrenRows?: TableReportRowInfo[]
  /**
   * 是否叶子行
   * @example false
   */
  leafRow: boolean
  /**
   * 是否合计行
   * @example false
   */
  totalRow: boolean
}

/**
 * TaskNotificationInfo
 * 任务通知信息
 */
export interface TaskNotificationInfo {
  /** 任务通知内容 */
  content: string
  /** 任务通知ID */
  notificationId: string
  /**
   * 任务类型
   * @example "OrgTaskTypeEnum"
   */
  orgTaskType: string
  /** 任务通知Title */
  title: string
}

/**
 * TaxRateInfo
 * 税率
 */
export interface TaxRateInfo {
  /** 会计软件授权id */
  accountingAuthRecordId?: string
  /** 会计软件侧的编码 */
  accountingTaxCode?: string
  /**
   * 是否可应用于资产类科目
   * @example false
   */
  canApplyToAssets?: boolean
  /**
   * 是否可应用于权益类科目
   * @example false
   */
  canApplyToEquity?: boolean
  /**
   * 是否可应用于费用类科目
   * @example false
   */
  canApplyToExpenses?: boolean
  /**
   * 是否可应用于负债类科目
   * @example false
   */
  canApplyToLiabilities?: boolean
  /**
   * 是否可应用于收入类科目
   * @example false
   */
  canApplyToRevenue?: boolean
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 展示名称 */
  displayName?: string
  /** 显示税率 */
  displayTaxRate?: string
  /** 实际税率 */
  effectiveTaxRate?: string
  /**
   * 修改时间
   * @format date-time
   */
  modifyTime?: string
  /** 组织id */
  orgId?: string
  /** 税信息的来源 */
  source?: string
  /** 状态 */
  status?: string
  /** Pai的税率id */
  taxRateId?: string
}

/**
 * TaxRateQueryRequest
 * 税率查询请求
 */
export interface TaxRateQueryRequest {
  /** 组织id */
  orgId: string
}

/** TrialReconRecordDetailInfo */
export interface TrialReconRecordDetailInfo {
  /** 金额匹配原因 */
  amountMatchReason?: string
  /**
   * 金额匹配分数
   * @format float
   */
  amountMatchScore?: number
  /** 银行流水ID */
  bankStatementLineId?: string
  /** 联系人匹配原因 */
  contactMatchReason?: string
  /**
   * 联系人匹配分数
   * @format float
   */
  contactMatchScore?: number
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /** 试算匹配的业务单据凭证明细ID */
  detailId?: string
  /** 资金描述匹配原因 */
  fundDescMatchReason?: string
  /**
   * 资金描述匹配分数
   * @format float
   */
  fundDescMatchScore?: number
  /**
   * 匹配总分数
   * @format float
   */
  matchTotalScore?: number
  /**
   * 修改时间
   * @format date-time
   */
  modifyTime?: string
  /** 组织ID */
  orgId?: string
  /** 对账金额 */
  reconAmount?: MoneyInfo
  /** 银行流水参考匹配原因 */
  referenceMatchReason?: string
  /**
   * 银行流水参考匹配分数
   * @format float
   */
  referenceMatchScore?: number
  /**
   * 状态枚举
   * @example "TrialReconRecordDetailStatusEnum"
   */
  status?: string
  /** 关联的试算对账记录ID */
  trialReconRecordId?: string
  /** 业务单据ID */
  voucherId?: string
}

/**
 * TrialReconRecordInfo
 * 试算对账记录
 */
export interface TrialReconRecordInfo {
  /** 银行流水ID */
  bankStatementLineId: string
  /** 严格匹配的业务单据信息 */
  certainReconRecordDetail?: TrialReconRecordDetailInfo
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string
  /**
   * 修改时间
   * @format date-time
   */
  modifyTime?: string
  /** 组织ID */
  orgId: string
  /** 所属的ReconRecord的recordId */
  reconRecordId: string
  /** 试算对账记录ID */
  recordId?: string
  /**
   * 试算对账状态枚举
   * @example "TrialReconRecordStatusEnum"
   */
  status: string
  /** 模糊匹配的业务单据信息 */
  uncertainReconRecordDetails?: TrialReconRecordDetailInfo[]
}

/**
 * UnCertainMatchBankStatementLinesQueryRequest
 * 查询和业务单据模糊匹配的银行流水查询请求
 */
export interface UnCertainMatchBankStatementLinesQueryRequest {
  /** 业务单据id */
  voucherId: string
}

/**
 * UnMatchBankStatementLinesPageQueryRequest
 * 查询和业务单据未匹配的银行流水查询请求
 */
export interface UnMatchBankStatementLinesPageQueryRequest {
  /** @format int64 */
  maxCent?: number
  /** @format date-time */
  maxDate?: string
  maxIndex?: string
  minIndex?: string
  orderType?: string
  /**
   * 分页查询，查询的页数，从0开始
   * @format int64
   */
  page?: number
  /**
   * 分页查询，每次查询的条数
   * @format int64
   */
  pageSize: number
  /** 业务单据id */
  voucherId: string
}

/**
 * UnMatchedVoucherPageQueryRequest
 * 分页查询请求
 */
export interface UnMatchedVoucherPageQueryRequest {
  /** @format int64 */
  maxCent?: number
  /** @format date-time */
  maxDate?: string
  maxIndex?: string
  minIndex?: string
  orderType?: string
  /** 组织id */
  orgId: string
  /**
   * 分页查询，查询的页数，从0开始
   * @format int64
   */
  page?: number
  /**
   * 分页查询，每次查询的条数
   * @format int64
   */
  pageSize: number
}

/**
 * UnauthorizedUserToOrgRequest
 * 解除用户与组织的授权请求
 */
export interface UnauthorizedUserToOrgRequest {
  /** 用户登录号 */
  loginId: string
  /** 组织id */
  orgId: string
  /**
   * 用户角色列表
   * @example "UserRoleEnum"
   */
  userRoleList: string[]
}

/**
 * UserInfo
 * 用户信息
 */
export interface UserInfo {
  /** 用户邮箱 */
  email: string
  /** 用户名称 */
  name: string
  /** userId */
  userId: string
}

/**
 * UserLoginWithGoogleRequest
 * 用户使用Google SSO快速登录请求
 */
export interface UserLoginWithGoogleRequest {
  /** google返回的token信息 */
  googleIdToken: string
  /** 操作请求号 */
  requestId: string
}

/**
 * UserLoginWithOtpRequest
 * 用户OTP登录请求
 */
export interface UserLoginWithOtpRequest {
  /** 用户登录号 */
  loginId: string
  /** 请求生成并发送OTP的请求ID */
  otpRequestId: string
  /** OTP验证码 */
  otpValue: string
}

/**
 * UserLoginWithPwdRequest
 * 用户账密登录请求
 */
export interface UserLoginWithPwdRequest {
  /** 用户登录号 */
  loginId: string
  /** 用户登录密码 */
  loginPassword: string
}

/** View */
export interface View {
  contentType?: string
}

/**
 * VoucherCreateByMediumRequest
 * 通过媒体创建业务凭据请求
 */
export interface VoucherCreateByMediumRequest {
  /**
   * 附件上传方式
   * @example "AttachmentUploadMethodEnum"
   */
  attachmentUploadMethod: string
  /**
   * 附件上传场景
   * @example "AttachmentUploadSceneEnum"
   */
  attachmentUploadScene: string
  /** 媒体注册请求 */
  mediumRegisterRequest: MediumRegisterRequest
  /** 组织ID */
  orgId: string
}

/**
 * VoucherIdRequest
 * 扭转业务凭据无效
 */
export interface VoucherIdRequest {
  /** 组织ID */
  orgId: string
  /** 业务凭证ID */
  voucherId: string
}

/** VoucherInfo */
export interface VoucherInfo {
  baseVoucherInfo?: BaseVoucherInfo
  /** 业务凭证 */
  businessVoucherInfo?: BusinessVoucherInfo
  /** 资金凭证 */
  fundVoucherInfo?: FundVoucherInfo
  /** OCR业务凭证 */
  ocrVoucherInfo?: OcrVoucherInfo
}

/**
 * VoucherMatchStatementLineRequest
 * 凭证匹配流水请求
 */
export interface VoucherMatchStatementLineRequest {
  /**
   * 附件上传方式
   * @example "AttachmentUploadMethodEnum"
   */
  attachmentUploadMethod: string
  /**
   * 附件上传场景
   * @example "AttachmentUploadSceneEnum"
   */
  attachmentUploadScene: string
  /** 媒体注册请求 */
  mediumRegisterRequest: MediumRegisterRequest
  /** 组织id */
  orgId: string
  /** 流水id */
  statementLineId: string
}

/**
 * VoucherModifyRequest
 * 修改业务凭据请求
 */
export interface VoucherModifyRequest {
  /** 银行账户ID, 用于Receipt。如果是receipt，必传 */
  bankAccountId?: string
  /** 对手方联系人ID */
  contactId?: string
  /**
   * 凭证文档类型
   * @example "DocumentTypeEnum"
   */
  documentType?: string
  /**
   * Invoice支付截止时间
   * @format date-time
   */
  dueDate?: string
  /**
   * Receipt资金发生时间
   * @format date-time
   */
  fundDate?: string
  /**
   * Invoice生效时间
   * @format date-time
   */
  issueDate?: string
  /**
   * 每个item中的itemAmount是否含税
   * @example "ItemAmountTypeEnum"
   */
  itemAmountType?: string
  /** 交付物信息重置请求 */
  itemInfos?: ItemInfo[]
  /**
   * 用户是否选择Multiple Items的标记
   * @example false
   */
  multipleItemsFlag?: boolean
  /** 组织ID */
  orgId: string
  /** Single Item传入的会计科目ID */
  singleItemCategoryId?: string
  /** Single Item传入的税率ID */
  singleItemTaxRateId?: string
  /** 税前总金额 */
  subtotalAmount?: MoneyInfo
  /** 总金额 */
  totalAmount?: MoneyInfo
  /** 税金总额 */
  vatAmount?: MoneyInfo
  /** 业务凭证ID */
  voucherId: string
  /** invoice no / credit note no / etc */
  voucherNo?: string
}

/**
 * VoucherPageQueryRequest
 * 分页查询请求
 */
export interface VoucherPageQueryRequest {
  /** 联系人名称 */
  contactName?: string
  /**
   * 凭证类型集合
   * @example "DocumentTypeEnum"
   */
  documentType?: string
  /** @format int64 */
  maxCent?: number
  /** @format date-time */
  maxDate?: string
  maxIndex?: string
  minIndex?: string
  orderType?: string
  /** 组织id */
  orgId: string
  /**
   * 分页查询，查询的页数，从0开始
   * @format int64
   */
  page?: number
  /**
   * 分页查询，每次查询的条数
   * @format int64
   */
  pageSize: number
  /** 搜索关键字 */
  searchKeyWord?: string
  /** 凭证状态集合，得结合OcrVoucherStatusEnum, BusinessVoucherStatusEnum, FundVoucherStatusEnum */
  voucherStatusList?: string[]
}

/** VoucherQueryRequest */
export interface VoucherQueryRequest {
  /** 组织id */
  orgId: string
  /** 业务单据ID */
  voucherId: string
}
