export enum ReconCenterApiEnum {
  /**
  预测科目和税率
  @request: AccountPredictRequest
  @response: GenericResponsePredictAccountInfo
  */
  AccountPredictAccountAndTaxRate = '/account/predictAccountAndTaxRate',

  /**
  查询组织的所有科目
  @request: AccountQueryRequest
  @response: GenericResponseListAccountInfo
  */
  AccountQueryAll = '/account/queryAll',

  /**
  通过服务端RSA密钥KEY，获取服务端AES密钥值
  @request: AesKeyFetchRequest
  @response: GenericResponseApiDataEncryptConfigRecordInfo
  */
  ApiDataEncryptFetchServerAesKey = '/apiDataEncrypt/fetchServerAesKey',

  /**
  获取服务端RSA公钥值
  @request: undefined
  @response: GenericResponseApiDataEncryptConfigRecordInfo
  */
  ApiDataEncryptFetchServerRsaPublicKey = '/apiDataEncrypt/fetchServerRsaPublicKey',

  /**
  通过AesKeyId直接获取服务端AES密钥值
  @request: AesKeyQueryRequest
  @response: GenericResponseApiDataEncryptConfigRecordInfo
  */
  ApiDataEncryptQueryServerAesKeyByAesKeyId = '/apiDataEncrypt/queryServerAesKeyByAesKeyId',

  /**
  授权用户访问组织
  @request: AuthorizeUserToOrgRequest
  @response: BaseResponse
  */
  AuthAuthorizeUserToOrg = '/auth/authorizeUserToOrg',

  /**
  查询可以访问组织的所有用户以及对应的角色列表
  @request: QueryAuthUserRequest
  @response: GenericResponseListAuthUserInfo
  */
  AuthQueryAuthUserList = '/auth/queryAuthUserList',

  /**
  重置授权用户访问组织的角色列表
  @request: AuthorizeUserToOrgRequest
  @response: BaseResponse
  */
  AuthResetAuthorizeUserToOrg = '/auth/resetAuthorizeUserToOrg',

  /**
  解除授权用户访问组织
  @request: UnauthorizedUserToOrgRequest
  @response: BaseResponse
  */
  AuthUnauthorizedUserToOrg = '/auth/unauthorizedUserToOrg',

  /**
  获取媒体临时上传URL
  @request: MediumUploadUrlFetchRequest
  @response: GenericResponseMediumUploadUrlInfo
  */
  AwsFetchMediumUploadUrl = '/aws/fetchMediumUploadUrl',

  /**
  申请银行流水的Chasing
  @request: ApplyBankStatementLineChasingRequest
  @response: GenericResponseChasingRecordInfo
  */
  ChasingApplyBankStatementLineChasing = '/chasing/applyBankStatementLineChasing',

  /**
  申请开放性问题的Chasing
  @request: ApplyGeneralQuestionChasingRequest
  @response: GenericResponseChasingRecordInfo
  */
  ChasingApplyGeneralQuestionChasing = '/chasing/applyGeneralQuestionChasing',

  /**
  申请凭证的Chasing
  @request: ApplyVoucherChasingRequest
  @response: GenericResponseChasingRecordInfo
  */
  ChasingApplyVoucherChasing = '/chasing/applyVoucherChasing',

  /**
  取消客户Chasing
  @request: CancelChasingRecordRequest
  @response: BaseResponse
  */
  ChasingCancelChasingRecord = '/chasing/cancelChasingRecord',

  /**
  客户标识流水无凭证
  @request: ClientMarkStatementLinesAsNoDocumentRequest
  @response: BaseResponse
  */
  ChasingClientMarkStatementLinesAsNoDocument = '/chasing/clientMarkStatementLinesAsNoDocument',

  /**
  客户给具体一笔流水上传凭证
  @request: ClientMatchStatementLineWithVoucherRequest
  @response: GenericResponseChasingRecordInfo
  */
  ChasingClientMatchStatementLineWithVoucher = '/chasing/clientMatchStatementLineWithVoucher',

  /**
  Bookkeeper批量confirm Chasing记录
  @request: BatchConfirmChasingRequest
  @response: GenericResponseListChasingRecordInfo
  */
  ChasingConfirmChasingRecords = '/chasing/confirmChasingRecords',

  /**
  计数组织的Chasing记录
  @request: QueryChasingRecordRequest
  @response: GenericResponseLong
  */
  ChasingCountChasingRecords = '/chasing/countChasingRecords',

  /**
  创建并申请开放性问题的Chasing
  @request: CreateAndApplyGeneralQuestionChasingRequest
  @response: GenericResponseChasingRecordInfo
  */
  ChasingCreateAndApplyGeneralQuestionChasing = '/chasing/createAndApplyGeneralQuestionChasing',

  /**
  Client端-分页查询该Chasing对象的历史记录消息-按照时间升序排列
  @request: HistoryChasingRecordPageQueryRequest
  @response: GenericResponseGenericPageQueryResultListChasingRecordMessageInfo
  */
  ChasingPageQueryHistoryChasingRecordMessages = '/chasing/pageQueryHistoryChasingRecordMessages',

  /**
  申请银行流水的Chasing信息
  @request: QueryBankStatementLineChasingRequest
  @response: GenericResponseChasingRecordInfo
  */
  ChasingQueryBankStatementLineChasing = '/chasing/queryBankStatementLineChasing',

  /**
  Client端-查询所有银行流水Chasing for Context的记录
  @request: QueryChasingContextListRequest
  @response: GenericResponseListChasingRecordInfo
  */
  ChasingQueryBankStatementLineChasingForContextRecords = '/chasing/queryBankStatementLineChasingForContextRecords',

  /**
  Client端-查询所有银行流水Chasing for Voucher的记录
  @request: QueryChasingListRequest
  @response: GenericResponseListChasingRecordInfo
  */
  ChasingQueryBankStatementLineChasingForVoucherRecords = '/chasing/queryBankStatementLineChasingForVoucherRecords',

  /**
  BKP端-查询所有银行流水Chasing记录
  @request: QueryChasingListRequest
  @response: GenericResponseListChasingRecordInfo
  */
  ChasingQueryBankStatementLineChasingRecords = '/chasing/queryBankStatementLineChasingRecords',

  /**
  查询组织的Chasing记录
  @request: QueryChasingRecordRequest
  @response: GenericResponseListChasingRecordInfo
  */
  ChasingQueryChasingRecords = '/chasing/queryChasingRecords',

  /**
  查询凭证的Chasing信息
  @request: QueryVoucherChasingRequest
  @response: GenericResponseChasingRecordInfo
  */
  ChasingQueryVoucherChasing = '/chasing/queryVoucherChasing',

  /**
  Client端-查询所有凭证的Chasing for Context的记录
  @request: QueryChasingContextListRequest
  @response: GenericResponseListChasingRecordInfo
  */
  ChasingQueryVoucherChasingForContextRecords = '/chasing/queryVoucherChasingForContextRecords',

  /**
  批量回复Chasing记录
  @request: BatchReplyChasingRequest
  @response: GenericResponseListChasingRecordInfo
  */
  ChasingReplyChasingRecords = '/chasing/replyChasingRecords',

  /**
  undefined
  @request: undefined
  @response: BaseResponse
  */
  NotifyClickupWebhooks = '/notify/clickup/webhooks',

  /**
  获取媒体临时上传URL
  @request: MediumUploadUrlFetchRequest
  @response: GenericResponseMediumUploadUrlInfo
  */
  ClientAwsFetchMediumUploadUrl = '/client/aws/fetchMediumUploadUrl',

  /**
  客户给具体一笔流水上传凭证
  @request: VoucherMatchStatementLineRequest
  @response: GenericResponseManualReconRecordInfo
  */
  ClientBankStatementLineClientMatchStatementLine = '/client/bankStatementLine/clientMatchStatementLine',

  /**
  通过用户上传的文件摘要信息，查询对应的文件对象
  @request: FileQueryRequest
  @response: GenericResponseFileInfo
  */
  ClientMediumQueryFile = '/client/medium/queryFile',

  /**
  通过用户上传的图片摘要信息，查询对应的图片对象
  @request: ImageQueryRequest
  @response: GenericResponseImageInfo
  */
  ClientMediumQueryImage = '/client/medium/queryImage',

  /**
  使用已通过客户端上传到文件存储上的文件链接，来注册文件对象
  @request: FileRegisterRequest
  @response: GenericResponseFileInfo
  */
  ClientMediumRegisterFile = '/client/medium/registerFile',

  /**
  使用已通过客户端上传到文件存储上的源图片链接，来注册图片对象
  @request: ImageRegisterRequest
  @response: GenericResponseImageInfo
  */
  ClientMediumRegisterImage = '/client/medium/registerImage',

  /**
  获取授权secret
  @request: RequestIdRequest
  @response: GenericResponseString
  */
  ClientStripeCreateCheckoutSessionSecret = '/client/stripe/createCheckoutSessionSecret',

  /**
  获取授权secret
  @request: RequestIdRequest
  @response: GenericResponseStripeCheckoutSessionInfo
  */
  ClientStripeQueryMandateInfo = '/client/stripe/queryMandateInfo',

  /**
  创建联系人
  @request: ContactCreateRequest
  @response: GenericResponseContactInfo
  */
  ContactCreateContact = '/contact/createContact',

  /**
  联系人修改
  @request: ContactModifyRequest
  @response: GenericResponseContactInfo
  */
  ContactModifyContact = '/contact/modifyContact',

  /**
  分页查询联系人
  @request: ContactPageQueryRequest
  @response: GenericResponseGenericPageQueryResultListContactInfo
  */
  ContactPageQueryContacts = '/contact/pageQueryContacts',

  /**
  查询指定日期的资产负债表
  @request: QueryReportRequest
  @response: GenericResponseTableReportInfo
  */
  DashboardQueryBalanceSheet = '/dashboard/queryBalanceSheet',

  /**
  查询指定日期范围、指定科目的对手列表
  @request: QueryReportRequest
  @response: GenericResponseTableReportInfo
  */
  DashboardQueryContactStatistics = '/dashboard/queryContactStatistics',

  /**
  查询看板数据
  @request: QueryReportRequest
  @response: GenericResponseDashboardReportInfo
  */
  DashboardQueryDashboardReport = '/dashboard/queryDashboardReport',

  /**
  查询月末现金余额，Key是月份，value是余额
  @request: QueryReportRequest
  @response: GenericResponseMapDateTimeMoneyInfo
  */
  DashboardQueryMonthEndCashInHands = '/dashboard/queryMonthEndCashInHands',

  /**
  查询月度现金流数据
  @request: QueryReportRequest
  @response: GenericResponseListCashFlowReportInfo
  */
  DashboardQueryMonthlyCashFlowReport = '/dashboard/queryMonthlyCashFlowReport',

  /**
  查询月度数据
  @request: QueryReportRequest
  @response: GenericResponseListProfitAndLossReportInfo
  */
  DashboardQueryMonthlyPALReport = '/dashboard/queryMonthlyPALReport',

  /**
  查询指定日期区间的损益表数据
  @request: QueryReportRequest
  @response: GenericResponseTableReportInfo
  */
  DashboardQueryProfitAndLossReport = '/dashboard/queryProfitAndLossReport',

  /**
  查询成本类top对手方的月环比统计信息
  @request: QueryReportRequest
  @response: GenericResponseMapDateTimeListContactStatisticInfo
  */
  DashboardQueryTopCostOfSalesSuppliers = '/dashboard/queryTopCostOfSalesSuppliers',

  /**
  查询top客户的月环比统计信息
  @request: QueryReportRequest
  @response: GenericResponseMapDateTimeListContactStatisticInfo
  */
  DashboardQueryTopRevenueCustomers = '/dashboard/queryTopRevenueCustomers',

  /**
  hello world
  @request: undefined
  @response: GenericResponseString
  */
  DemoHelloWorld = '/demo/helloWorld',

  /**
  查询汇率
  @request: QueryExchangeRateRequest
  @response: GenericResponseExchangeRateInfo
  */
  ExchangeRateQueryExchangeRate = '/exchangeRate/queryExchangeRate',

  /**
  查询组织的所有科目
  @request: AccountQueryRequest
  @response: GenericResponseListAccountInfo
  */
  InnerAccountQueryAll = '/inner/account/queryAll',

  /**
  分页查询联系人
  @request: ContactPageQueryRequest
  @response: GenericResponseGenericPageQueryResultListContactInfo
  */
  InnerContactPageQueryContacts = '/inner/contact/pageQueryContacts',

  /**
  查询汇率
  @request: QueryExchangeRateRequest
  @response: GenericResponseExchangeRateInfo
  */
  InnerExchangeRateQueryExchangeRate = '/inner/exchangeRate/queryExchangeRate',

  /**
  查询组织
  @request: OrgIdRequest
  @response: GenericResponseOrganizationInfo
  */
  InnerOrgQueryOrg = '/inner/org/queryOrg',

  /**
  Pinvo英国公司专用创建凭证的服务
  @request: PinvoSyncVoucherRequest
  @response: BaseResponse
  */
  InnerPinvoioVoucherCreatePinvoInvoice = '/inner/pinvoio/voucher/createPinvoInvoice',

  /**
  删除Pinvo凭证的服务
  @request: PinvoRemoveVoucherRequest
  @response: BaseResponse
  */
  InnerPinvoioVoucherRemoveInvoice = '/inner/pinvoio/voucher/removeInvoice',

  /**
  同步Pinvo凭证的服务
  @request: PinvoSyncVoucherRequest
  @response: BaseResponse
  */
  InnerPinvoioVoucherSyncInvoice = '/inner/pinvoio/voucher/syncInvoice',

  /**
  通过会计软件登录
  @request: GetAccountingAuthUrlRequest
  @response: GenericResponseAccountingAuthRecordInfo
  */
  LoginAccountingSignIn = '/login/accountingSignIn',

  /**
  通过会计软件注册
  @request: GetAccountingAuthUrlRequest
  @response: GenericResponseAccountingAuthRecordInfo
  */
  LoginAccountingSignUp = '/login/accountingSignUp',

  /**
  Google SSO登录，同时也信任登录Pinvo.io
  @request: UserLoginWithGoogleRequest
  @response: GenericResponseLoginInfo
  */
  LoginLoginWithGoogle = '/login/loginWithGoogle',

  /**
  Otp登录，同时也信任登录Pinvo.io
  @request: UserLoginWithOtpRequest
  @response: GenericResponseLoginInfo
  */
  LoginLoginWithOtp = '/login/loginWithOtp',

  /**
  账密登录，同时也信任登录Pinvo.io
  @request: UserLoginWithPwdRequest
  @response: GenericResponseLoginInfo
  */
  LoginLoginWithPwd = '/login/loginWithPwd',

  /**
  完成注册登录
  @request: AccountingAllowAccessRequest
  @response: GenericResponseLoginInfo
  */
  LoginProcessAccountingAuthResult = '/login/processAccountingAuthResult',

  /**
  生成并发送登录OTP信息
  @request: SendOtpRequest
  @response: BaseResponse
  */
  LoginSendLoginOtp = '/login/sendLoginOtp',

  /**
  通过用户上传的文件摘要信息，查询对应的文件对象
  @request: FileQueryRequest
  @response: GenericResponseFileInfo
  */
  MediumQueryFile = '/medium/queryFile',

  /**
  通过用户上传的图片摘要信息，查询对应的图片对象
  @request: ImageQueryRequest
  @response: GenericResponseImageInfo
  */
  MediumQueryImage = '/medium/queryImage',

  /**
  使用已通过客户端上传到文件存储上的文件链接，来注册文件对象
  @request: FileRegisterRequest
  @response: GenericResponseFileInfo
  */
  MediumRegisterFile = '/medium/registerFile',

  /**
  使用已通过客户端上传到文件存储上的源图片链接，来注册图片对象
  @request: ImageRegisterRequest
  @response: GenericResponseImageInfo
  */
  MediumRegisterImage = '/medium/registerImage',

  /**
  校验Onboarding表单信息
  @request: undefined
  @response: GenericResponseCheckOnboardingFormInfo
  */
  OperationAssistantCheckOnboardingForm = '/operationAssistant/checkOnboardingForm',

  /**
  格式化电话号码
  @request: undefined
  @response: GenericResponseString
  */
  OperationAssistantFormatPhoneNumber = '/operationAssistant/formatPhoneNumber',

  /**
  申请通过OnboardingCallUrl生成Org背景信息
  @request: OrgContextApplyRequest
  @response: GenericResponseOrgContextInfo
  */
  OrgContextApplyGenerateOrgContextByOnboardingCallAudioUrl = '/orgContext/applyGenerateOrgContextByOnboardingCallAudioUrl',

  /**
  查询组织背景信息
  @request: OrgContextQueryRequest
  @response: GenericResponseOrgContextInfo
  */
  OrgContextQuery = '/orgContext/query',

  /**
  保存组织背景信息
  @request: OrgContextSaveRequest
  @response: GenericResponseOrgContextInfo
  */
  OrgContextSave = '/orgContext/save',

  /**
  连接会计软件组织
  @request: GetAccountingAuthUrlRequest
  @response: GenericResponseAccountingAuthRecordInfo
  */
  OrgAddAccountingOrg = '/org/addAccountingOrg',

  /**
  申请同步数据
  @request: ApplySyncAccountingDataRequest
  @response: BaseResponse
  */
  OrgApplySyncData = '/org/applySyncData',

  /**
  断连组织
  @request: OrgIdRequest
  @response: BaseResponse
  */
  OrgDisconnectAccountingOrg = '/org/disconnectAccountingOrg',

  /**
  修改组织
  @request: OrgModifyRequest
  @response: GenericResponseOrganizationInfo
  */
  OrgModifyOrg = '/org/modifyOrg',

  /**
  完成注册登录
  @request: AccountingAllowAccessRequest
  @response: GenericResponseListOrganizationInfo
  */
  OrgProcessAccountingAuthResult = '/org/processAccountingAuthResult',

  /**
  查询组织
  @request: OrgIdRequest
  @response: GenericResponseOrganizationInfo
  */
  OrgQueryOrg = '/org/queryOrg',

  /**
  查询用户管理的连接Xero正常的组织
  @request: undefined
  @response: GenericResponseListOrganizationInfo
  */
  OrgQueryOrgs = '/org/queryOrgs',

  /**
  查询关联的组织列表
  @request: undefined
  @response: GenericResponseListOrganizationInfo
  */
  OrgQueryOrgsAsDirectorRole = '/org/queryOrgsAsDirectorRole',

  /**
  触发同步ClickUp数据
  @request: undefined
  @response: GenericResponseListOrganizationInfo
  */
  OrgUpdateAllOrgsFromClickUp = '/org/updateAllOrgsFromClickUp',

  /**
  扭转任务的状态
  @request: OrgTaskChangeStatusRequest
  @response: BaseResponse
  */
  OrgTaskChangeStatus = '/orgTask/changeStatus',

  /**
  查询组织的任务列表
  @request: OrgTaskQueryRequest
  @response: GenericResponseListOrgTaskInfo
  */
  OrgTaskQueryAllTasks = '/orgTask/queryAllTasks',

  /**
  查询Client的任务通知列表
  @request: OrgTaskQueryRequest
  @response: GenericResponseListTaskNotificationInfo
  */
  OrgTaskQueryTaskNotifications = '/orgTask/queryTaskNotifications',

  /**
  重置组织的任务列表
  @request: OrgTaskResetRequest
  @response: GenericResponseListOrgTaskInfo
  */
  OrgTaskReset = '/orgTask/reset',

  /**
  触发申请重新处理银行流水并重新对账
  @request: ApplyReProcessBankStatementLineRequest
  @response: BaseResponse
  */
  ReconApplyReProcessBankStatementLine = '/recon/applyReProcessBankStatementLine',

  /**
  会计师手工匹配Doc
  @request: ManualMatchVoucherRequest
  @response: BaseResponse
  */
  ReconBookkeeperManualMatchVoucher = '/recon/bookkeeperManualMatchVoucher',

  /**
  确认对账的服务
  @request: ConfirmReconRequest
  @response: BaseResponse
  */
  ReconConfirmRecon = '/recon/confirmRecon',

  /**
  查询不同类型的对账记录数量
  @request: ReconRecordCountQueryRequest
  @response: GenericResponseReconRecordCountInfo
  */
  ReconCountReconRecordInfo = '/recon/countReconRecordInfo',

  /**
  分页查询对账记录
  @request: ReconRecordPageQueryRequest
  @response: GenericResponseGenericPageQueryResultListReconRecordInfo
  */
  ReconPageQueryReconRecordInfo = '/recon/pageQueryReconRecordInfo',

  /**
  分页查询和业务凭证试算未匹配上的资金方向一致的银行流水集合
  @request: UnMatchBankStatementLinesPageQueryRequest
  @response: GenericResponseGenericPageQueryResultListBankStatementLineInfo
  */
  ReconPageQueryUnMatchBankStatementLinesByVoucherId = '/recon/pageQueryUnMatchBankStatementLinesByVoucherId',

  /**
  查询业务凭据模糊匹配上的银行流水集合
  @request: UnCertainMatchBankStatementLinesQueryRequest
  @response: GenericResponseListBankStatementLineInfo
  */
  ReconQueryUnCertainMatchBankStatementLinesByVoucherId = '/recon/queryUnCertainMatchBankStatementLinesByVoucherId',

  /**
  undefined
  @request: undefined
  @response: BaseResponse
  */
  NotifyStripeWebhooks = '/notify/stripe/webhooks',

  /**
  设置系统参数
  @request: SystemParamSetRequest
  @response: BaseResponse
  */
  SystemParamSet = '/systemParam/set',

  /**
  查询组织的所有税率
  @request: TaxRateQueryRequest
  @response: GenericResponseListTaxRateInfo
  */
  TaxRateQueryAll = '/taxRate/queryAll',

  /**
  查询用户信息
  @request: undefined
  @response: GenericResponseUserInfo
  */
  UserQuery = '/user/query',

  /**
  通过媒体创建业务凭据
  @request: VoucherCreateByMediumRequest
  @response: GenericResponseBaseVoucherInfo
  */
  VoucherCreateVoucherByMedium = '/voucher/createVoucherByMedium',

  /**
  扭转业务凭据无效
  @request: VoucherIdRequest
  @response: GenericResponseBaseVoucherInfo
  */
  VoucherInvalidVoucher = '/voucher/invalidVoucher',

  /**
  修改业务凭据详情
  @request: VoucherModifyRequest
  @response: GenericResponseBaseVoucherInfo
  */
  VoucherModifyVoucher = '/voucher/modifyVoucher',

  /**
  分页查询未匹配到的业务凭据
  @request: UnMatchedVoucherPageQueryRequest
  @response: GenericResponseGenericPageQueryResultListBaseVoucherInfo
  */
  VoucherPageQueryUnMatchedVouchers = '/voucher/pageQueryUnMatchedVouchers',

  /**
  分页查询组织的业务凭据
  @request: VoucherPageQueryRequest
  @response: GenericResponseGenericPageQueryResultListBaseVoucherInfo
  */
  VoucherPageQueryVouchers = '/voucher/pageQueryVouchers',

  /**
  查询业务凭据详情
  @request: VoucherQueryRequest
  @response: GenericResponseBaseVoucherInfo
  */
  VoucherQueryVoucher = '/voucher/queryVoucher',

  /**
  同步凭证到会计软件
  @request: VoucherIdRequest
  @response: BaseResponse
  */
  VoucherSyncVoucherToXero = '/voucher/syncVoucherToXero',

  /**
  undefined
  @request: undefined
  @response: BaseResponse
  */
  NotifyXeroWebhooks = '/notify/xero/webhooks',

  /**
  undefined
  @request: undefined
  @response: BaseResponse
  */
  NotifyYapilyAccountAuthCompleted = '/notify/yapily/accountAuthCompleted',
}
