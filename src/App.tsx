import { useState, useEffect, useRef, useCallback } from 'react';
import { Search } from 'lucide-react';
import { PEOPLE, DEPTS, DeptKey, byId } from './data';
import OrgChart from './OrgChart';
import Directory from './Directory';
import PersonDrawer from './PersonDrawer';

type View = 'chart' | 'directory';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

export default function App() {
  const [view, setView] = useState<View>('chart');
  const [query, setQuery] = useState('');
  const [activeDept, setActiveDept] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandTrigger, setExpandTrigger] = useState(0);
  const [collapseTrigger, setCollapseTrigger] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();

  // On mobile always show directory
  const effectiveView: View = isMobile ? 'directory' : view;

  const totalShown = PEOPLE.filter(p => {
    const deptOk = !activeDept || p.dept === activeDept;
    const qOk = !query || (p.name + ' ' + p.title + ' ' + (p.cred || '')).toLowerCase().includes(query);
    return deptOk && qOk;
  }).length;

  const isFiltered = !!(query || activeDept);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const toggleDept = (key: string) => {
    setActiveDept(prev => prev === key ? null : key);
  };

  return (
    <div className="app-root">
      {/* ===== HEADER ===== */}
      <header className="app-header">
        <div className="header-inner">
          {/* Top bar: logo + title */}
          <div className="header-top">
            <img src="/ECR_Logo.svg" alt="ECR" className="header-logo" />
            <div className="header-divider" />
            <div className="header-brand">
              <h1 className="header-title">Team Directory</h1>
              <p className="header-sub">Equitable Commercial Realty &middot; Austin, TX</p>
            </div>
          </div>

          {/* Toolbar */}
          <div className="toolbar">
            {/* Search */}
            <div className="search-wrap">
              <Search size={16} className="search-icon" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search name or title…"
                autoComplete="off"
                value={query}
                onChange={e => setQuery(e.target.value.toLowerCase())}
                className="search-input"
              />
            </div>

            {/* View toggle — hidden on mobile */}
            {!isMobile && (
              <div className="seg" role="tablist">
                <button
                  className={`seg-btn ${view === 'chart' ? 'active' : ''}`}
                  onClick={() => setView('chart')}
                >
                  Chart
                </button>
                <button
                  className={`seg-btn ${view === 'directory' ? 'active' : ''}`}
                  onClick={() => setView('directory')}
                >
                  Directory
                </button>
              </div>
            )}

            {/* Expand / Collapse (chart only, desktop only) */}
            {!isMobile && effectiveView === 'chart' && (
              <>
                <button className="tool-btn" onClick={() => setExpandTrigger(t => t + 1)}>
                  Expand all
                </button>
                <button className="tool-btn" onClick={() => setCollapseTrigger(t => t + 1)}>
                  Collapse all
                </button>
              </>
            )}

            {/* Count */}
            <span className="count-badge">
              {isFiltered ? `${totalShown} of ${PEOPLE.length} people` : `${PEOPLE.length} people`}
            </span>
          </div>

          {/* Dept chips */}
          <div className="chips-row">
            {(Object.entries(DEPTS) as [DeptKey, typeof DEPTS[DeptKey]][]).map(([key, dept]) => (
              <button
                key={key}
                className={`chip ${activeDept === key ? 'active' : ''}`}
                style={{ ['--cc' as string]: dept.color } as React.CSSProperties}
                onClick={() => toggleDept(key)}
              >
                <span className="chip-dot" />
                {dept.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        {effectiveView === 'chart' && (
          <OrgChart
            query={query}
            activeDept={activeDept}
            onSelect={handleSelect}
            expandTrigger={expandTrigger}
            collapseTrigger={collapseTrigger}
          />
        )}
        {effectiveView === 'directory' && (
          <div className="dir-wrap">
            <Directory
              query={query}
              activeDept={activeDept}
              onSelect={handleSelect}
            />
          </div>
        )}
      </main>

      {/* ===== DETAIL DRAWER ===== */}
      <PersonDrawer
        person={selectedId ? byId[selectedId] ?? null : null}
        onClose={() => setSelectedId(null)}
        onSelect={handleSelect}
      />
    </div>
  );
}
