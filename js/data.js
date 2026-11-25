/* ============================================================
   THE NOVA UNION — OFFICIAL SITE DATA
   All content is Union lore/doctrine provided by Union leadership.
   ============================================================ */

const NOVA_CONFIG = {
  motto: 'UNITED WE STAND STRONG',
  sealMotto: 'STRENGTH THROUGH UNITY',
  lastUpdated: '11/19/2026',
  foundingNote: 'A re-established militarized nation of VRChat',
  discordMain:   'https://discord.gg/7Ys67AcBm2',
  discordMP:     'https://discord.gg/9fVMTrPmgf',
  discordAgency: 'https://discord.gg/QsRqnMbCZ4',
  discordGuards: 'https://discord.gg/F5vkWDReGY',
  forumReportUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe28bya9FWfImpwgbK_mUU_g5Ug5u9zUYXYJYcWC6lyedETyQ/viewform',
  forumSuggestUrl: 'https://forms.gle/vbQqUKbwaBsUpPPS7',
  announcementsUrl: '',
  anthemUrl: 'https://youtu.be/iCkiNXnMbeI?si=MCsk7Voynhd09s9y',
  vrchatGroups: ['Nova Union', 'Nova Brigade']
};

/* THE 3-PART PRESIDENCY & 2-PART VICE PRESIDENCY */
const PRESIDENTS = [
  { name: 'CØƁŘA༒ƝØVÄ',  role: 'President' },
  { name: 'KÅƤEĐ༒ƝØVÄ',  role: 'President' },
  { name: 'ҠÅÏƧEŘ༒ƝØVÄ', role: 'President' }
];
const VICE_PRESIDENTS = [
  { name: 'psycho_samurai56', role: 'Vice President' },
  { name: 'syndicatefbx', role: 'Vice President' }
];

const VIDEO_OF_DAY = 'https://youtu.be/pq1Ie9pxyWE?si=8ueiEX1KfnTnmctI';

/* ORDER OF BATTLE (org tree) — Coalition + Holland removed */
const ORG_TREE = [
  { branch: 'THE NOVA GOVERNMENT', blurb: 'Supreme governing authority of the Nova Union', children: ['government', 'agency'] },
  { branch: 'THE NOVA BRIGADE',    blurb: 'The Nova Union’s military fighting force',   children: ['brigade', 'armored', 'medics'] },
  { branch: 'THE NOVA LEGION',     blurb: 'Elite force of the Nova Union’s order',       children: ['legion', 'guards', 'police'] }
];

/* FACTIONS (divisions) — Coalition + Holland removed */
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
    id: 'brigade', name: 'The Nova Brigade', branch: 'THE NOVA BRIGADE',
    initials: 'NB', sealHint: 'KNOT-STAR', emblem: 'assets/emblems/brigade.png',
    mandate: 'The Nova Brigade is a specialized military formation within the Nova Union, composed of disciplined and dedicated personnel trained to operate as a cohesive fighting force. The Brigade focuses on military training, coordinated operations, tactical exercises, and mission readiness.',
    structure: 'The primary military formation of the Nova Union. All recruits begin here under the Recruitment Manual.',
    eligibility: 'Open entry — complete Basic Training under the official Recruitment Manual.',
    docs: [{ label: 'Nova Union Recruitment Manual', href: 'doctrine.html#recruitment-manual' }], discord: null
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
    eligibility: 'Per Legion division — see each division’s requirement. Governed by the Legion ACT.',
    docs: [{ label: 'Legion ACT — Official Document', href: 'doctrine.html#legion-act' }], discord: null
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
  }
];

/* FACTION MOTTOS (inscribed on seals) */
const FACTION_MOTTOS = {
  government: 'AUTHORITY THROUGH UNITY',
  agency:     'ORDER THROUGH INTELLIGENCE',
  brigade:    'DUTY WITHOUT COMPROMISE',
  armored:    'IRON RESOLVE. UNSTOPPABLE FORCE',
  medics:     'THROUGH CHAOS WE BRING HOPE',
  legion:     'ORDER IS OUR STRENGTH',
  guards:     'WE GUARD WHAT OTHERS CANNOT',
  police:     'UPHOLDING ORDER DEFENDING HONOR'
};

/* RANK STRUCTURE (official) */
const RANK_GROUPS = [
  {
    group: 'LEADERSHIP', blurb: 'The summit of the Union',
    rows: [
      { name: 'President' },
      { name: 'Vice President' },
      { name: 'Chancellor' },
      { name: 'Vice-Chancellor' }
    ]
  },
  {
    group: 'GOVERNMENT', blurb: 'Six grades of state authority',
    rows: [
      { name: 'G-6 Prime Minister' },
      { name: 'G-5 Minister' },
      { name: 'G-4 Advisor' },
      { name: 'G-3 Campaign Officer' },
      { name: 'G-2 Government Officer' },
      { name: 'G-1 Secretary' }
    ]
  },
  {
    group: 'INTELLIGENCE — THE NOVA AGENCY (TNA)', blurb: 'The eyes and reports of High Command',
    rows: [
      { name: 'TNA-4 Director' },
      { name: 'TNA-3 Deputy Director' },
      { name: 'TNA-2 Intelligence Officer' },
      { name: 'TNA-1 Field Agent' }
    ]
  },
  {
    group: 'GENERALS', blurb: 'Union high command',
    rows: [
      { name: 'O-11 General of The Union' },
      { name: 'O-10 Lieutenant General' },
      { name: 'O-9 Major General' },
      { name: 'O-8 Brigadier General' }
    ]
  },
  {
    group: 'OFFICERS', blurb: 'Commissioned command of the Union',
    rows: [
      { name: 'O-7 Colonel' },
      { name: 'O-6 Lieutenant Colonel' },
      { name: 'O-5 Major' },
      { name: 'O-4 Major First Class' },
      { name: 'O-3 Captain' },
      { name: 'O-2 First Lieutenant' },
      { name: 'O-1 Second Lieutenant' }
    ]
  },
  {
    group: 'ENLISTED', blurb: 'The backbone of the Union',
    rows: [
      { name: 'E-10 Sergeant Major' },
      { name: 'E-9 Senior Master Sergeant' },
      { name: 'E-8 Sergeant First Class' },
      { name: 'E-7 Staff Sergeant' },
      { name: 'E-6 Sergeant' },
      { name: 'E-5 Corporal' },
      { name: 'E-4 Specialist' },
      { name: 'E-3 Private First Class' },
      { name: 'E-2 Private' },
      { name: 'E-1 Recruit' }
    ]
  }
];

/* MINIMUM RANK REQUIREMENTS */
const REQUIREMENTS = [
  { faction: 'Nova Police',    min: 'E-5', note: 'Members must hold the rank of E-5 or higher to be eligible to join the Nova Police.' },
  { faction: 'Nova Medics',    min: 'E-2', note: 'Members must hold the rank of E-2 or higher to be eligible to join the Medics.' },
  { faction: 'Royal Guards',   min: 'E-6', note: 'Members must hold the rank of E-6 or higher to be eligible to join the Royal Guards.' },
  { faction: 'The Government', min: 'Hand Selected', note: 'Government positions are filled through direct selection by authorized leadership.' },
  { faction: 'Nova Armored',   min: 'E-4', note: 'Members must hold the rank of E-4 or higher to be eligible to join the Nova Armored.' },
  { faction: 'The Agency',     min: 'E-6', note: 'Members must hold the rank of E-6 or higher to be eligible to join the Agency.' }
];

/* NOVA UNION MEDALS */
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

/* NATIONAL HONORS — this week's roll */
const HONOREES = [
  { name: 'ŁØǦǦÏÅ༒ƝØVÄ',    rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: '-Formula-',       rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Terminator1234y', rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'ҠƝƗƓĦŦ༒ƝØVÄ',     rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Mædīšøn༒Ñøvå',    rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Vøłŧɇɍs̷øł',       rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Everest_moss',    rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Maria178',        rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: 'Gojo157',         rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' },
  { name: '༒ᴅᴀʙɪᴇᴛᴛᴜʀᴛʟᴇ༒',  rank: 'HONOREE', citation: 'National Honors — week of November 12, 2026' }
];

/* UNION WIRE announcements */
const ANNOUNCEMENTS = [
  { tag: 'NATIONAL HONORS', date: 'EVERY THURSDAY', text: 'National Honors convenes Thursday — ten names will be called before the Nova Union.' },
  { tag: 'LEGION ACT',      date: 'IN EFFECT',      text: 'The Legion ACT is official doctrine for all Legion divisions — size, ranks, uniform, loyalty and conduct.' },
  { tag: 'RECRUITMENT',     date: 'NOW',            text: 'Open intake across all divisions. Represent the Nova Brigade, join the Nova Union and Brigade groups, and report for training.' },
  { tag: 'PROMOTION STANDARDS', date: 'NOW IN EFFECT', text: 'Enlisted once every 2 days - Officers every 5 - Generals every 7 - only the three Presidents may promote. Performance promotes. Demotions are enforced.' }
];

/* NOVA NEWS — official dispatches */
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
    dek: 'Medics E-2 · Armored E-4 · Police E-5 · Guards E-6 · Agency E-6 · Government: Hand Selected.',
    body: [
      'The Nova Government has published the official minimum rank requirements for entry into every division of the Nova Union, last updated 11/11/2026.',
      'Prospective members of the Medics require E-2; the Nova Armored E-4; the Nova Police E-5; the Royal Guards and the Agency E-6. All Government positions are filled by direct, hand selection.',
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
    dek: 'Ten names called before the Nova Union — official issue under the Presidency.',
    body: [
      'By order of the Presidency, the Weekly National Honors recognize individuals who have demonstrated outstanding dedication, activity, professionalism, loyalty, and meaningful contributions to the Nova Union.',
      'This week\'s honorees: ŁØǦǦÏÅ༒ƝØVÄ, -Formula-, Terminator1234y, ҠƝƗƓĦŦ༒ƝØVÄ, Mædīšøn༒Ñøvå, Vøłŧɇɍs̷øł, Everest_moss, Maria178, Gojo157, ༒ᴅᴀʙɪᴇᴛᴛᴜʀᴛʟᴇ༒.',
      'National Honors convenes every Thursday. If you are not recognized this week, keep your head up — next Thursday is always a new draw.'
    ],
    sign: 'By Order of the Presidency, KÅƤEĐ༒ƝØVÄ'
  }
];

/* STATS BAND */
const UNION_STATS = [
  { num: '3',  label: 'Branches of the Nova Union' },
  { num: '8',  label: 'Recognized Divisions' },
  { num: '3',  label: 'Seats of the Presidency' },
  { num: '7',  label: 'Official Medals' }
];
