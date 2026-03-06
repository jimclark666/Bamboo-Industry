'use client';

import { useMemo, useState } from 'react';
import { DashboardSection } from '@/components/workspace/DashboardSection';
import { DetailPanel } from '@/components/workspace/DetailPanel';
import { FilterBar } from '@/components/workspace/FilterBar';
import { ResourceTable } from '@/components/workspace/ResourceTable';
import { WorkspacePageHeader } from '@/components/workspace/WorkspacePageHeader';
import {
  RESOURCE_COLLAB_ITEMS,
  RESOURCE_COLLAB_NOTES,
  RESOURCE_REGION_OPTIONS,
  RESOURCE_STATUS_OPTIONS,
  RESOURCE_TYPE_OPTIONS,
  type ResourceItem
} from '@/constants/workspace';
import { workspaceStyles } from '@/components/workspace/styles';

const PAGE_ACTIONS = [
  { label: '新建资源', tone: 'primary' },
  { label: '导出列表', tone: 'secondary' },
  { label: '查看规则', tone: 'secondary' }
] as const;

export default function ResourceCollabPage() {
  const [keyword, setKeyword] = useState('');
  const [region, setRegion] = useState('全部地区');
  const [resourceType, setResourceType] = useState('全部类型');
  const [status, setStatus] = useState('全部状态');
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  const filteredResources = useMemo(() => {
    return RESOURCE_COLLAB_ITEMS.filter((item) => {
      const matchedKeyword =
        keyword.trim().length === 0 || item.name.includes(keyword.trim()) || item.supplier.includes(keyword.trim());
      const matchedRegion = region === '全部地区' || item.region === region;
      const matchedType = resourceType === '全部类型' || item.type === resourceType;
      const matchedStatus = status === '全部状态' || item.status === status;

      return matchedKeyword && matchedRegion && matchedType && matchedStatus;
    });
  }, [keyword, region, resourceType, status]);

  return (
    <>
      <div className="grid gap-4">
        <WorkspacePageHeader
          actions={PAGE_ACTIONS}
          description="集中管理竹产业协作资源，支持资源发布、状态追踪与协同入口统一管理。"
          title="资源协同管理"
        />

        <FilterBar
          keyword={keyword}
          onKeywordChange={setKeyword}
          onRegionChange={setRegion}
          onStatusChange={setStatus}
          onTypeChange={setResourceType}
          region={region}
          regionOptions={RESOURCE_REGION_OPTIONS}
          status={status}
          statusOptions={RESOURCE_STATUS_OPTIONS}
          type={resourceType}
          typeOptions={RESOURCE_TYPE_OPTIONS}
        />

        <ResourceTable items={filteredResources} onPreviewDetail={setSelectedResource} />

        <DashboardSection description="协同前请确认资源状态、主体信息与规则口径，确保后续询价与履约记录可追溯。" title="协同说明">
          <ul className={workspaceStyles.list}>
            {RESOURCE_COLLAB_NOTES.map((note) => (
              <li className={workspaceStyles.listItem} key={note}>
                {note}
              </li>
            ))}
          </ul>
        </DashboardSection>
      </div>

      <DetailPanel
        description={selectedResource ? `资源编号：${selectedResource.id}` : ''}
        onClose={() => setSelectedResource(null)}
        open={Boolean(selectedResource)}
        title={selectedResource ? selectedResource.name : ''}
      >
        {selectedResource && (
          <>
            <div className={workspaceStyles.detailItem}>
              <p className={workspaceStyles.detailKey}>资源类型</p>
              <p className={workspaceStyles.detailValue}>{selectedResource.type}</p>
            </div>
            <div className={workspaceStyles.detailItem}>
              <p className={workspaceStyles.detailKey}>所在地区</p>
              <p className={workspaceStyles.detailValue}>{selectedResource.region}</p>
            </div>
            <div className={workspaceStyles.detailItem}>
              <p className={workspaceStyles.detailKey}>供应主体</p>
              <p className={workspaceStyles.detailValue}>{selectedResource.supplier}</p>
            </div>
            <div className={workspaceStyles.detailItem}>
              <p className={workspaceStyles.detailKey}>可用数量/规模</p>
              <p className={workspaceStyles.detailValue}>{selectedResource.scale}</p>
            </div>
            <div className={workspaceStyles.detailItem}>
              <p className={workspaceStyles.detailKey}>最近更新时间</p>
              <p className={workspaceStyles.detailValue}>{selectedResource.updatedAt}</p>
            </div>
          </>
        )}
      </DetailPanel>
    </>
  );
}
