/**
 * @author django
 * @description utils 业务相关的工具包
 */

import { getCurrencySymbol } from '~/shared/currency'
import { bignumber } from '~/shared/math'
import { FileInfo, ImageInfo, MediumInfo, MoneyInfo } from '~/swagger/ReconCenterApiModel'
import { MediumTypeEnum } from '~/swagger/ReconCenterEnums'

export function formatMoney(money?: MoneyInfo, decimalPlaces = 2) {
  if (!money) return getCurrencySymbol('GBP') + bignumber(0).toFormat(decimalPlaces)

  return getCurrencySymbol(money.currency) + bignumber(money.amount).toFormat(decimalPlaces)
}

/**
 * 获取凭证封面图
 * @param mediumInfo
 * @returns
 */
export function getVoucherCoverUrl(mediumInfo?: MediumInfo) {
  if (!mediumInfo) return ''
  switch (mediumInfo.mediumType) {
    case MediumTypeEnum.IMAGE:
      return (mediumInfo as ImageInfo).standardImageUrl
    case MediumTypeEnum.FILE:
      return (mediumInfo as FileInfo).coverImageUrl
    default:
      return ''
  }
}
