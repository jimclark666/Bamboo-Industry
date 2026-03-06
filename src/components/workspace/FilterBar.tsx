import { workspaceStyles } from './styles';

type FilterBarProps = {
  keyword: string;
  onKeywordChange: (value: string) => void;
  region: string;
  onRegionChange: (value: string) => void;
  type: string;
  onTypeChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  regionOptions: readonly string[];
  typeOptions: readonly string[];
  statusOptions: readonly string[];
  keywordLabel?: string;
  keywordPlaceholder?: string;
  regionLabel?: string;
  typeLabel?: string;
  statusLabel?: string;
};

export function FilterBar({
  keyword,
  onKeywordChange,
  region,
  onRegionChange,
  type,
  onTypeChange,
  status,
  onStatusChange,
  regionOptions,
  typeOptions,
  statusOptions,
  keywordLabel = '关键词搜索',
  keywordPlaceholder = '搜索资源名称、供应主体',
  regionLabel = '地区筛选',
  typeLabel = '资源类型',
  statusLabel = '状态筛选'
}: FilterBarProps) {
  return (
    <section className={workspaceStyles.filterCard}>
      <div className={workspaceStyles.filterGrid}>
        <label className={workspaceStyles.filterField}>
          <span className={workspaceStyles.filterLabel}>{keywordLabel}</span>
          <input
            className={workspaceStyles.filterInput}
            onChange={(event) => onKeywordChange(event.target.value)}
            placeholder={keywordPlaceholder}
            type="text"
            value={keyword}
          />
        </label>

        <label className={workspaceStyles.filterField}>
          <span className={workspaceStyles.filterLabel}>{regionLabel}</span>
          <select className={workspaceStyles.filterSelect} onChange={(event) => onRegionChange(event.target.value)} value={region}>
            {regionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className={workspaceStyles.filterField}>
          <span className={workspaceStyles.filterLabel}>{typeLabel}</span>
          <select className={workspaceStyles.filterSelect} onChange={(event) => onTypeChange(event.target.value)} value={type}>
            {typeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className={workspaceStyles.filterField}>
          <span className={workspaceStyles.filterLabel}>{statusLabel}</span>
          <select className={workspaceStyles.filterSelect} onChange={(event) => onStatusChange(event.target.value)} value={status}>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
