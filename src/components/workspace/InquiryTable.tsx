import Link from 'next/link';
import { WORKSPACE_EMPTY_TEXT } from '@/constants/workspace';
import type { InquiryRecord } from '@/constants/workspace';
import { InquiryStatusTag } from './InquiryStatusTag';
import { workspaceStyles } from './styles';

type InquiryTableProps = {
  items: readonly InquiryRecord[];
};

const canEnterFulfillment = (status: InquiryRecord['status']) => {
  return status === '已报价' || status === '待确认';
};

export function InquiryTable({ items }: InquiryTableProps) {
  return (
    <section className={workspaceStyles.tableCard}>
      <div className={workspaceStyles.tableWrap}>
        <table className={workspaceStyles.table}>
          <thead>
            <tr>
              <th>关联资源</th>
              <th>发起主体</th>
              <th>对接主体</th>
              <th>地区</th>
              <th>报价方式/区间</th>
              <th>最近更新时间</th>
              <th>当前状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <p className="font-medium text-neutral-900">{item.resourceName}</p>
                  <p className="mt-1 text-sm text-neutral-500">编号：{item.id}</p>
                  <p className="mt-1 text-sm text-neutral-500">编号：{item.id}</p>
main
                </td>
                <td>{item.initiator}</td>
                <td>{item.counterparty}</td>
                <td>{item.region}</td>
                <td>{item.quoteRange}</td>
                <td>{item.updatedAt}</td>
                <td>
                  <InquiryStatusTag status={item.status} />
                </td>
                <td>
                  <div className={workspaceStyles.rowActions}>
                    {canEnterFulfillment(item.status) ? (
                      <Link className={workspaceStyles.inlineAction} href={`/fulfillment?inquiryId=${item.id}`}>
                        进入履约
                      </Link>
                    ) : (
                      <span className="text-sm text-neutral-500">待报价确认后可进入履约</span>
                      <span className="text-sm text-neutral-500">待报价确认后可进入履约</span>
main
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {items.length === 0 ? <p className={workspaceStyles.tableEmpty}>{WORKSPACE_EMPTY_TEXT.filtered}</p> : null}
    </section>
  );
}
