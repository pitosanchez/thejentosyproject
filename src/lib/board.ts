import fs from "node:fs";
import path from "node:path";

/**
 * The Jentosy Project Board of Directors — the single source of truth.
 *
 * Every page that shows board members (Meet The Team's full flip cards,
 * and anything added later) imports from here. Add a member to this array
 * once and they appear everywhere automatically, in this order.
 *
 * `officerTitle` is the person's role *on this board* (Chair, Treasurer,
 * clinical advisor, etc.) once those are formalized — distinct from
 * `role`, which is their outside professional title. Leave it undefined
 * until the founder confirms board officer designations.
 */
export interface BoardMember {
  /** Full name as displayed, including post-nominals (e.g. "Junelle Speller, MBA"). */
  name: string;
  /** Outside professional role — shown under the name on every surface. */
  role: string;
  /** Spanish translation of `role`. */
  roleEs: string;
  /** Formal board office, once designated. Not yet published for anyone. */
  officerTitle?: string;
  /** Absolute path from /public, e.g. "/images/daryl.jpeg". */
  photo: string;
  /** Full biography — shown on Meet The Team's card back. */
  bio: string;
  /** Spanish translation of `bio` (machine-drafted, under review — see i18n map). */
  bioEs: string;
}

const board: BoardMember[] = [
  {
    name: "Daryl Spivey",
    role: "Writer / Executive Producer",
    roleEs: "Escritor / Productor ejecutivo",
    photo: "/images/daryl.jpeg",
    bio: "Daryl Spivey is an award-winning writer and producer who began his career on Wall Street as a market segment analyst. Daryl has won 4 Telly Awards, including two Gold Tellys for directing/producing while spearheading development at Al Roker Entertainment, received an EMMY nomination in 2019, and garnered an AURORA Award for excellence in filmmaking for the Baltimore, MD documentary Thread. His feature film, Greenwood Avenue, is currently in production with Hill Harper directing. Other projects include creative partnerships with music icon Ludacris, Mary J. Blige, best-selling author Nelson DeMille, and NBA Entertainment. Daryl is also executive producing, with Academy Award nominee Edward James Olmos and the Harvard Institute for Race and Justice, a documentary series focusing on the history of race in America.",
    bioEs: "Daryl Spivey es un escritor y productor galardonado que comenzó su carrera en Wall Street como analista de segmentos de mercado. Daryl ha ganado 4 premios Telly, incluidos dos Telly de Oro por dirección/producción mientras lideraba el desarrollo en Al Roker Entertainment, recibió una nominación al EMMY en 2019 y obtuvo un premio AURORA a la excelencia cinematográfica por el documental Thread, de Baltimore, Maryland. Su largometraje, Greenwood Avenue, está actualmente en producción con Hill Harper como director. Otros proyectos incluyen colaboraciones creativas con el ícono musical Ludacris, Mary J. Blige, el autor superventas Nelson DeMille y NBA Entertainment. Daryl también es productor ejecutivo, junto al nominado al Óscar Edward James Olmos y el Harvard Institute for Race and Justice, de una serie documental centrada en la historia de la raza en Estados Unidos.",
  },
  {
    name: "Junelle Speller, MBA",
    role: "Chief Strategy Officer, GlomCon Foundation",
    roleEs: "Directora de Estrategia, GlomCon Foundation",
    photo: "/images/junelle.webp",
    bio: "Junelle Speller, MBA, is Chief Strategy Officer of the GlomCon Foundation, where she leads organizational strategy, research programs, community outreach, and global partnerships to advance care and outcomes for people with glomerular and rare kidney diseases. She has more than 25 years of experience spanning healthcare policy, business strategy, research infrastructure, and nonprofit leadership. Before joining GlomCon, Ms. Speller served as Senior Vice President of Health Care Strategy at NORC at the University of Chicago and Vice President of Research at the Pulmonary Fibrosis Foundation, where she led national rare disease registry initiatives. Her career also includes leadership roles in management consulting, health technology, and healthcare policy, including nearly 15 years at the American Academy of Pediatrics. A two-time kidney transplant recipient, Ms. Speller brings lived experience that informs her work in healthcare strategy, research, and evidence generation. She serves on the OPTN Patient Affairs Committee, is a co-patient investigator on a PCORI-funded study, and has presented at major international conferences, including KDIGO. Ms. Speller holds a bachelor's degree in biology from Yale University and an MBA from Northwestern University's Kellogg School of Management.",
    bioEs: "Junelle Speller, MBA, es directora de Estrategia de la GlomCon Foundation, donde lidera la estrategia organizacional, los programas de investigación, el alcance comunitario y las alianzas globales para mejorar la atención y los resultados de las personas con enfermedades glomerulares y renales poco frecuentes. Tiene más de 25 años de experiencia que abarca políticas de salud, estrategia empresarial, infraestructura de investigación y liderazgo en organizaciones sin fines de lucro. Antes de unirse a GlomCon, la Sra. Speller fue vicepresidenta sénior de Estrategia de Atención Médica en NORC de la Universidad de Chicago y vicepresidenta de Investigación en la Pulmonary Fibrosis Foundation, donde dirigió iniciativas nacionales de registros de enfermedades poco frecuentes. Su carrera también incluye cargos de liderazgo en consultoría de gestión, tecnología de la salud y políticas de salud, incluidos casi 15 años en la American Academy of Pediatrics. Receptora de dos trasplantes de riñón, la Sra. Speller aporta una experiencia vivida que nutre su trabajo en estrategia de salud, investigación y generación de evidencia. Forma parte del Comité de Asuntos de Pacientes de la OPTN, es coinvestigadora paciente en un estudio financiado por PCORI y ha presentado en importantes congresos internacionales, incluido KDIGO. La Sra. Speller tiene una licenciatura en biología de la Universidad de Yale y un MBA de la Kellogg School of Management de la Universidad Northwestern.",
  },
  {
    name: "Dr. Josh Fessel",
    role: "Physician-Scientist",
    roleEs: "Médico e investigador científico",
    photo: "/images/Fessel.webp",
    bio: "I am a physician, scientist, teacher, advisor, and grateful servant. My big goals are to develop more effective ways to turn discoveries into action to treat and prevent diseases of all types and to bring those discovery-driven actions to as many people as possible for the better health of all. I have expertise in all aspects of clinical and translational research activities including clinical trials, operational aspects of clinical research, human subjects protections, bioethics, research using big data/real-world data, artificial intelligence in biomedical and healthcare settings, and clinical research policy. My clinical specialty is pulmonary disease and critical care (ICU) medicine. My own research activities focused on investigation of the mechanisms that control metabolism at the molecular level, and how abnormal metabolism and mitochondrial function contributes to diseases such as pulmonary hypertension, heart failure, sepsis, critical illness delirium, cancer, pulmonary fibrosis, and a variety of other complex diseases.",
    bioEs: "Soy médico, científico, docente, asesor y servidor agradecido. Mis grandes metas son desarrollar formas más eficaces de convertir los descubrimientos en acciones para tratar y prevenir enfermedades de todo tipo, y llevar esas acciones basadas en descubrimientos a tantas personas como sea posible, por una mejor salud para todos. Tengo experiencia en todos los aspectos de la investigación clínica y traslacional, incluidos los ensayos clínicos, los aspectos operativos de la investigación clínica, la protección de sujetos humanos, la bioética, la investigación con macrodatos y datos del mundo real, la inteligencia artificial en entornos biomédicos y de atención de la salud, y la política de investigación clínica. Mi especialidad clínica es la enfermedad pulmonar y la medicina de cuidados intensivos (UCI). Mi propia investigación se centró en el estudio de los mecanismos que controlan el metabolismo a nivel molecular, y en cómo el metabolismo anormal y la función mitocondrial contribuyen a enfermedades como la hipertensión pulmonar, la insuficiencia cardíaca, la sepsis, el delirio por enfermedad crítica, el cáncer, la fibrosis pulmonar y otras enfermedades complejas.",
  },
  {
    name: "Glenda V. Roberts",
    role: "Director of Communications & Patient Engagement, Mount Sinai Center for Kidney Disease Innovation, Icahn School of Medicine at Mount Sinai",
    roleEs: "Directora de Comunicaciones y Participación de Pacientes, Mount Sinai Center for Kidney Disease Innovation, Icahn School of Medicine at Mount Sinai",
    photo: "/images/glenda.webp",
    bio: "Glenda V. Roberts was diagnosed with kidney disease at 21 and told to start dialysis immediately. She asked for another option; diet and exercise, her doctor said, though it rarely worked. For her, it worked for 40 years — she went vegetarian, then vegan, and exercised daily, while her brother, diagnosed at the same age, began dialysis at once. Raised in Fort Worth's segregated Stop Six, she finished a mathematics degree at the University of Houston in three years, then rose over 36 years from software developer to leading multimillion-dollar business units at Shell, Johnson & Johnson, General Electric, and Microsoft — never disclosing her illness after a manager warned her in 2005 that mentioning it again would end her chances of promotion. She retired in 2006 at her physicians' urging, crashed into dialysis in 2010, and received a transplant the same year. As a patient advocate, she is one of two patient co-authors of the KDIGO guideline, the global standard of care for chronic kidney disease, and has co-authored more than 50 peer-reviewed publications since 2018. She is the first patient to receive both the ASN President's Medal and the NKF Celeste Castillo Lee Patient Engagement Award, the highest honors each organization gives a non-nephrologist. As one of only two patients on the NKF-ASN task force that removed race from kidney function estimates, her work restored waiting time to more than 21,000 Black transplant candidates — a median of 1.7 years each.",
    bioEs: "A Glenda V. Roberts le diagnosticaron enfermedad renal a los 21 años y le dijeron que empezara diálisis de inmediato. Ella pidió otra opción; dieta y ejercicio, dijo su médico, aunque rara vez funcionaba. Para ella funcionó durante 40 años — se hizo vegetariana, luego vegana, y hacía ejercicio a diario, mientras su hermano, diagnosticado a la misma edad, empezó la diálisis de inmediato. Criada en el segregado barrio de Stop Six, en Fort Worth, terminó una licenciatura en matemáticas en la Universidad de Houston en tres años, y luego ascendió a lo largo de 36 años de desarrolladora de software a dirigir unidades de negocio multimillonarias en Shell, Johnson & Johnson, General Electric y Microsoft — sin revelar nunca su enfermedad después de que un gerente le advirtiera en 2005 que volver a mencionarla acabaría con sus posibilidades de ascenso. Se jubiló en 2006 por recomendación de sus médicos, entró de urgencia en diálisis en 2010 y recibió un trasplante ese mismo año. Como defensora de los pacientes, es una de las dos pacientes coautoras de la guía KDIGO, el estándar mundial de atención para la enfermedad renal crónica, y ha sido coautora de más de 50 publicaciones revisadas por pares desde 2018. Es la primera paciente en recibir tanto la Medalla del Presidente de la ASN como el Premio Celeste Castillo Lee a la Participación de Pacientes de la NKF, los máximos honores que cada organización otorga a una persona que no es nefróloga. Como una de las solo dos pacientes en el grupo de trabajo NKF-ASN que eliminó la raza de las estimaciones de la función renal, su trabajo restituyó tiempo de espera a más de 21,000 candidatos negros a trasplante — una mediana de 1.7 años cada uno.",
  },
];

/**
 * Board members with a `photoExists` flag resolved against /public at build
 * time, and `role`/`bio` resolved to the requested locale (`en` default).
 */
export function getBoard(lang: "en" | "es" = "en") {
  return board.map((person) => ({
    ...person,
    role: lang === "es" ? person.roleEs : person.role,
    bio: lang === "es" ? person.bioEs : person.bio,
    photoExists: fs.existsSync(path.join(process.cwd(), "public", person.photo)),
  }));
}

export default board;
