# CHANGELOG — waltermassimiliani.it

## v2.2 — Release Candidate 1.0 (rifinitura finale)
Data: luglio 2026

Vedi RELEASE_NOTES.md per il dettaglio completo di ogni modifica e motivazione. In sintesi:

- Design system uniformato (bottoni, card, header con effetto scroll, footer editoriale)
- Breadcrumb visibile + Schema.org `BreadcrumbList` su tutte le 13 pagine interne
- Articoli dell'Osservatorio arricchiti con tempo di lettura, ultimo aggiornamento, articoli correlati
- Ritmo della Biografia migliorato con timeline e layout testo/immagine
- Performance: preload immagini hero, CSS minificato (13,9 KB → 11,3 KB)
- Accessibilità: aria-label su navigazione e breadcrumb, aria-current sul link attivo
- Corretto un residuo di riferimento diretto alla Polizia di Stato fuori dalla Biografia (devianza.html)

## v2.1 — Correzioni tecniche post-revisione
Data: luglio 2026

Interventi applicati a seguito della revisione tecnica finale pre-pubblicazione (nessun errore bloccante rilevato, 5 errori importanti sistemati):

- Aggiunto `twitter:card` (summary_large_image) alle 13 pagine che ne erano prive
- Aggiunto Schema.org mancante su 6 pagine: `Person` su Biografia, `WebPage` su Devianza Giovanile/Media/Attività Divulgative, `Blog` su Osservatorio-indice, `ContactPage` su Contatti
- Aggiunto `loading="lazy"` a tutte le immagini sotto la piega (13 immagini su 4 pagine); mantenuto `loading="eager"` sulle 3 immagini above-the-fold (hero Home, hero Biografia, hero Il Libro)
- Aggiunti attributi `width`/`height` reali a tutte le immagini per prevenire Cumulative Layout Shift
- Creata pagina `404.html` personalizzata, coerente con lo stile del sito, con `noindex` e link di ritorno

## v2.0 — Redesign minimalista
Data: luglio 2026

**Riposizionamento strategico**
- Nuovo posizionamento: "Autore e analista dei fenomeni della criminalità giovanile organizzata e delle reti criminali transnazionali"
- Ruolo Polizia di Stato rimosso da Home/hero come elemento di marketing; confinato alla pagina Biografia, narrato come esperienza professionale (non come autorità istituzionale)
- Nuova sezione "Metodo di analisi" (Esperienza / Ricerca / Divulgazione)
- "Blog" rinominato "Osservatorio", con card in stile dossier (categoria, data, abstract)
- "Rassegna Stampa" rinominata "Media", linguaggio corretto ("Interventi e approfondimenti nei media nazionali" invece di "principali testate")
- "Eventi & Formazione" rinominato "Attività Divulgative", rimosso linguaggio "formazione" e ogni catalogo corsi

**Correzioni fattuali**
- CORRETTO: "quarta edizione" si riferisce alla rassegna Dark Side (Vasanello), non al libro — corretto ovunque compariva
- AGGIUNTO: il giornalista Gianluca Zanella come conduttore della presentazione di Vasanello
- CORRETTO: claim sul libro riformulato per evitare affermazioni assolute non contestualizzate

**Design system**
- Nuova identità visiva: palette bianco/nero/bordeaux (#7A1F2B), tipografia Cormorant Garamond (titoli) + Inter (corpo)
- Sostituisce lo stile precedente "fascicolo investigativo" (inchiostro/carta/timbri)

**SEO tecnico (chiusura gap critici audit Sprint 1)**
- Aggiunti tag Open Graph completi su tutte le pagine (og:title, og:description, og:image, og:url)
- Aggiunto Schema.org: Person (Home), Book (Il Libro), Article (6 articoli Osservatorio)
- Aggiunta sitemap.xml
- Aggiunto robots.txt
- Font caricati con preconnect invece di @import (riduce tempo di rendering)
- Canonical link su tutte le pagine

**Contenuti**
- Bio aggiornata con ruolo di Dirigente Sindacale FSP Polizia di Stato e collaborazione quinquennale con Dipartimento di Scienze Giuridiche e Sociali, Università G. d'Annunzio di Chieti-Pescara
- Aggiunto Premio Internazionale Ovidio 2024 (3° posto, Sez. A Narrativa edita) tra i riconoscimenti
- Rassegna Media ampliata con oltre 20 fonti verificate (Rai Tre, Panorama, La Stampa, InsideOver, Polizia Moderna, Dark Side, testate locali)
- Aggiunta cronologia reale di 5 eventi/convegni con date, luoghi e relatori verificati
- Aggiunta gallery fotografica con 9 immagini reali (presentazioni, Salone del Libro, Premio Ovidio, incontri istituzionali con On. Nicola Molteni, magistrato Nicola Gratteri, scrittore Roberto Saviano)
- Aggiunti 3 nuovi articoli all'Osservatorio: "Il codice segreto delle pandillas", "Baby gang, street gang, pandillas: la storia del fenomeno in Italia", "Delle gang e di altri comportamenti devianti"

**Rimosso**
- Loghi media non verificati (Corriere della Sera, La Repubblica, Il Sole 24 Ore) presenti in una bozza di design intermedia, mai pubblicati
- Titolo non verificato "Analista della Criminalità Giovanile Organizzata" come jobTitle ufficiale in Schema.org (mantenuto solo come descrizione informale)

---

## v1.0 — Sito "fascicolo investigativo" (precedente)
Data: luglio 2026

- Prima versione del sito su dominio proprio (waltermassimiliani.it), migrato da Canva/Swite
- Identità visiva "fascicolo di polizia": inchiostro, carta invecchiata, timbri, timeline delle operazioni reali (Street Fighters 2006 → Latin Kings 2023)
- Struttura: Home, Il Libro, Devianza Giovanile, Blog, L'Autore, Rassegna Stampa, Eventi & Formazione, Contatti
- Blog con 3 articoli di lancio
- Rassegna stampa con link cliccabili
- Foto e gallery aggiunte progressivamente
- Hosting: GitHub Pages con dominio personalizzato via record DNS (A record + CNAME) su Aruba

---

## Note per il changelog futuro
Ogni modifica sostanziale (nuovi articoli, nuove pagine, correzioni fattuali, cambi di design) va registrata qui con data, cosa è cambiato e perché.
