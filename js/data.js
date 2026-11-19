/* ============================================================
   THE NOVA UNION — OFFICIAL SITE DATA (EDIT ME)
   All content is real Union lore/doctrine provided by Union
   leadership, except items marked [PLACEHOLDER].
   ============================================================ */

const NOVA_CONFIG = {
  motto: 'UNITED WE STAND STRONG',              // official Union motto
  sealMotto: 'STRENGTH THROUGH UNITY',          // inscribed on the Union seal
  lastUpdated: '11/16/2026',                    // last content update
  foundingNote: 'A re-established militarized nation of VRChat',
  discordMain:   'https://discord.gg/7Ys67AcBm2',
  discordMP:     'https://discord.gg/9fVMTrPmgf',
  discordAgency: 'https://discord.gg/QsRqnMbCZ4',
  discordGuards: 'https://discord.gg/F5vkWDReGY',
  forumReportUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe28bya9FWfImpwgbK_mUU_g5Ug5u9zUYXYJYcWC6lyedETyQ/viewform',   // LIVE — Report a Member (Google Form)
  forumSuggestUrl: 'https://forms.gle/vbQqUKbwaBsUpPPS7',   // LIVE — Suggestion Docket (user's published form)
  // Optional: remote JSON [ { tag, date, text } ] — e.g. raw GitHub Gist — served as the UNION WIRE + Notice Board.
  announcementsUrl: '',
  vrchatGroups: ['Nova Union', 'Nova Brigade']  // recruits must join both
};

/* ───────── THE 3-PART PRESIDENCY & 2-PART VICE PRESIDENCY ───────── */
const PRESIDENTS = [
  { name: 'Napoleon I',    role: 'President' },
  { name: 'CØƁŘA༒ƝØVÄ',    role: 'President' },
  { name: 'KÅƤEĐ༒ƝØVÄ',    role: 'President' }
];
const VICE_PRESIDENTS = [
  { name: 'MîTTLĘ༒ƝØVÄ',   role: 'Vice President' },
  { name: 'psycho_samurai', role: 'Vice President' }
];

/* ───────── ORDER OF BATTLE (org tree) ───────── */
// Three top-level branches. children reference FACTIONS ids.
const ORG_TREE = [
  { branch: 'THE NOVA GOVERNMENT', blurb: 'Supreme governing authority of the Union', children: ['government', 'agency', 'coalition'] },
  { branch: 'THE NOVA BRIGADE',    blurb: 'The Union\u2019s military fighting force',   children: ['brigade', 'armored', 'medics'] },
  { branch: 'THE NOVA LEGION',     blurb: 'Elite force of the Union\u2019s order',       children: ['legion', 'reapers', 'guards', 'police', 'holland'] }
];

/* ───────── FACTIONS (divisions) ───────── */
// emblem: leave '' to use the generated monochrome seal.
// To use your real emblems later: drop the images into assets/emblems/
// and set e.g. emblem: 'assets/emblems/armored.png'.
const FACTIONS = [
  {
    id: 'government', name: 'The Nova Government', branch: 'THE NOVA GOVERNMENT',
    initials: 'NG', sealHint: 'EAGLE', emblem: 'assets/emblems/government.png',
    mandate: 'The Nova Government serves as the supreme governing authority of the Nova Union. Charged with overseeing all public institutions and armed forces, the Government directs state policy, coordinates official events, manages group staff, and drives the strategic vision of Nova.',
    structure: 'Serves directly under the leadership of the Chancellor and Vice-Chancellor, with the Prime Minister representing the Government.',
    eligibility: 'Hand Selected — Government positions are filled through direct selection by authorized leadership.',
    docs: [], discord: null
  },
  {
    id: 'agency', name: 'The Nova Agency', branch: 'THE NOVA GOVERNMENT',
    initials: 'NA', sealHint: 'SHIELD', emblem: 'assets/emblems/agency.png',
    mandate: 'Operating directly under the Nova Union, The Nova Agency is the vital backbone of state intelligence. It specializes in external surveillance, internal monitoring, and strategic reporting to ensure High Command maintains total awareness and operational control.',
    structure: 'Serves directly under the Leadership of the Government, with the Director representing the Agency.',
    eligibility: 'Minimum Rank: E-6 — Members must hold the rank of E-6 or higher to be eligible to join the Agency.',
    docs: [], discord: 'discordAgency'
  },
  {
    id: 'coalition', name: 'The Nova Coalition', branch: 'THE NOVA GOVERNMENT',
    initials: 'NC', sealHint: 'TORCH', emblem: 'assets/emblems/coalition.png',
    mandate: 'The Nova Coalition is an international organization established under the leadership and authority of The Nova Union, designed to unite multiple independent groups, organizations, and affiliated nations under one centralized system of cooperation, administration, and leadership.',
    structure: 'An international arm of the Union — independent groups cooperate under one centralized system of administration and leadership.',
    eligibility: 'By establishment of the Nova Government. No public rank minimum.',
    docs: [], discord: null
  },
  {
    id: 'brigade', name: 'The Nova Brigade', branch: 'THE NOVA BRIGADE',
    initials: 'NB', sealHint: 'KNOT-STAR', emblem: 'assets/emblems/brigade.png',
    mandate: 'The Nova Brigade is a specialized military formation within the Nova Union, composed of disciplined and dedicated personnel trained to operate as a cohesive fighting force. The Brigade focuses on military training, coordinated operations, tactical exercises, and mission readiness.',
    structure: 'The primary military formation of the Union. All recruits begin here under the Recruitment Manual.',
    eligibility: 'Open entry — complete Basic Training under the official Recruitment Manual.',
    docs: [{ label: 'Nova Union Recruitment Manual', href: 'docs/recruitment-manual.md' }], discord: null
  },
  {
    id: 'armored', name: 'The Nova Armored', branch: 'THE NOVA BRIGADE',
    initials: 'NVA', sealHint: 'TANK', emblem: 'assets/emblems/armored.png',
    mandate: 'The Nova Armored commands the tanks and armored vehicles of the Nova Union, delivering overwhelming firepower, heavy protection, and decisive battlefield support. Through disciplined crews, coordinated maneuvers, and armored warfare expertise, they spearhead assaults, reinforce allied forces, and defend the strength and unity of the Nova Union.',
    structure: 'Division of The Nova Brigade. Tanks and armored vehicles of the Union.',
    eligibility: 'Minimum Rank: E-4 — Members must hold the rank of E-4 or higher to be eligible to join the Nova Armored.',
    docs: [], discord: null
  },
  {
    id: 'medics', name: 'The Nova Medics', branch: 'THE NOVA BRIGADE',
    initials: 'NM', sealHint: 'STAR-OF-LIFE', emblem: 'assets/emblems/medics.png',
    mandate: 'The Nova Medics provides essential medical support, treating wounded personnel, saving lives, and ensuring the readiness of Nova Union forces. Through skilled medical care, rapid battlefield response, and unwavering dedication, they safeguard the lives of their comrades and uphold the strength and unity of the Nova Union.',
    structure: 'Division of The Nova Brigade. Combat medical support for the Union.',
    eligibility: 'Minimum Rank: E-2 — Members must hold the rank of E-2 or higher to be eligible to join the Medics.',
    docs: [], discord: null
  },
  {
    id: 'legion', name: 'The Nova Legion', branch: 'THE NOVA LEGION',
    initials: 'NL', sealHint: 'WINGS', emblem: 'assets/emblems/legion.png',
    mandate: 'The Nova Legion is an elite force dedicated to the protection, security, and stability of the Nova Union. Comprised of guards, military police, and specialized personnel, the Legion upholds order, enforces regulations, and protects key personnel and institutions.',
    structure: 'An umbrella of specialized orders. Governed by the Legion ACT — maximum 15 members, 8 ranks, mandatory uniform, 14-day loyalty minimum.',
    eligibility: 'Per Legion division — see each division\u2019s requirement. Governed by the Legion ACT.',
    docs: [{ label: 'Legion ACT — Official Document', href: 'docs/legion-act.md' }], discord: null
  },
  {
    id: 'reapers', name: 'The Nova Reapers', branch: 'THE NOVA LEGION',
    initials: 'NR', sealHint: 'SCYTHE', emblem: 'assets/emblems/reapers.png',
    mandate: 'Operating as a division of the Nova Legion, The Nova Reapers are an elite strike force loyal exclusively to the Presidents and Vice-Presidents. Specializing in stealth, precision strikes, and surprise raids, they execute their leaders\u2019 directives with unwavering loyalty and efficiency.',
    structure: 'Division of The Nova Legion — loyal exclusively to the Presidents and Vice-Presidents.',
    eligibility: 'Minimum Rank: Hand Selected — Reapers candidates are exclusively hand-selected from The Nova Brigade.',
    docs: [], discord: null
  },
  {
    id: 'guards', name: 'The Nova Guards', branch: 'THE NOVA LEGION',
    initials: 'NGU', sealHint: 'SHIELD-FILLED', emblem: 'assets/emblems/guards.png',
    mandate: 'Operating as a division of The Nova Legion, The Nova Guards personally protect the Presidents and Vice Presidents. Exclusively loyal to their commands, they monitor conversations, identify suspicious personnel, and ensure the safety of their leaders through constant vigilance and unwavering allegiance.',
    structure: 'Division of The Nova Legion — personal protection of the Presidents and Vice-Presidents.',
    eligibility: 'Minimum Rank: E-6 — Members must hold the rank of E-6 or higher to be eligible to join the Royal Guards.',
    docs: [], discord: 'discordGuards'
  },
  {
    id: 'police', name: 'The Nova Military Police', branch: 'THE NOVA LEGION',
    initials: 'NMP', sealHint: 'SABERS', emblem: 'assets/emblems/police.png',
    mandate: 'Operating as a division of The Nova Legion, The Nova Military Police enforces justice, maintains discipline, and protects the ranks from abuse, corruption, and infiltration. Through impartial investigations and essential support, they uphold order and defend the honor of the Nova Union.',
    structure: 'Division of The Nova Legion — justice, discipline, and internal security.',
    eligibility: 'Minimum Rank: E-5 — Members must hold the rank of E-5 or higher to be eligible to join the Nova Police.',
    docs: [], discord: 'discordMP'
  },
  {
    id: 'holland', name: 'The Nova Holland', branch: 'THE NOVA LEGION',
    initials: 'NH', sealHint: 'QUESTION', emblem: 'assets/emblems/holland.png',
    mandate: 'The Nova Holland — record pending. Listed in the official Union order of battle under The Nova Legion as of 11/13/2026. Full mandate to be published by the Government.',
    structure: 'Division of The Nova Legion. Mandate pending publication.',
    eligibility: 'Record pending — await official Government announcement.',
    docs: [], discord: null
  }
];

/* ───────── FACTION MOTTOS (inscribed on seals) ───────── */
const FACTION_MOTTOS = {
  government: 'AUTHORITY THROUGH UNITY',
  agency:     'ORDER THROUGH INTELLIGENCE',
  coalition:  'ORDER THROUGH INTELLIGENCE',
  brigade:    'DUTY WITHOUT COMPROMISE',
  armored:    'IRON RESOLVE. UNSTOPPABLE FORCE',
  medics:     'THROUGH CHAOS WE BRING HOPE',
  legion:     'ORDER IS OUR STRENGTH',
  reapers:    'WE REAP WHAT OTHERS FEAR',
  guards:     'WE GUARD WHAT OTHERS CANNOT',
  police:     'UPHOLDING ORDER DEFENDING HONOR',
  holland:    'RECORD PENDING'
};

/* ───────── UNION-WIDE RANK LADDER (retired — see RANK_GROUPS) ───────── */
/* ───────── RANK STRUCTURE (official, last updated 11/11/2026) ───────── */
const RANK_GROUPS = [
  {
    group: 'LEADERSHIP', blurb: 'The summit of the Union',
    rows: [
      { name: 'President',       note: 'Three-part presidency' },
      { name: 'Vice President',  note: 'Two-part vice presidency' },
      { name: 'Chancellor',      note: 'Senior civilian office' },
      { name: 'Vice-Chancellor', note: 'Next to the Chancellor' }
    ]
  },
  {
    group: 'GOVERNMENT', blurb: 'Six grades of state authority',
    rows: [
      { name: 'G-6 Prime Minister',    note: 'Speaks for the Government' },
      { name: 'G-5 Minister',          note: 'Heads a portfolio of state' },
      { name: 'G-4 Advisor',           note: 'Counsel to the Government' },
      { name: 'G-3 Campaign Officer',  note: 'Runs official events' },
      { name: 'G-2 Government Officer',note: 'Executive arm of the state' },
      { name: 'G-1 Secretary',         note: 'Records and administration' }
    ]
  },
  {
    group: 'INTELLIGENCE — THE NOVA AGENCY (TNA)', blurb: 'The eyes and reports of High Command',
    rows: [
      { name: 'TNA-4 Director',         note: 'Head of the Agency' },
      { name: 'TNA-3 Deputy Director',  note: 'Second-in-command of the Agency' },
      { name: 'TNA-2 Intelligence Officer', note: 'Cases and reporting' },
      { name: 'TNA-1 Field Agent',      note: 'Boots on the ground' }
    ]
  },
  {
    group: 'GENERALS', blurb: 'Union high command',
    rows: [
      { name: 'O-11 General of The Union', note: 'Supreme military office' },
      { name: 'O-10 Lieutenant General',   note: 'Theater command' },
      { name: 'O-9 Major General',         note: 'Formation command' },
      { name: 'O-8 Brigadier General',     note: 'Brigade command' }
    ]
  },
  {
    group: 'OFFICERS', blurb: 'Commissioned command of the Union',
    rows: [
      { name: 'O-7 Colonel',            note: 'Senior field officer' },
      { name: 'O-6 Lieutenant Colonel', note: 'Field grade' },
      { name: 'O-5 Major',              note: 'Field grade' },
      { name: 'O-4 Major First Class',  note: 'Field grade, senior' },
      { name: 'O-3 Captain',            note: 'Company command' },
      { name: 'O-2 First Lieutenant',   note: 'Platoon command' },
      { name: 'O-1 Second Lieutenant',  note: 'Commissioned entry' }
    ]
  },
  {
    group: 'ENLISTED', blurb: 'The backbone of the Union',
    rows: [
      { name: 'E-10 Sergeant Major',      note: 'Senior enlisted advisor' },
      { name: 'E-9 Senior Master Sergeant', note: 'Senior enlisted leader' },
      { name: 'E-8 Sergeant First Class', note: 'Platoon sergeant' },
      { name: 'E-7 Staff Sergeant',       note: 'Squad leadership' },
      { name: 'E-6 Sergeant',             note: 'Sergeant' },
      { name: 'E-5 Corporal',             note: 'Junior leader' },
      { name: 'E-4 Specialist',           note: 'Specialist' },
      { name: 'E-3 Private First Class',  note: 'Experienced private' },
      { name: 'E-2 Private',              note: 'Private' },
      { name: 'E-1 Recruit',              note: 'Entry rank' }
    ]
  }
];

/* ───────── MINIMUM RANK REQUIREMENTS (official, last updated 11/11/2026) ───────── */
const REQUIREMENTS = [
  { faction: 'Nova Navy',      min: 'E-2', note: 'Members must hold the rank of E-2 or higher to be eligible to join the Nova Navy.' },
  { faction: 'Nova Police',    min: 'E-5', note: 'Members must hold the rank of E-5 or higher to be eligible to join the Nova Police.' },
  { faction: 'Nova Medics',    min: 'E-2', note: 'Members must hold the rank of E-2 or higher to be eligible to join the Medics.' },
  { faction: 'Reapers',        min: 'Hand Selected', note: 'Reapers candidates are exclusively hand-selected from The Nova Brigade.' },
  { faction: 'Royal Guards',   min: 'E-6', note: 'Members must hold the rank of E-6 or higher to be eligible to join the Royal Guards.' },
  { faction: 'The Government', min: 'Hand Selected', note: 'Government positions are filled through direct selection by authorized leadership.' },
  { faction: 'Nova Armored',   min: 'E-4', note: 'Members must hold the rank of E-4 or higher to be eligible to join the Nova Armored.' },
  { faction: 'The Agency',     min: 'E-6', note: 'Members must hold the rank of E-6 or higher to be eligible to join the Agency.' }
];

/* ───────── NOVA UNION MEDALS (official — made by ƇΉΙΡ༒ƝØVÄ) ───────── */
const MEDALS = [
  {
    name: 'Grand Star of the Nova Union', tier: 'GRAND STAR', level: 7,
    summary: 'The highest decoration awarded by the Nova Union.',
    earn: ['Demonstrate extraordinary dedication to the Union.', 'Make an exceptional contribution to development.', 'Display outstanding leadership and commitment.', 'Be nominated by the President.']
  },
  {
    name: 'Star of Distinguished Service', tier: 'STAR', level: 6,
    summary: 'Recognizes exceptional service to the government, military, or other Union institutions.',
    earn: ['Consistently perform duties exceptionally well.', 'Serve the Union with distinction.', 'Make significant improvements to an institution or department.', 'Receive an official recommendation from leadership.']
  },
  {
    name: 'Star of Exceptional Merit', tier: 'STAR', level: 5,
    summary: 'Recognizes outstanding achievements that benefit the Nova Union.',
    earn: ['Accomplish something exceptionally beneficial to the Union.', 'Organize successful major events or projects.', 'Introduce valuable ideas or reforms.', 'Demonstrate exceptional initiative.']
  },
  {
    name: 'Star of Valor', tier: 'STAR', level: 4,
    summary: 'Recognizes extraordinary courage, integrity, and selflessness.',
    earn: ['Demonstrate courage in a difficult situation.', 'Stand up for members facing unfair treatment.', 'Protect the reputation and interests of the Union through responsible actions.', 'Put the wellbeing of the community before personal recognition.']
  },
  {
    name: 'Silver Star of Excellence', tier: 'SILVER STAR', level: 3,
    summary: 'Recognizes outstanding performance and achievement.',
    earn: ['Consistently demonstrate excellent performance.', 'Complete important assignments successfully.', 'Show strong leadership and professionalism.', 'Make a notable contribution to a department.']
  },
  {
    name: 'Silver Star of Commitment', tier: 'SILVER STAR', level: 2,
    summary: 'Recognizes loyalty, reliability, and dedicated service.',
    earn: ['Maintain consistent activity and participation.', 'Fulfil assigned responsibilities.', 'Demonstrate reliability and professionalism.', 'Show continued commitment to the Nova Union.']
  },
  {
    name: 'Bronze Star of Dedication', tier: 'BRONZE STAR', level: 1,
    summary: 'Recognizes members who demonstrate dedication and make meaningful contributions to the Nova Union.',
    earn: ['Demonstrate a positive attitude toward the Union.', 'Assist with activities and community projects.', 'Show willingness to help other members.', 'Demonstrate commitment to their responsibilities.']
  }
];

/* ───────── NATIONAL HONORS — this week\u2019s roll [PLACEHOLDER] ───────── */
const HONOREES = [
  { name: 'Mark H Botkin',  rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'ĎĴ༒ƝØVÄ',       rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'ᴇᴠᴀɴᴠʀ',         rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'ĄŘAƁ༒ƝØVÄ',      rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'me21 6f53',      rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Shadow McLaren', rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Mr-reaper73',    rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: '༒Mr Ðårk༒',      rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Foxxy Chiller',  rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'x_Bass_x',       rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' }
];

/* ───────── UNION WIRE announcements ───────── */
const ANNOUNCEMENTS = [
  { tag: 'NATIONAL HONORS', date: 'EVERY THURSDAY', text: 'National Honors convenes Thursday — ten names will be called before the Union.' },
  { tag: 'LEGION ACT',      date: 'IN EFFECT',      text: 'The Legion ACT is official doctrine for all Legion divisions — size, ranks, uniform, loyalty and conduct.' },
  { tag: 'RECRUITMENT',     date: 'NOW',            text: 'Open intake across all divisions. Represent the Nova Brigade, join the Union and Brigade groups, and report for training.' },
  { tag: 'PROMOTION STANDARDS', date: 'NOW IN EFFECT', text: 'Enlisted once every 2 days - Officers every 5 - Generals every 7 - only the three Presidents may promote. Performance promotes. Demotions are enforced.' }
];

/* ───────── NOVA NEWS — official dispatches ───────── */
const NEWS = [
  {
    id: 'n1', cat: 'OFFICIAL DOCUMENT', date: 'NOV 2026',
    headline: 'LEGION ACT Ratified by the Nova Government',
    dek: 'Legion size, rank ceilings, uniform law, loyalty terms, and disbandment rules.',
    body: [
      'By order of the Nova Government, the Legion ACT is now official doctrine for every division of The Nova Legion. Each Legion is limited to 15 members and 8 ranks. Nova Brigade ranks do not apply inside a Legion.',
      'Members must serve a minimum of 14 days upon joining. All personnel, including COs and XOs, must wear the designated uniform while on duty. Inactive divisions may be disbanded by the Government — upon disbandment, all members return to their prior Brigade ranks.',
      'Legion combat events require authorization from division leadership or the Government — except when held alongside an officially hosted Nova Brigade combat event.'
    ],
    sign: '— The Nova Government'
  },
  {
    id: 'n2', cat: 'REQUIREMENTS', date: 'NOV 11, 2026',
    headline: 'Rank Requirements for All Divisions Published',
    dek: 'Navy E-2 · Medics E-2 · Armored E-4 · Police E-5 · Guards E-6 · Agency E-6 · Reapers & Government: Hand Selected.',
    body: [
      'The Nova Government has published the official minimum rank requirements for entry into every division of the Union, last updated 11/11/2026.',
      'Prospective members of the Nova Navy and the Medics require E-2; the Nova Armored E-4; the Nova Police E-5; the Royal Guards and the Agency E-6. The Reapers and all Government positions are filled by direct, hand selection.',
      'Members are reminded that misrepresenting qualifications is a dismissal offense under Union doctrine.'
    ],
    sign: '— The Nova Government, 11/11/2026'
  },
  {
    id: 'n3', cat: 'MEDALS', date: 'NOV 2026',
    headline: 'Nova Union Medals Registry Published',
    dek: 'Seven decorations, from the Bronze Star of Dedication to the Grand Star of the Nova Union.',
    body: [
      'By order of the Presidency, the complete Nova Union Medals registry has been published. Seven decorations are awarded: the Grand Star of the Nova Union, the Star of Distinguished Service, the Star of Exceptional Merit, the Star of Valor, the Silver Star of Excellence, the Silver Star of Commitment, and the Bronze Star of Dedication.',
      'The Grand Star — the highest decoration of the Union — is conferred only upon nomination by the President. The Bronze Star of Dedication is open to any member who shows up, stands tall, and honors the Union.',
      'Medal design and registry maintained by ƇΉΙΡ༒ƝØVÄ.'
    ],
    sign: '— Nova Union Medals Registry'
  },
  {
    id: 'n4', cat: 'RECRUITMENT', date: 'NOV 2026',
    headline: 'The Recruitment Manual Is Binding Doctrine',
    dek: 'Yellow PT lines, Nova groups, faces and comms, obstacle course, role-request — in that order.',
    body: [
      'All trainers are reminded that the official Recruitment Manual is binding. Any trainer caught training recruits without the manual will be punished.',
      'The sequence is fixed: recruit to the yellow PT lines; both Nova Union and Nova Brigade VRChat groups joined; status set to "E-1 | Nickname | T.N.B"; enlisted avatar issued.',
      'Faces, comms, the obstacle course (optional), Discord role-request, and a post. That is the path from civilian to Union.'
    ],
    sign: '— The Nova Brigade'
  },
  {
    id: 'n5', cat: 'PROMOTIONAL STANDARDS', date: 'NOV 16, 2026',
    headline: 'Promotional Standards of the Nova Union',
    dek: 'Enlisted once every two days - Officers every five - Generals every seven. All promotions: the three Presidents only.',
    body: [
      'Promotional Wait Times - Enlisted can only be promoted once every TWO days, and ONLY by one of the three Presidents. Officers can only be promoted once every FIVE days, and ONLY by one of the three Presidents. Generals can only be promoted once every SEVEN days, and ONLY by one of the three Presidents.',
      'Combat Events - Each time will have the best by performance promoted, NOT everyone. You cannot be promoted EVERY SINGLE combat event, in order to make it fair.',
      'Demotions - Officers and Generals who cannot do their job(s) will be demoted from now on. Generals and Senior Officers MUST train and enhance new officers to be productive, or they will be demoted.'
    ],
    sign: 'Forever Loyal, Forever Nova — Your Vice Chancellor, ƇΉΙΡ༒ƝØVÄ'
  },
  {
    id: 'n6', cat: 'NATIONAL HONORS', date: 'NOV 12, 2026',
    headline: 'National Honors — Week of November 12, 2026',
    dek: 'Ten names called before the Union — official issue under the Presidency.',
    body: [
      'By order of the Presidency, the Weekly National Honors recognize individuals who have demonstrated outstanding dedication, activity, professionalism, loyalty, and meaningful contributions to the Nova Union.',
      'This week\'s honorees: Mark H Botkin, ĎĴ༒ƝØVÄ, ᴇᴠᴀɴᴠʀ, ĄŘAƁ༒ƝØVÄ, me21 6f53, Shadow McLaren, Mr-reaper73, ༒Mr Ðårk༒, Foxxy Chiller, x_Bass_x.',
      'National Honors convenes every Thursday. If you are not recognized this week, keep your head up — next Thursday is always a new draw.'
    ],
    sign: '— By Order of the Presidency, KÅƤEĐ༒ƝØVÄ'
  }
];

/* ───────── STATS BAND ───────── */
const UNION_STATS = [
  { num: '3',  label: 'Branches of the Union' },
  { num: '11', label: 'Recognized Divisions' },
  { num: '3',  label: 'Seats of the Presidency' },
  { num: '7',  label: 'Official Medals' }
];
