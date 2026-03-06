import Link from 'next/link';
import { WORKSPACE_EMPTY_TEXT } from '@/constants/workspace';
import type { ResourceItem } from '@/constants/workspace';
import { workspaceStyles } from './styles';
import { ResourceStatusTag } from './ResourceStatusTag';

type ResourceTableProps = {
  items: readonly ResourceItem[];
  onPreviewDetail: (item: ResourceItem) => void;
};

export function ResourceTable({ items, onPreviewDetail }: ResourceTableProps) {
  return (
    <section className={workspaceStyles.tableCard}>
      <div className={workspaceStyles.tableWrap}>
        <table className={workspaceStyles.table}>
          <thead>
            <tr>
              <th>资源名称</th>
              <th>资源类型</th>
              <th>所在地区</th>
              <th>供应主体</th>
              <th>可用数量/规模</th>
              <th>更新时间</th>
              <th>当前状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <p className="font-medium text-neutral-900">{item.name}</p>
                  <p className="mt-1 text-xs text-neutral-500">编号：{item.id}</p>
                </td>
                <td>{item.type}</td>
                <td>{item.region}</td>
                <td>{item.supplier}</td>
                <td>{item.scale}</td>
                <td>{item.updatedAt}</td>
                <td>
                  <ResourceStatusTag status={item.status} />
                </td>
                <td>
                  <div className={workspaceStyles.rowActions}>
                    <button className={workspaceStyles.inlineAction} onClick={() => onPreviewDetail(item)} type="button">
                      查看详情
                    </button>
                    <Link
                      className={workspaceStyles.inlineAction}
                      href={`/inquiry-quotes?resourceId=${item.id}&resourceName=${encodeURIComponent(item.name)}`}
                    >
                      发起协同
                    </Link>
                    <button className={workspaceStyles.moreAction} type="button">
                      更多操作
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {items.length === 0 && (
        <p className={workspaceStyles.tableEmpty}>{WORKSPACE_EMPTY_TEXT.filtered}</p>
      )}
    </section>
  );
}
