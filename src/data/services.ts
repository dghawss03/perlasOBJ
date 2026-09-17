export type RelatedLink={label:string;href:string}
export type Service={
 slug:string
 title:string
 category:string
 summary:string
 intro:string
 details:string[]
 areas:string[]
 image:string
 imageAlt:string
 imagePosition?:string
 benefitImage?:string
 benefitImageAlt?:string
 metaTitle:string
 metaDescription:string
 detailHeading:string
 overview?:string[]
 benefit:string
 benefitTitle:string
 relatedServices?:RelatedLink[]
 relatedArticles?:RelatedLink[]
}

export const services:Service[]=[
 {
  slug:'objektbetreuung',title:'Objektbetreuung',category:'Ganzheitliche Betreuung',
  summary:'Ein fester Ansprechpartner koordiniert wiederkehrende Aufgaben, prüft den Objektzustand und hält Termine, Dienstleister und offene Punkte im Blick.',
  intro:'Professionelle Objektbetreuung betrachtet eine Immobilie als zusammenhängendes Ganzes: mit regelmäßiger Präsenz, klaren Zuständigkeiten und nachvollziehbaren Rückmeldungen.',
  details:['Planmäßige Objektbegehungen mit definierten Kontrollpunkten','Koordination wiederkehrender Services und externer Fachpartner','Fotodokumentation, Mängelmeldung und Nachverfolgung'],
  areas:['Büro- und Gewerbeimmobilien','Wohnanlagen und gemischt genutzte Objekte','Verwaltungsstandorte und öffentliche Gebäude'],
  image:'/images/projects/gebaeude-aussen.png',imageAlt:'Von Perlas betreutes Verwaltungs- und Gewerbegebäude',imagePosition:'50% 44%',
  metaTitle:'Professionelle Objektbetreuung für Immobilien',
  metaDescription:'Professionelle Objektbetreuung für Gewerbeimmobilien: Perlas koordiniert Services, dokumentiert Auffälligkeiten und entlastet Hausverwaltungen.',
  detailHeading:'Das Objekt verlässlich im Blick behalten.',
  benefit:'Hausverwaltungen und Unternehmen bündeln operative Themen bei einem Ansprechpartner. Auffälligkeiten werden früh gemeldet, Zuständigkeiten bleiben klar und der laufende Objektbetrieb wird spürbar entlastet.',
  benefitTitle:'Koordination, die Verwaltungen entlastet.',
  relatedServices:[{label:'Objektkontrollen mit klaren Prüfplänen',href:'/leistungen/objektkontrollen'},{label:'Technische Objektbetreuung kennenlernen',href:'/leistungen/technische-objektbetreuung'},{label:'Leistungen als Facility Services bündeln',href:'/leistungen/facility-services'}],
  relatedArticles:[{label:'Ratgeber: So bleibt eine Immobilie langfristig gepflegt',href:'/blog/immobilie-langfristig-gepflegt'}]
 },
 {
  slug:'gebaeudereinigung',title:'Gebäudereinigung',category:'Sauberkeit & Werterhalt',
  summary:'Abgestimmte Unterhalts-, Glas- und Grundreinigung sorgt für verlässlich gepflegte Flächen, ohne betriebliche Abläufe unnötig zu stören.',
  intro:'Professionelle Gebäudereinigung entsteht durch ein passendes Leistungsverzeichnis, realistische Intervalle und kontrollierte Ausführung für jede Gewerbefläche.',
  details:['Objektbezogene Reinigungspläne und klar definierte Intervalle','Unterhalts-, Glas-, Rahmen-, Grund- und Sonderreinigung','Qualitätskontrollen mit direkter Rückmeldung bei Abweichungen'],
  areas:['Büros, Empfangs- und Besprechungsbereiche','Treppenhäuser, Sanitär- und Gemeinschaftsflächen','Gewerbeflächen mit laufendem Publikums- oder Mitarbeiterbetrieb'],
  image:'/images/projects/flur-innen.png',imageAlt:'Gepflegtes Treppenhaus mit gereinigtem Natursteinboden',imagePosition:'52% 58%',
  metaTitle:'Professionelle Gebäudereinigung für Gewerbe',
  metaDescription:'Gebäudereinigung für Gewerbeimmobilien im Rhein-Main-Gebiet: abgestimmte Intervalle, passende Verfahren und nachvollziehbare Qualitätskontrollen.',
  detailHeading:'Sauberkeit passend zur Nutzung planen.',
  benefit:'Verwaltungen erhalten planbare Leistungen und transparente Ansprechpartner; Unternehmen profitieren von gepflegten Arbeits- und Besucherbereichen, die zum tatsächlichen Nutzungsrhythmus passen.',
  benefitTitle:'Gepflegte Flächen ohne unnötige Unterbrechungen.',
  relatedServices:[{label:'Regelmäßige Unterhaltsreinigung',href:'/leistungen/unterhaltsreinigung'},{label:'Sonderreinigung für besondere Anforderungen',href:'/leistungen/sonderreinigung'},{label:'Professionelle Parkhausreinigung',href:'/leistungen/parkhausreinigung'}],
  relatedArticles:[{label:'Ratgeber: Hartnäckige Flecken materialschonend entfernen',href:'/blog/hartnaeckige-flecken-entfernen'}]
 },
 {
  slug:'unterhaltsreinigung',title:'Unterhaltsreinigung',category:'Regelmäßige Reinigung',
  summary:'Die Unterhaltsreinigung hält regelmäßig genutzte Innenbereiche mit abgestimmten Aufgaben, Intervallen und Qualitätskontrollen dauerhaft gepflegt.',
  intro:'Für Büros, Verwaltungsflächen und gemeinschaftlich genutzte Bereiche planen wir eine regelmäßige Gebäudereinigung, die zu Nutzung, Frequenz und Betriebszeiten passt.',
  details:['Reinigung von Böden, Oberflächen und Kontaktpunkten nach Leistungsverzeichnis','Pflege von Sanitär-, Küchen- und Gemeinschaftsbereichen','Abgestimmte Intervalle, feste Teams und laufende Qualitätskontrollen'],
  areas:['Büro- und Verwaltungsgebäude','Empfangs-, Sanitär- und Gemeinschaftsflächen','Gewerbeobjekte mit regelmäßigem Mitarbeiter- oder Publikumsverkehr'],
  image:'/images/projects/flur-innen.png',imageAlt:'Gepflegtes Treppenhaus mit gereinigtem Natursteinboden',imagePosition:'52% 64%',
  metaTitle:'Unterhaltsreinigung für Gewerbeimmobilien',
  metaDescription:'Unterhaltsreinigung für Büros und Gewerbeimmobilien: Perlas plant Aufgaben, Reinigungsintervalle und Qualitätskontrollen passend zum laufenden Betrieb.',
  detailHeading:'Regelmäßige Reinigung klar definieren.',
  overview:['Anders als eine einmalige Grund- oder Sonderreinigung ist die Unterhaltsreinigung auf wiederkehrende Aufgaben ausgelegt. Ein objektspezifisches Leistungsverzeichnis legt fest, welche Flächen in welchem Rhythmus bearbeitet werden.','Hausverwaltungen und Unternehmen erhalten dadurch einen planbaren Gebäudeservice. Veränderungen in Nutzung oder Belegung können in die Einsatzplanung einfließen, ohne jeden Reinigungsgang neu beauftragen zu müssen.'],
  benefit:'Klare Leistungsbeschreibungen und feste Kontrollwege machen die Reinigungsqualität nachvollziehbar. Gleichzeitig lassen sich Einsätze so organisieren, dass Arbeitsabläufe, Besucherzeiten und sensible Bereiche berücksichtigt werden.',
  benefitTitle:'Verlässliche Sauberkeit im laufenden Betrieb.',
  relatedServices:[{label:'Gebäudereinigung im Überblick',href:'/leistungen/gebaeudereinigung'},{label:'Sonderreinigung für intensive Aufgaben',href:'/leistungen/sonderreinigung'}]
 },
 {
  slug:'aussenanlagenpflege',title:'Außenanlagenpflege',category:'Außenbereiche',
  summary:'Eine abgestimmte Außenanlagenpflege hält Wege, Plätze und Randflächen sauber, zugänglich und passend zum Erscheinungsbild der Immobilie.',
  intro:'Außenflächen prägen den ersten Eindruck einer Gewerbeimmobilie. Perlas koordiniert wiederkehrende Pflegegänge und saisonale Aufgaben rund um das Objekt.',
  details:['Reinigung und Sichtkontrolle von Wegen, Plätzen und Grauflächen','Laub-, Abfall- und Wildwuchsbeseitigung in vereinbarten Bereichen','Abstimmung saisonaler Aufgaben mit Grünpflege und Winterdienst'],
  areas:['Büro- und Gewerbeimmobilien','Business-Campus, Gewerbeparks und Verwaltungsstandorte','Wohnanlagen und gemischt genutzte Objekte'],
  image:'/images/projects/wohnanlage-aussenpflege.png',imageAlt:'Gepflegter Außenbereich einer betreuten Wohnanlage',imagePosition:'50% 62%',
  metaTitle:'Außenanlagenpflege für Gewerbeimmobilien',
  metaDescription:'Außenanlagenpflege für Gewerbeimmobilien: Perlas pflegt Wege, Plätze und Randflächen und koordiniert Grünpflege sowie saisonale Aufgaben.',
  detailHeading:'Außenbereiche ganzjährig gepflegt halten.',
  overview:['Die Außenanlagenpflege verbindet Sauberkeit, Ordnung und einen aufmerksamen Blick auf Veränderungen. Sie betrifft befestigte Wege und Plätze ebenso wie Übergänge zu Grünflächen und stark beanspruchte Eingangsbereiche.','Grünpflege ist dabei eine spezialisierte ergänzende Leistung für Rasen, Hecken und Pflanzflächen. In der kalten Jahreszeit kann ein vorbereiteter Winterdienst die sichere Nutzbarkeit definierter Verkehrsflächen ergänzen.'],
  benefit:'Hausverwaltungen und Unternehmen erhalten abgestimmte Pflegeintervalle statt vieler spontaner Einzelaufträge. Auffälligkeiten an Wegen oder Randbereichen können dokumentiert und frühzeitig weitergegeben werden.',
  benefitTitle:'Ein gepflegter erster Eindruck zu jeder Jahreszeit.',
  relatedServices:[{label:'Saisonale Grünpflege ergänzen',href:'/leistungen/gruenpflege'},{label:'Winterdienst für definierte Außenflächen',href:'/leistungen/winterdienst'}]
 },
 {
  slug:'gruenpflege',title:'Grünpflege',category:'Grün & Freiflächen',
  summary:'Saisonal abgestimmte Pflege hält Grünflächen gesund, Wege zugänglich und Außenanlagen dauerhaft repräsentativ.',
  intro:'Rasen, Hecken und Pflanzflächen benötigen unterschiedliche Pflegezeitpunkte. Wir planen Grünpflege über das Jahr und stimmen sie mit Nutzung und Zugängen ab.',
  details:['Saisonplanung für Rasen-, Wiesen- und Pflanzflächen','Fachgerechter Hecken- und Strauchschnitt in abgestimmten Zeitfenstern','Pflegegänge inklusive Laub-, Schnittgut- und Sauberkeitskontrolle'],
  areas:['Außenanlagen von Büro- und Gewerbeobjekten','Innenhöfe und gemeinschaftlich genutzte Grünflächen','Zuwegungen, Randflächen und Gewerbegrundstücke'],
  image:'/images/projects/wohnanlage-aussenpflege.png',imageAlt:'Gepflegte Grün- und Wegeflächen an einer Wohnanlage',imagePosition:'50% 70%',
  metaTitle:'Grünpflege für Gewerbeobjekte und Außenanlagen',
  metaDescription:'Planbare Grünpflege für Gewerbeobjekte: Perlas pflegt Rasen, Hecken und Pflanzflächen saisonal abgestimmt und hält Außenanlagen repräsentativ.',
  detailHeading:'Grünflächen über das Jahr sinnvoll pflegen.',
  benefit:'Eine planbare Jahrespflege reduziert spontane Einzelbeauftragungen. Hausverwaltungen und Unternehmen erhalten gepflegte Außenflächen, abgestimmte Termine und einen klaren Überblick über saisonal anstehende Arbeiten.',
  benefitTitle:'Saisonale Pflege mit verlässlichem Plan.',
  relatedServices:[{label:'Außenanlagenpflege für Wege und Plätze',href:'/leistungen/aussenanlagenpflege'},{label:'Winterdienst frühzeitig vorbereiten',href:'/leistungen/winterdienst'}]
 },
 {
  slug:'winterdienst',title:'Winterdienst',category:'Saisonale Sicherheit',
  summary:'Definierte Räum- und Streuflächen, vorbereitete Bereitschaften und dokumentierte Einsätze schaffen verlässliche Abläufe in der Wintersaison.',
  intro:'Winterdienst für Gewerbeimmobilien beginnt vor dem ersten Frost. Flächen, Prioritäten, Zugangszeiten und Kommunikationswege werden vorab eindeutig abgestimmt.',
  details:['Saisonvorbereitung mit Flächen- und Prioritätenplan','Wettermonitoring sowie organisierte Räum- und Streubereitschaft','Zeitnahe Einsatzdokumentation für Verwaltung und Auftraggeber'],
  areas:['Gehwege, Eingangsbereiche und Verbindungspfade','Zufahrten, Ladezonen und betriebliche Verkehrsflächen','Parkplätze und klar definierte Teilflächen von Gewerbeobjekten'],
  image:'/images/services/winterdienst-hero.jpg',imageAlt:'Mitarbeiter beim Räumen eines verschneiten Wegs zwischen Gewerbegebäuden',imagePosition:'56% 52%',
  benefitImage:'/images/services/winterdienst-vorteile.jpg',benefitImageAlt:'Mitarbeiter streut einen geräumten Zugangsweg zu einer Gewerbeimmobilie',
  metaTitle:'Winterdienst für Gewerbeimmobilien Rhein-Main',
  metaDescription:'Winterdienst für Gewerbeimmobilien im Rhein-Main-Gebiet: Flächenplanung, Bereitschaft und nachvollziehbare Räum- und Streudokumentation.',
  detailHeading:'Vorbereitet durch die Wintersaison.',
  benefit:'Verwaltungen und Unternehmen erhalten vorab geklärte Zuständigkeiten statt kurzfristiger Improvisation. Dokumentierte Abläufe erleichtern die interne Nachvollziehbarkeit und sorgen für planbare Kommunikation während der Saison.',
  benefitTitle:'Klare Zuständigkeiten bei Frost und Schnee.',
  relatedServices:[{label:'Außenanlagenpflege ganzjährig organisieren',href:'/leistungen/aussenanlagenpflege'},{label:'Objektbetreuung als koordinierende Leistung',href:'/leistungen/objektbetreuung'}],
  relatedArticles:[{label:'Ratgeber: Winterdienst für Gewerbeimmobilien planen',href:'/blog/winterdienst-gewerbeimmobilien'}]
 },
 {
  slug:'hausmeisterservice',title:'Hausmeisterservice',category:'Service vor Ort',
  summary:'Der Hausmeisterservice übernimmt klar vereinbarte Kontrollen, kleinere praktische Aufgaben und Rückmeldungen aus dem täglichen Objektbetrieb.',
  intro:'Als definierte Einzelleistung ergänzt der Hausmeisterservice die professionelle Objektbetreuung von Gewerbeobjekten und größeren Immobilien.',
  details:['Regelmäßige Kontrollgänge und Weitergabe sichtbarer Auffälligkeiten','Kleinere, klar abgegrenzte Reparatur- und Serviceaufgaben','Unterstützung bei Nutzeranliegen und Koordination vereinbarter Zugänge'],
  areas:['Büro- und Gewerbeobjekte','Wohnanlagen und gemischt genutzte Immobilien','Gemeinschaftsflächen und Verwaltungsstandorte'],
  image:'/images/perlas-hero-concept.png',imageAlt:'Mitarbeiter bei der Kontrolle einer modernen Gewerbeimmobilie',imagePosition:'68% 44%',
  metaTitle:'Hausmeisterservice für Gewerbeobjekte Rhein-Main',
  metaDescription:'Hausmeisterservice für Gewerbeobjekte im Rhein-Main-Gebiet: regelmäßige Kontrollen, praktische Aufgaben und verlässliche Rückmeldungen an Verwaltungen.',
  detailHeading:'Präsenz und praktische Hilfe vor Ort.',
  overview:['Der Hausmeisterservice konzentriert sich auf konkrete Aufgaben im Objektalltag. Leistungsumfang und Grenzen werden vorab festgelegt, damit Ansprechpartner, Nutzer und Verwaltung wissen, welche Themen direkt übernommen oder an Fachfirmen weitergegeben werden.','Im Unterschied zur ganzheitlichen Objektbetreuung steht hier die operative Präsenz im Vordergrund. Wenn mehrere Dienstleister, Dokumentation und übergreifende Abläufe koordiniert werden sollen, ist eine umfassendere Objektbetreuung oder ein Facility-Services-Paket sinnvoll.'],
  benefit:'Hausverwaltungen und Unternehmen gewinnen einen erreichbaren Ansprechpartner für vereinbarte Alltagsthemen. Kleine Auffälligkeiten bleiben nicht unbemerkt und zuständige Fachpartner können bei Bedarf gezielt eingebunden werden.',
  benefitTitle:'Ein verlässlicher Ansprechpartner für den Objektalltag.',
  relatedServices:[{label:'Professionelle Objektbetreuung für das Gesamtobjekt',href:'/leistungen/objektbetreuung'},{label:'Technische Objektbetreuung für Anlagen und Störungen',href:'/leistungen/technische-objektbetreuung'}]
 },
 {
  slug:'technische-objektbetreuung',title:'Technische Objektbetreuung',category:'Technische Services',
  summary:'Wiederkehrende Sicht- und Funktionskontrollen, klare Störungsmeldungen und koordinierte Fachpartner unterstützen einen verlässlichen Gebäudebetrieb.',
  intro:'Technische Objektbetreuung beobachtet sichtbare Zustände und vereinbarte Funktionen, dokumentiert Abweichungen und koordiniert die nächsten Schritte.',
  details:['Definierte Sicht- und Funktionskontrollen an zugänglichen Anlagen','Strukturierte Störungsaufnahme, Priorisierung und Weiterleitung','Termin- und Zugangskoordination mit qualifizierten Fachfirmen'],
  areas:['Technikräume und zugängliche Gebäudetechnik','Beleuchtung, Türen, Tore und sichtbare Versorgungseinrichtungen','Büro-, Gewerbe- und Verwaltungsimmobilien'],
  image:'/images/projects/einsatzfahrzeug-gewerbeobjekt.png',imageAlt:'Perlas Einsatzfahrzeug vor einem betreuten Gewerbeobjekt',imagePosition:'50% 50%',
  metaTitle:'Technische Objektbetreuung für Immobilien',
  metaDescription:'Technische Objektbetreuung für Gewerbeimmobilien: Perlas kontrolliert definierte Funktionen, dokumentiert Störungen und koordiniert Fachfirmen.',
  detailHeading:'Technische Auffälligkeiten strukturiert bearbeiten.',
  overview:['Die Leistung ersetzt keine gesetzlich vorgeschriebene Prüfung und keine Facharbeit durch qualifizierte Gewerke. Sie schafft jedoch geregelte Kontrollpunkte und sorgt dafür, dass sichtbare Abweichungen nicht zwischen verschiedenen Zuständigkeiten verloren gehen.','Objektkontrollen betrachten vereinbarte Bereiche des gesamten Objekts. Die technische Objektbetreuung fokussiert dagegen auf technische Zustände, Störungsmeldungen und die nachvollziehbare Koordination zuständiger Fachpartner.'],
  benefit:'Verwaltungen und Unternehmen erhalten verständliche Meldungen, dokumentierte Bearbeitungsstände und einen koordinierten Zugang für Fachfirmen. Das reduziert Rückfragen und macht offene technische Themen leichter nachvollziehbar.',
  benefitTitle:'Störungen erkennen und Zuständigkeiten klären.',
  relatedServices:[{label:'Objektkontrollen für wiederkehrende Begehungen',href:'/leistungen/objektkontrollen'},{label:'Objektbetreuung für übergreifende Koordination',href:'/leistungen/objektbetreuung'},{label:'Technische und infrastrukturelle Facility Services bündeln',href:'/leistungen/facility-services'}]
 },
 {
  slug:'facility-services',title:'Facility Services',category:'Integrierte Lösungen',
  summary:'Facility Services bündeln ausgewählte infrastrukturelle und technische Gebäudeservices in einem abgestimmten Betreuungskonzept.',
  intro:'Perlas verbindet mehrere Leistungen für Gewerbeimmobilien zu klaren Abläufen – mit einem zentralen Ansprechpartner für Haus- und Immobilienverwaltungen sowie Unternehmen.',
  details:['Zentrale Koordination von Objektbetreuung, Reinigung und Außenpflege','Objektbezogene Leistungspakete mit abgestimmten Intervallen und Zuständigkeiten','Regelmäßige Dokumentation, Qualitätsrückmeldungen und Koordination von Fachpartnern'],
  areas:['Einzelne Gewerbeimmobilien und Verwaltungsstandorte','Gewerbeportfolios mit wiederkehrenden Anforderungen','Institutionell oder gemischt genutzte Objekte'],
  image:'/images/perlas-praxis-concept.jpg',imageAlt:'Mitarbeitende bei der maschinellen Objektpflege in einer Tiefgarage',imagePosition:'48% 52%',
  metaTitle:'Facility Services & Facility Management für Gewerbe',
  metaDescription:'Facility Services für Gewerbeimmobilien: Perlas bündelt Gebäudeservices, koordiniert Ansprechpartner und unterstützt ein ganzheitliches Facility Management.',
  detailHeading:'Gebäudeservices sinnvoll miteinander verbinden.',
  overview:['Unter Facility Services versteht Perlas ein objektspezifisches Paket aus Leistungen, die im laufenden Gebäudebetrieb ineinandergreifen. Dazu können Objektbetreuung, Gebäudereinigung, Außenanlagenpflege, Winterdienst, technische Kontrollen und die Koordination externer Fachpartner gehören.','Ein zentraler Ansprechpartner führt Informationen zusammen, stimmt Intervalle ab und hält vereinbarte Qualitäts- und Dokumentationswege nach. So unterstützen unsere operativen Facility Services das Facility Management von Hausverwaltungen und Unternehmen, ohne für jedes Thema eine neue Schnittstelle zu schaffen.','Welche Gebäudeservices kombiniert werden, richtet sich nach Objektart, Nutzung und vorhandenen Zuständigkeiten. Einzelne Leistungen bleiben klar beschrieben und kontrollierbar; gleichzeitig werden Überschneidungen und unnötige Abstimmungsschleifen reduziert.'],
  benefit:'Hausverwaltungen, Unternehmen und institutionelle Auftraggeber erhalten ein abgestimmtes Betreuungskonzept statt vieler unverbundener Einzelaufträge. Ein zentraler Kontakt bündelt Rückmeldungen, koordiniert Termine und schafft einen nachvollziehbaren Überblick über den laufenden Objektbetrieb.',
  benefitTitle:'Ein Ansprechpartner für abgestimmte Facility Services.',
  relatedServices:[{label:'Objektbetreuung als koordinierende Basis',href:'/leistungen/objektbetreuung'},{label:'Professionelle Gebäudereinigung',href:'/leistungen/gebaeudereinigung'},{label:'Außenanlagenpflege rund um die Immobilie',href:'/leistungen/aussenanlagenpflege'},{label:'Technische Objektbetreuung integrieren',href:'/leistungen/technische-objektbetreuung'}],
  relatedArticles:[{label:'Ratgeber: Immobilien langfristig gepflegt halten',href:'/blog/immobilie-langfristig-gepflegt'}]
 },
 {
  slug:'sonderreinigung',title:'Sonderreinigung',category:'Spezialaufgaben',
  summary:'Sonderreinigungen behandeln besondere Verschmutzungen, Oberflächen oder einmalige Situationen mit einem abgestimmten Verfahren.',
  intro:'Wenn die laufende Unterhaltsreinigung nicht ausreicht, prüfen wir Material, Verschmutzung und gewünschtes Ergebnis vor der Ausführung.',
  details:['Grund- und Intensivreinigung nach Prüfung der vorhandenen Oberfläche','Bauendreinigung und abgestimmte Reinigung nach besonderen Arbeiten','Materialgerechte Behandlung hartnäckiger Verschmutzungen mit Probefläche'],
  areas:['Naturstein, beschichtete Böden und robuste Gewerbeflächen','Büro-, Verkehrs- und Gemeinschaftsflächen mit besonderem Reinigungsbedarf','Einmalige Aufgaben nach Umbau, Nutzungsspitzen oder längeren Pflegeintervallen'],
  image:'/images/perlas-ratgeber-concept.jpg',imageAlt:'Mitarbeiter bei der maschinellen Reinigung einer Gewerbefläche',imagePosition:'74% 56%',
  metaTitle:'Professionelle Sonderreinigung für Gewerbeflächen',
  metaDescription:'Professionelle Sonderreinigung für Gewerbeflächen: Perlas stimmt Verfahren und Reinigungsmittel auf Verschmutzung, Material und Nutzung ab.',
  detailHeading:'Besondere Verschmutzungen kontrolliert behandeln.',
  overview:['Eine Sonderreinigung ist kein stärkerer Standard-Reinigungsgang. Vor Beginn werden Oberfläche, Beschichtung und Art der Verschmutzung beurteilt. Bei Bedarf zeigt eine kleine Probefläche, ob das geplante Verfahren materialverträglich ist.','Die Unterhaltsreinigung deckt wiederkehrende Pflegeaufgaben ab. Sonderreinigungen werden dagegen gezielt für intensive, seltene oder materialabhängige Aufgaben geplant und können anschließend wieder in einen regelmäßigen Pflegezyklus übergehen.'],
  benefit:'Hausverwaltungen und Unternehmen erhalten ein nachvollziehbar ausgewähltes Verfahren statt pauschaler Intensivreinigung. Das schützt empfindliche Oberflächen und macht Aufwand, Grenzen und erwartbares Ergebnis transparent.',
  benefitTitle:'Passende Verfahren statt pauschaler Intensität.',
  relatedServices:[{label:'Gebäudereinigung planbar organisieren',href:'/leistungen/gebaeudereinigung'},{label:'Unterhaltsreinigung für die laufende Pflege',href:'/leistungen/unterhaltsreinigung'},{label:'Parkhausreinigung für große Verkehrsflächen',href:'/leistungen/parkhausreinigung'}],
  relatedArticles:[{label:'Ratgeber: Hartnäckige Flecken professionell entfernen',href:'/blog/hartnaeckige-flecken-entfernen'}]
 },
 {
  slug:'parkhausreinigung',title:'Parkhausreinigung',category:'Spezialreinigung',
  summary:'Maschinelle, abschnittsweise Reinigung entfernt typische Belastungen von Verkehrsflächen und berücksichtigt Zugänglichkeit, Entwässerung und laufende Nutzung.',
  intro:'In Parkhäusern und Tiefgaragen treffen Staub, Reifenabrieb, Ölspuren und Salzrückstände auf stark beanspruchte Böden. Verfahren und Sperrabschnitte werden passend geplant.',
  details:['Kehrsaug- und Scheuerreinigung abgestimmt auf Boden und Beschichtung','Gezielte Behandlung von Fahrspuren, Randzonen und hartnäckigen Rückständen','Abschnittsplanung, Beschilderung und Abschlusskontrolle bei laufender Nutzung'],
  areas:['Tiefgaragen und mehrgeschossige Parkhäuser','Fahrgassen, Stellplätze, Rampen und Randbereiche','Zufahrten und angeschlossene Verkehrsflächen'],
  image:'/images/projects/parkdeck-perlas-fahrzeug.png',imageAlt:'Perlas Einsatzfahrzeug auf einem betreuten Parkdeck',imagePosition:'72% 58%',
  benefitImage:'/images/projects/parkdeck-fahrzeug-detail.png',benefitImageAlt:'Perlas Servicefahrzeug auf einem Parkdeck',
  metaTitle:'Parkhausreinigung & Tiefgaragenreinigung',
  metaDescription:'Parkhaus- und Tiefgaragenreinigung für Gewerbeobjekte: Perlas plant Maschinen, Verfahren und Reinigungsabschnitte passend zu Fläche und Betrieb.',
  detailHeading:'Verkehrsflächen abschnittsweise reinigen.',
  benefit:'Hausverwaltungen und Betreiber erhalten einen planbaren Ablauf mit möglichst geringen Nutzungseinschränkungen. Die regelmäßige Pflege verbessert den Gesamteindruck und hilft, starke Ablagerungen frühzeitig zu begrenzen.',
  benefitTitle:'Planbare Reinigung bei laufender Nutzung.',
  relatedServices:[{label:'Gebäudereinigung für weitere Gewerbeflächen',href:'/leistungen/gebaeudereinigung'},{label:'Sonderreinigung bei hartnäckigen Rückständen',href:'/leistungen/sonderreinigung'}],
  relatedArticles:[{label:'Lesen Sie auch: Warum regelmäßige Parkhausreinigung wichtig ist',href:'/blog/parkhausreinigung-wichtig'}]
 },
 {
  slug:'objektkontrollen',title:'Objektkontrollen',category:'Kontrolle & Dokumentation',
  summary:'Wiederkehrende Objektkontrollen erfassen vereinbarte Bereiche nach einem klaren Prüfplan und führen Auffälligkeiten nachvollziehbar zusammen.',
  intro:'Regelmäßige Begehungen schaffen Transparenz über sichtbare Veränderungen und helfen, Handlungsbedarf rechtzeitig an die zuständige Stelle zu melden.',
  details:['Objektspezifische Kontrollpunkte und vereinbarte Begehungsintervalle','Fotodokumentation mit eindeutigem Ortsbezug und verständlicher Beschreibung','Priorisierte Mängelmeldung und Nachverfolgung des Bearbeitungsstands'],
  areas:['Leerstände und zeitweise ungenutzte Flächen','Büro-, Verwaltungs- und Gewerbeobjekte','Gemeinschaftsflächen, Technikzugänge und Außenbereiche'],
  image:'/images/projects/wohnobjekt-aussen.png',imageAlt:'Betreutes Wohnobjekt mit Außen- und Gemeinschaftsflächen',imagePosition:'50% 42%',
  metaTitle:'Objektkontrollen für Gewerbeimmobilien',
  metaDescription:'Objektkontrollen für Gewerbeimmobilien: Perlas prüft vereinbarte Bereiche, dokumentiert Auffälligkeiten und meldet Handlungsbedarf nachvollziehbar.',
  detailHeading:'Auffälligkeiten strukturiert erfassen.',
  overview:['Objektkontrollen konzentrieren sich auf vorher definierte Sichtprüfungen. Sie ersetzen weder technische Fachprüfungen noch Instandhaltungsarbeiten, sorgen aber dafür, dass erkennbare Veränderungen regelmäßig erfasst und richtig adressiert werden.','In einer umfassenden Objektbetreuung können die Kontrollergebnisse mit weiteren Leistungen und Zuständigkeiten zusammengeführt werden. Als Einzelleistung eignen sich Objektkontrollen besonders, wenn Verwaltungen für bestimmte Bereiche einen dokumentierten, wiederkehrenden Blick vor Ort benötigen.'],
  benefit:'Hausverwaltungen und Unternehmen erhalten verständliche Meldungen statt unstrukturierter Einzelhinweise. Fotos, Prioritäten und Bearbeitungsstände erleichtern Entscheidungen und reduzieren Rückfragen zwischen Objekt, Verwaltung und Fachpartnern.',
  benefitTitle:'Nachvollziehbare Informationen für schnelle Entscheidungen.',
  relatedServices:[{label:'Objektbetreuung für die weitere Koordination',href:'/leistungen/objektbetreuung'},{label:'Technische Objektbetreuung für Anlagen und Funktionen',href:'/leistungen/technische-objektbetreuung'}],
  relatedArticles:[{label:'Ratgeber: So bleibt eine Immobilie langfristig gepflegt',href:'/blog/immobilie-langfristig-gepflegt'}]
 }
]

export const featuredServices=services.filter(s=>['objektbetreuung','gebaeudereinigung','aussenanlagenpflege','winterdienst','hausmeisterservice','facility-services'].includes(s.slug))
