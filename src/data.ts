export type DeptKey = 'brokerage' | 'operations' | 'finance' | 'management' | 'construction';

export interface Dept {
  label: string;
  color: string;
}

export interface Person {
  id: string;
  name: string;
  cred: string;
  title: string;
  dept: DeptKey;
  parent: string | null;
  email: string;
  phone: string;
  mobile: string;
  linkedin: string;
  photo: string;
  bio: string;
}

export const DEPTS: Record<DeptKey, Dept> = {
  brokerage:    { label: 'Brokerage',               color: '#DB2328' },
  operations:   { label: 'Operations',              color: '#6A0E2E' },
  finance:      { label: 'Finance',                 color: '#4B5955' },
  management:   { label: 'Property Management',     color: '#F15725' },
  construction: { label: 'Construction Management', color: '#95A19E' },
};

const BIO = (s: string) => `https://www.ecrtx.com/team/${s}/`;
const LI  = (s: string) => `https://www.linkedin.com/in/${s}`;

export const PEOPLE: Person[] = [
  // --- Top of org ---
  { id: 'matt-levin', name: 'Matt Levin', cred: 'SIOR', title: 'Founder / CEO', dept: 'brokerage', parent: null,
    email: 'mlevin@ecrtx.com', phone: '512-505-0001', mobile: '512-733-4409', linkedin: LI('matt-levin-b7170613'),
    photo: '/Matt_Levin_-_Square.jpg', bio: BIO('matt-levin') },

  // --- Matt direct reports ---
  { id: 'jason-steinberg', name: 'Jason Steinberg', cred: 'SIOR', title: 'Managing Partner / Brokerage', dept: 'brokerage', parent: 'matt-levin',
    email: 'jsteinberg@ecrtx.com', phone: '512-505-0004', mobile: '512-350-9102', linkedin: LI('jason-steinberg-sior-77aa2111'),
    photo: '/Jason_Steinberg_-_Square.jpg', bio: BIO('jason-steinberg') },
  { id: 'jennifer-schwartz', name: 'Jennifer Schwartz', cred: '', title: 'Executive Operations Manager', dept: 'operations', parent: 'matt-levin',
    email: 'jschwartz@ecrtx.com', phone: '512-505-0024', mobile: '443-752-9912', linkedin: LI('jennifer-schwartz-99029558'),
    photo: '/Jennifer_Schwartz_-_Square.jpg', bio: BIO('jennifer-schwartz') },
  { id: 'sean-bednarz', name: 'Sean Bednarz', cred: '', title: 'Creative Marketing Manager', dept: 'operations', parent: 'matt-levin',
    email: 'sbednarz@ecrtx.com', phone: '512-505-0028', mobile: '512-202-4155', linkedin: LI('seanmbednarz'),
    photo: '/Sean_Bednarz_-_Square.jpg', bio: BIO('sean-bednarz') },
  { id: 'brent-boyer', name: 'Brent Boyer', cred: '', title: 'Controller', dept: 'finance', parent: 'matt-levin',
    email: 'bboyer@ecrtx.com', phone: '512-505-0016', mobile: '512-745-3796', linkedin: LI('brent-boyer-634290a'),
    photo: '/Brent_Boyer_-_Square.jpg', bio: BIO('brent-boyer') },
  { id: 'aaron-clemons', name: 'Aaron Clemons', cred: '', title: 'Director of Construction Management', dept: 'construction', parent: 'matt-levin',
    email: 'aclemons@ecrtx.com', phone: '512-505-0831', mobile: '', linkedin: LI('aaron-clemons-310366117'),
    photo: '/Aaron_Clemons_-_Square.jpg', bio: BIO('aaron-clemons') },
  { id: 'franziska-jackson', name: 'Franziska Jackson', cred: 'CPM, RPA, FMA, LEED AP O+M', title: 'Director of Property Management', dept: 'management', parent: 'matt-levin',
    email: 'fjackson@ecrtx.com', phone: '512-505-0013', mobile: '512-694-3093', linkedin: LI('franziska-jackson-cpm-rpa-fma-leed-ap-34072527'),
    photo: '/Franziska_Jackson_-_Square.jpg', bio: BIO('franziska-jackson') },

  // --- Brokerage (under Jason Steinberg) ---
  { id: 'patrick-ley', name: 'Patrick Ley', cred: 'SIOR, CCIM', title: 'Partner', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'pley@ecrtx.com', phone: '512-505-0002', mobile: '512-537-9040', linkedin: LI('patrickley'),
    photo: '/Patrick_Ley_-_Square.jpg', bio: BIO('patrick-ley') },
  { id: 'sean-couey', name: 'Sean Couey', cred: '', title: 'Senior Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'scouey@ecrtx.com', phone: '512-505-0027', mobile: '512-557-4754', linkedin: LI('sean-couey'),
    photo: '/Sean_Couey_-_Square.jpg', bio: BIO('sean-couey') },
  { id: 'stephen-pannes', name: 'Stephen Pannes', cred: '', title: 'Senior Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'spannes@ecrtx.com', phone: '512-505-0018', mobile: '512-992-9491', linkedin: LI('stephen-pannes-71870541'),
    photo: '/Stephen_Pannes_-_Square.jpg', bio: BIO('stephen-pannes') },
  { id: 'matt-fain', name: 'Matt Fain', cred: '', title: 'Brokerage Principal', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'mfain@ecrtx.com', phone: '512-505-0011', mobile: '512-587-9302', linkedin: '',
    photo: '/Matt_Fain_-_Square.jpg', bio: BIO('matt-fain') },
  { id: 'ryan-wilson', name: 'Ryan Wilson', cred: '', title: 'Brokerage Principal', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'rwilson@ecrtx.com', phone: '512-505-0006', mobile: '512-466-2904', linkedin: '',
    photo: '/Ryan_Wilson_-_Square.jpg', bio: BIO('ryan-wilson') },
  { id: 'hannah-huskey', name: 'Hannah Huskey', cred: '', title: 'Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'hhuskey@ecrtx.com', phone: '512-505-0015', mobile: '512-635-7760', linkedin: LI('hannah-huskey'),
    photo: '/Hannah_Huskey_-_Square.jpg', bio: BIO('hannah-huskey') },
  { id: 'ross-chumley', name: 'Ross Chumley', cred: '', title: 'Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'rchumley@ecrtx.com', phone: '512-505-0029', mobile: '512-739-7222', linkedin: LI('rosschumley'),
    photo: '/Ross_Chumley_-_Square.jpg', bio: BIO('ross-chumley') },
  { id: 'haley-smith', name: 'Haley Smith', cred: 'SIOR', title: 'Brokerage Principal', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'hsmith@ecrtx.com', phone: '512-505-0014', mobile: '512-970-1143', linkedin: LI('haley-berry-smith-sior-280bb65'),
    photo: '/Haley_Smith_-_Square.jpg', bio: BIO('haley-smith') },
  { id: 'david-dawkins', name: 'David Dawkins', cred: '', title: 'Senior Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'ddawkins@ecrtx.com', phone: '512-505-0022', mobile: '512-751-1611', linkedin: LI('daviddawkins'),
    photo: '/David_Dawkins_-_Square.jpg', bio: BIO('david-dawkins') },
  { id: 'isaac-gutierrez', name: 'Isaac Gutierrez', cred: '', title: 'Senior Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'igutierrez@ecrtx.com', phone: '512-505-0008', mobile: '210-542-2966', linkedin: LI('idgutierrez'),
    photo: '/Isaac_Gutierrez_-_Square.jpg', bio: BIO('isaac-gutierrez') },
  { id: 'nick-owens', name: 'Nick Owens', cred: '', title: 'Senior Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'nowens@ecrtx.com', phone: '512-505-0005', mobile: '512-202-8880', linkedin: LI('nickowensli'),
    photo: '/Nick_Owens_-_Square.jpg', bio: BIO('nick-owens') },
  { id: 'cory-camp', name: 'Cory Camp', cred: '', title: 'Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'ccamp@ecrtx.com', phone: '512-505-2761', mobile: '301-233-1124', linkedin: LI('cory-camp-893946135'),
    photo: '/Cory_Camp_-_Square.jpg', bio: BIO('cory-camp') },
  { id: 'charles-herst', name: 'Charles Herst', cred: '', title: 'Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'cherst@ecrtx.com', phone: '512-505-2762', mobile: '919-794-1498', linkedin: LI('charlesherst'),
    photo: '/Charles_Herst_-_Square.jpg', bio: BIO('charles-herst') },
  { id: 'stephen-mcmillen', name: 'Stephen McMillen', cred: '', title: 'Brokerage Advisor', dept: 'brokerage', parent: 'jason-steinberg',
    email: 'smcmillen@ecrtx.com', phone: '512-505-2760', mobile: '949-922-2876', linkedin: LI('stephen-mcmillen7'),
    photo: '/Stephen_McMillen_-_Square.jpg', bio: BIO('stephen-mcmillen') },

  // --- Operations (under Jennifer Schwartz) ---
  { id: 'emily-staples', name: 'Emily Staples', cred: '', title: 'Brokerage Coordinator', dept: 'operations', parent: 'jennifer-schwartz',
    email: 'estaples@ecrtx.com', phone: '512-505-0944', mobile: '512-970-6562', linkedin: LI('emily-staples-'),
    photo: '/Emily_Staples_-_Square.jpg', bio: BIO('emily-staples') },
  { id: 'jeannette-estrada', name: 'Jeannette Estrada', cred: '', title: 'Assistant Property Manager', dept: 'management', parent: 'danielle-ortiz',
    email: 'jestrada@ecrtx.com', phone: '512-505-2765', mobile: '737-318-3932', linkedin: LI('jeannette-estrada-3364b520'),
    photo: '/Jeannette_Estrada_-_Square.jpg', bio: BIO('jeannette-estrada') },
  { id: 'katelyn-sims', name: 'Katelyn Sims', cred: '', title: 'Property Assistant', dept: 'management', parent: 'danielle-ortiz',
    email: 'ksims@ecrtx.com', phone: '512-505-0003', mobile: '512-525-1959', linkedin: LI('simskatelyn'),
    photo: '/Katelyn_Sims_-_Square.jpg', bio: BIO('katelyn-sims') },
  { id: 'brian-velazquez', name: 'Brian Velazquez', cred: '', title: 'Research Analyst', dept: 'operations', parent: 'jennifer-schwartz',
    email: 'bvelazquez@ecrtx.com', phone: '515-505-2769', mobile: '512-998-9396', linkedin: LI('brian-velazquez'),
    photo: '/Brian_Velazquez_-_Square.jpg', bio: BIO('brian-velazquez') },

  // --- Marketing (under Sean Bednarz) ---
  { id: 'martin-villarreal', name: 'Martin Villarreal', cred: '', title: 'Senior Marketing Coordinator', dept: 'operations', parent: 'sean-bednarz',
    email: 'mvillarreal@ecrtx.com', phone: '512-505-0009', mobile: '956-466-3027', linkedin: LI('martinrvillarreal'),
    photo: '/Martin_Villarreal_-_Square.jpg', bio: BIO('martin-villarreal') },

  // --- Finance (under Brent Boyer) ---
  { id: 'sofia-rodriguez', name: 'Sofia Rodriguez', cred: '', title: 'Accountant', dept: 'finance', parent: 'brent-boyer',
    email: 'srodriguez@ecrtx.com', phone: '512-505-0021', mobile: '956-454-4575', linkedin: LI('martha-rodriguez'),
    photo: '/Sofia_Rodriguez_-_Square.jpg', bio: BIO('sofia-rodriguez') },

  // --- Property Management (under Franziska Jackson) ---
  { id: 'mike-bartz', name: 'Mike Bartz', cred: '', title: 'Chief Engineer', dept: 'management', parent: 'franziska-jackson',
    email: 'mbartz@ecrtx.com', phone: '', mobile: '512-497-8066', linkedin: '',
    photo: '/Mike_Bartz_-_Square.jpg', bio: BIO('mike-bartz') },
  { id: 'chris-pagan', name: 'Chris Pagan', cred: '', title: 'Maintenance Technician', dept: 'management', parent: 'mike-bartz',
    email: 'cpagan@ecrtx.com', phone: '512-505-2768', mobile: '512-947-8014', linkedin: '',
    photo: '/Chris_Pagan_-_Square.jpg', bio: BIO('chris-pagan') },
  { id: 'cesar-sanchez', name: 'Cesar Sanchez', cred: '', title: 'Building Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'csanchez@ecrtx.com', phone: '512-505-2766', mobile: '512-545-4411', linkedin: '',
    photo: '/Cesar_Sanchez_-_Square.jpg', bio: BIO('cesar-sanchez') },
  { id: 'daniel-segura', name: 'Daniel Segura', cred: '', title: 'Building Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'dsegura@ecrtx.com', phone: '512-505-9042', mobile: '512-815-6070', linkedin: '',
    photo: '/Daniel_Segura_-_Square.jpg', bio: BIO('daniel-segura') },
  { id: 'daniel-coupe', name: 'Daniel Coupe', cred: '', title: 'Building Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'dcoupe@ecrtx.com', phone: '512-505-6214', mobile: '512-299-4430', linkedin: LI('daniel-c-coupe-ab2a1494'),
    photo: '/Daniel_Coupe_-_Square.jpg', bio: BIO('daniel-coupe') },
  { id: 'javier-esparza', name: 'Javier Esparza', cred: '', title: 'Building Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'jesparza@ecrtx.com', phone: '512-505-2759', mobile: '512-961-2013', linkedin: '',
    photo: '/Javier_Esparza_-_Square.jpg', bio: BIO('javier-esparza') },
  { id: 'ryan-tamayo', name: 'Ryan Tamayo', cred: '', title: 'Building Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'rtamayo@ecrtx.com', phone: '512-505-2764', mobile: '512-750-5945', linkedin: LI('ryan-tamayo-3279a5183'),
    photo: '/Ryan_Tamayo_-_Square.jpg', bio: BIO('ryan-tamayo') },
  { id: 'angel-garcia', name: 'Angel Garcia', cred: '', title: 'Building Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'agarcia@ecrtx.com', phone: '512-505-0835', mobile: '512-921-7655', linkedin: '',
    photo: '/Angel_Garcia_-_Square.jpg', bio: BIO('angel-garcia') },
  { id: 'jose-vazquez', name: 'Jose Vazquez', cred: '', title: 'Building Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'jvazquez@ecrtx.com', phone: '', mobile: '512-767-3468', linkedin: '',
    photo: '/Jose_Vazquez_-_Square.jpg', bio: BIO('jose-vazquez') },
  { id: 'samuel-betancourt', name: 'Samuel Betancourt', cred: '', title: 'Lead Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'sbetancourt@ecrtx.com', phone: '512-505-2757', mobile: '512-560-4352', linkedin: '',
    photo: '/Samuel_Betancort_-_Square.jpg', bio: BIO('samuel-betancourt') },
  { id: 'jamie-tamayo', name: 'Jamie Tamayo', cred: '', title: 'Lead Engineer', dept: 'management', parent: 'mike-bartz',
    email: 'jtamayo@ecrtx.com', phone: '512-505-2763', mobile: '512-994-5032', linkedin: LI('jamie-tamayo-447149271'),
    photo: '/Jamie_Tamayo_-_Square.jpg', bio: BIO('jamie-tamayo') },

  { id: 'michelle-ackermann', name: 'Michelle Ackermann', cred: 'CPM, RPA', title: 'Associate Director', dept: 'management', parent: 'franziska-jackson',
    email: 'mackermann@ecrtx.com', phone: '512-505-0884', mobile: '512-284-6845', linkedin: LI('michelle-ackermann-cpm-rpa-a933a622'),
    photo: '/Michelle_Ackermann_-_Square.jpg', bio: BIO('michelle-ackermann') },
  { id: 'danielle-ortiz', name: 'Danielle Ortiz', cred: '', title: 'Senior Property Manager', dept: 'management', parent: 'franziska-jackson',
    email: 'dortiz@ecrtx.com', phone: '512-505-0946', mobile: '408-605-5471', linkedin: LI('danielle-black-69097610'),
    photo: '/Danielle_Black_-_Square.jpg', bio: BIO('danielle-ortiz') },
  { id: 'angela-odom-brown', name: 'Angela Odom-Brown', cred: '', title: 'Senior Property Manager', dept: 'management', parent: 'franziska-jackson',
    email: 'abrown@ecrtx.com', phone: '512-505-0026', mobile: '386-451-7144', linkedin: LI('angela-odom-brown-83563999'),
    photo: '/Angela_Odom-Brown_-_Square.jpg', bio: BIO('angela-odom-brown') },
  { id: 'madeline-powers', name: 'Madeline Powers', cred: '', title: 'Senior Property Manager', dept: 'management', parent: 'franziska-jackson',
    email: 'mpowers@ecrtx.com', phone: '512-505-0023', mobile: '903-268-6421', linkedin: LI('madeline-powers-76a0b068'),
    photo: '/Madeline_Powers_-_Square.jpg', bio: BIO('madeline-powers') },
  { id: 'alli-rockett', name: 'Alli Rockett', cred: '', title: 'Property Manager', dept: 'management', parent: 'franziska-jackson',
    email: 'arockett@ecrtx.com', phone: '512-505-0020', mobile: '254-749-7204', linkedin: '',
    photo: '/Alli_Rockett_-_Square.jpg', bio: BIO('alli-rockett') },
  { id: 'jack-carroll', name: 'Jack Carroll', cred: '', title: 'Property Manager', dept: 'management', parent: 'madeline-powers',
    email: 'jcarroll@ecrtx.com', phone: '512-505-0947', mobile: '512-284-4883', linkedin: LI('jack-carroll-548834148'),
    photo: '/Jack_Carroll_-_Square.jpg', bio: BIO('jack-carroll') },
  { id: 'stephanie-trevino', name: 'Stephanie Trevino', cred: 'MBA', title: 'Accounting Manager', dept: 'management', parent: 'franziska-jackson',
    email: 'strevino@ecrtx.com', phone: '512-505-0496', mobile: '512-925-6349', linkedin: LI('stephanie-trevino-manortx'),
    photo: '/Stephanie_Trevino_-_Square.jpg', bio: BIO('stephanie-trevino') },
  { id: 'jamie-mcewin', name: 'Jamie McEwin', cred: '', title: 'Senior Property Manager', dept: 'management', parent: 'michelle-ackermann',
    email: 'jmcewin@ecrtx.com', phone: '512-505-0007', mobile: '512-739-3069', linkedin: LI('jamie-mcewin-739058155'),
    photo: '/Jamie_McEwin_-_Square.jpg', bio: BIO('jamie-mcewin') },
  { id: 'wendy-smith', name: 'Wendy Smith', cred: '', title: 'Assistant Property Manager', dept: 'management', parent: 'michelle-ackermann',
    email: 'wsmith@ecrtx.com', phone: '512-505-0012', mobile: '512-635-6618', linkedin: '',
    photo: '/Wendy_Smith_-_Square.jpg', bio: BIO('wendy-smith') },
  { id: 'michael-wohl', name: 'Michael Wohl', cred: '', title: 'Property Assistant', dept: 'management', parent: 'michelle-ackermann',
    email: 'mwohl@ecrtx.com', phone: '512-505-0499', mobile: '512-497-8066', linkedin: LI('mawohl'),
    photo: '/Michael_Wohl_-_Square.jpg', bio: BIO('michael-wohl') },
  { id: 'jennifer-umana', name: 'Jennifer Umana', cred: '', title: 'Assistant Property Manager', dept: 'management', parent: 'michelle-ackermann',
    email: 'jumana@ecrtx.com', phone: '512-505-0832', mobile: '580-480-5008', linkedin: LI('jennifer-u-1133862a'),
    photo: '/Jennifer_Umana_-_Square.jpg', bio: BIO('jennifer-umana') },

  { id: 'graham-shearer', name: 'Graham Shearer', cred: '', title: 'Property Assistant', dept: 'management', parent: 'angela-odom-brown',
    email: 'gshearer@ecrtx.com', phone: '512-505-0495', mobile: '512-289-5029', linkedin: LI('graham-shearer-9a6a68290'),
    photo: '/Graham_Shearer_-_Square.jpg', bio: BIO('graham-shearer') },

  { id: 'taylor-fisher', name: 'Taylor Fisher', cred: '', title: 'Assistant Property Manager', dept: 'management', parent: 'madeline-powers',
    email: 'tfisher@ecrtx.com', phone: '512-505-0836', mobile: '512-803-4214', linkedin: LI('taylorcfisher'),
    photo: '/Taylor_Fisher_-_Square.jpg', bio: BIO('taylor-fisher') },
  { id: 'luis-elizondo', name: 'Luis Elizondo', cred: '', title: 'Property Assistant', dept: 'management', parent: 'madeline-powers',
    email: 'lelizondo@ecrtx.com', phone: '512-505-0498', mobile: '956-346-6209', linkedin: LI('luis-marcelo-elizondo'),
    photo: '/Luis_Elizondo_-_Square.jpg', bio: BIO('luis-elizondo') },

  { id: 'kelsey-cooper', name: 'Kelsey Cooper', cred: '', title: 'Senior Property Accountant', dept: 'management', parent: 'stephanie-trevino',
    email: 'kcooper@ecrtx.com', phone: '512-505-0885', mobile: '732-814-6261', linkedin: LI('kcooper-904'),
    photo: '/Kelsey_Cooper_-_Square.jpg', bio: BIO('kelsey-cooper') },
  { id: 'melissa-saucedo', name: 'Melissa Saucedo', cred: '', title: 'Senior Accounting Associate', dept: 'management', parent: 'stephanie-trevino',
    email: 'msaucedo@ecrtx.com', phone: '512-505-2767', mobile: '512-289-2954', linkedin: LI('melissa-saucedo-28403427a'),
    photo: '/Melissa_Saucedo_-_Square.jpg', bio: BIO('melissa-saucedo') },
  { id: 'gilma-garcia', name: 'Gilma Garcia', cred: '', title: 'Property Accountant', dept: 'management', parent: 'stephanie-trevino',
    email: 'ggarcia@ecrtx.com', phone: '512-505-0839', mobile: '712-444-0924', linkedin: LI('gilma-garcia'),
    photo: '/Gilma_Garcia_-_Square.jpg', bio: BIO('gilma-garcia') },
];

export const byId: Record<string, Person> = Object.fromEntries(PEOPLE.map(p => [p.id, p]));

export const kidMap: Record<string, Person[]> = {};
PEOPLE.forEach(p => {
  if (p.parent) {
    if (!kidMap[p.parent]) kidMap[p.parent] = [];
    kidMap[p.parent].push(p);
  }
});

export const roots = PEOPLE.filter(p => !p.parent);

export function colorOf(p: Person): string {
  return DEPTS[p.dept]?.color ?? '#172220';
}

export function initials(p: Person): string {
  return p.name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

export function matchesPerson(p: Person, q: string): boolean {
  return (p.name + ' ' + p.title + ' ' + (p.cred || '')).toLowerCase().includes(q);
}
