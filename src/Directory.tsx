import { PEOPLE, DEPTS, DeptKey, colorOf, initials } from './data';
import type { Person } from './data';

interface Props {
  query: string;
  activeDept: string | null;
  onSelect: (id: string) => void;
}

function Avatar({ person }: { person: Person }) {
  const color = colorOf(person);
  return (
    <div
      className="rounded-full flex items-center justify-center overflow-hidden font-bold flex-shrink-0"
      style={{
        width: 42,
        height: 42,
        background: `color-mix(in srgb, ${color} 12%, white)`,
        color,
        fontSize: 14,
      }}
    >
      {person.photo ? (
        <img src={person.photo} alt="" className="w-full h-full object-cover" />
      ) : (
        initials(person)
      )}
    </div>
  );
}

export default function Directory({ query, activeDept, onSelect }: Props) {
  const deptEntries = Object.entries(DEPTS) as [DeptKey, typeof DEPTS[DeptKey]][];

  const sections = deptEntries
    .map(([key, dept]) => {
      let members = PEOPLE.filter(p => p.dept === key);
      if (activeDept && activeDept !== key) return null;
      if (query) members = members.filter(p =>
        (p.name + ' ' + p.title + ' ' + (p.cred || '')).toLowerCase().includes(query)
      );
      if (!members.length) return null;
      return { key, dept, members };
    })
    .filter(Boolean) as { key: DeptKey; dept: typeof DEPTS[DeptKey]; members: Person[] }[];

  if (!sections.length) {
    return (
      <div className="py-8 text-sm" style={{ color: '#5B6663' }}>
        No one matches that search. Try a different name or title.
      </div>
    );
  }

  return (
    <div>
      {sections.map(({ key, dept, members }) => (
        <section key={key} className="mb-8">
          <div
            className="flex items-center gap-2.5 mb-3 text-xs font-extrabold tracking-widest uppercase"
            style={{ color: '#172220' }}
          >
            <span
              className="rounded"
              style={{ width: 10, height: 10, background: dept.color, display: 'inline-block', flexShrink: 0 }}
            />
            {dept.label}
            <span className="font-semibold normal-case tracking-normal text-xs" style={{ color: '#5B6663' }}>
              &middot; {members.length}
            </span>
          </div>
          <div className="dir-grid">
            {members.map(p => (
              <button
                key={p.id}
                className="dir-card"
                style={{ borderLeftColor: dept.color }}
                onClick={() => onSelect(p.id)}
              >
                <Avatar person={p} />
                <div className="text-left">
                  <div className="text-sm font-bold" style={{ color: '#172220' }}>{p.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#5B6663' }}>{p.title}</div>
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
