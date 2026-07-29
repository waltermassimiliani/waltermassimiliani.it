# RELEASE NOTES — waltermassimiliani.it
### Release Candidate 1.0
Data: luglio 2026

Questo documento descrive ogni modifica applicata nella rifinitura finale pre-pubblicazione, la motivazione di ciascuna, le criticità che restano aperte e alcuni suggerimenti per una futura v1.1. Nessuna sezione è stata aggiunta, nessuna architettura è cambiata, nessun tono editoriale è stato alterato: questo è un intervento di rifinitura, non un redesign.

---

## 1. Elenco completo delle modifiche

### Microtipografia
- **Paragrafi limitati a ~68 caratteri di larghezza massima** (`p { max-width: 68ch }`). *Motivazione:* una riga troppo lunga affatica la lettura; 68ch è il valore standard per una buona leggibilità editoriale, in linea con testate come il Financial Times.
- **Margini dei paragrafi aumentati** da 16px a 18px, **interlinea dei titoli** portata da 1.15 a 1.2, **margini H1/H2 leggermente aumentati**. *Motivazione:* dare più aria tra un'idea e l'altra, senza alterare le dimensioni dei font già scelte.
- **Aggiunta gerarchia H5/H6** (non usati oggi ma pronti per contenuti futuri, stesso stile di H4).

### Allineamenti e Card
- **Bottoni uniformati**: stessa altezza minima (46px), stesso padding, stesso comportamento in hover, con leggero effetto di pressione al click. *Motivazione:* in precedenza altezza e padding erano tecnicamente identici nel codice ma non "garantiti" per contenuti di lunghezza diversa; ora sono espliciti e stabili in ogni condizione.
- **Card generiche e card degli articoli uniformate**: stessa altezza all'interno della riga (`height: 100%` sui contenitori grid), stesso hover (bordo bordeaux + ombra + leggero sollevamento), stessa spaziatura interna. *Motivazione:* in precedenza le card articolo avevano un hover diverso (solo ombra, senza sollevamento) rispetto alle card generiche: ora il comportamento è identico ovunque.

### Fotografie
- **Ombra e bordo uniformati** su ritratto hero, copertina del libro e immagini della gallery (stesso valore di `box-shadow`). *Motivazione:* prima i tre componenti avevano valori di opacità dell'ombra leggermente diversi (0.06 / 0.08 / nessuna), impercettibili singolarmente ma percepibili se le pagine si confrontano una accanto all'altra.
- **Aggiunto hover con ombra più profonda sulle immagini della gallery** in Attività Divulgative. *Motivazione:* dare un minimo di feedback interattivo coerente con il resto del sito (le card e i bottoni lo hanno già).
- Nessuna immagine è stata sostituita o ritagliata diversamente da come richiesto: il crop `object-fit: cover` della gallery era già corretto e non è stato toccato nella logica, solo nell'ombra.

### Header
- **Effetto scroll aggiunto**: durante lo scroll l'header riduce leggermente altezza (80px → 64px), applica un blur leggero (`backdrop-filter: blur(8px)`) e un'ombra quasi impercettibile. *Motivazione:* è l'unico punto della richiesta che necessitava di un minimo di JavaScript; ho scritto 15 righe di script "vanilla" senza dipendenze (`header-scroll.js`, incluso su tutte le pagine) che aggiungono/rimuovono una classe CSS in base alla posizione di scroll. Nessun impatto su performance: lo script pesa meno di 1 KB e non blocca il rendering.

### Footer
- **Aggiunto il claim editoriale "Studio • Ricerca • Divulgazione"** accanto al copyright, su tutte le 15 pagine. *Motivazione:* richiesto esplicitamente al punto 8, rafforza il posizionamento "autore-ricercatore" senza aggiungere alcuna nuova sezione.

### Osservatorio
- **Tutti e 6 gli articoli ora riportano**: categoria (già presente), titolo (già presente), abstract (già presente in meta description), **tempo di lettura calcolato realmente sul conteggio delle parole** di ciascun articolo (da 2 a 5 minuti, non un valore a caso), **data di ultimo aggiornamento** (luglio 2026 — la data reale di questa revisione, non una data inventata), e **due articoli correlati per ciascun pezzo**, scelti per coerenza tematica (es. l'articolo sui codici linguistici rimanda a quello sui simboli e a quello sull'affiliazione). *Motivazione:* prima solo un articolo su sei (quello sui simboli) aveva un link correlato; ora la rete di collegamenti interni è completa e simmetrica, il che aiuta sia il lettore sia il posizionamento SEO del cluster tematico.

### Biografia
- **Aggiunta una sezione "Tappe principali"** con una timeline di 4 punti (2006 Street Fighters, 2012–2015 formazione in Questura, 2018 documentario Barrio Milano, dicembre 2023 pubblicazione di Pandillas), inserita tra "Osservazione del fenomeno" e "Studio". *Motivazione:* prima la pagina era composta da 4 blocchi di solo testo in sequenza; la timeline riusa fatti già presenti nel testo (nessuna informazione nuova) ma li presenta in un formato visivo diverso, rompendo la monotonia.
- **La sezione "Divulgazione" è stata trasformata in un layout testo + immagine** (usando la foto reale della consegna del libro), invece di un blocco di solo testo. *Motivazione:* stessa ragione — alternare testo e immagine come richiesto al punto 10.
- **Nessuna citazione è stata inserita nella Biografia** e nessun riferimento alle citazioni è presente in questa pagina. Le due citazioni reali (di Franco Gabrielli e Adriano Scudieri, estrapolate dalla prefazione e dalla postfazione del libro) restano dove erano già collocate correttamente: nella pagina Il Libro, sezione "Prefazione e postfazione" — decisione confermata con l'autore.

### Performance
- **Preload delle immagini hero** aggiunto su Home, Biografia e Il Libro (le tre pagine con un'immagine above-the-fold rilevante per il Largest Contentful Paint). *Motivazione:* dice al browser di scaricare quell'immagine prima possibile, invece di scoprirla solo dopo aver interpretato l'HTML.
- **CSS minificato**: da 13,9 KB a 11,3 KB (circa -19%). *Motivazione:* meno byte da scaricare, specialmente utile perché il file è condiviso da tutte le pagine. Ho mantenuto una copia sorgente leggibile e commentata in `style.source.css` (non collegata da nessuna pagina) per eventuali modifiche future — è più semplice modificare quella e poi ri-minificarla che lavorare direttamente sul file compresso.
- Lazy loading e attributi width/height sulle immagini erano già stati completati nell'intervento precedente (v2.1) e restano confermati.

### SEO
- **Breadcrumb visibile + Schema.org `BreadcrumbList`** aggiunto su tutte le 13 pagine interne (mancava del tutto prima). *Motivazione:* migliora sia la navigazione sia la comprensione della gerarchia del sito da parte dei motori di ricerca.
- Open Graph, Twitter Card, canonical, Schema.org di base, meta description, sitemap e robots.txt erano già stati completati e verificati nell'intervento precedente; in questa revisione ho solo controllato che nessuna delle nuove modifiche li avesse rotti (verificato: tutti intatti su tutte le pagine).

### Accessibilità
- **aria-label="Navigazione principale"** aggiunto al menu di navigazione su tutte le pagine.
- **aria-current="page"** aggiunto al link attivo nel menu (in precedenza la pagina corrente era segnalata solo visivamente con un colore diverso, non semanticamente).
- **Breadcrumb reso un elemento `<nav aria-label="breadcrumb">`** invece di un semplice `<div>`, per essere identificabile da uno screen reader.
- Il contrasto colore era già stato verificato matematicamente nell'intervento precedente (tutte le combinazioni superano WCAG AA) e non è stato toccato.

### Mobile
- **Spaziature verticali ridotte su schermi piccoli** (da 88px a 56px per sezione), per non far sembrare il sito "vuoto" scrollando su smartphone.
- **I bottoni delle CTA principali si allargano a piena larghezza sotto i 500px** di schermo, per un'area di tocco più comoda.
- **Il footer si riorganizza** su mobile mettendo il claim editoriale su una riga propria, per evitare accavallamenti.

### Controllo fattuale (punto 17)
- **Confermato corretto**: "quarta edizione" è riferita ovunque alla rassegna Dark Side di Vasanello, mai al libro.
- **Confermato assente**: nessun catalogo corsi o proposta commerciale di formazione in nessuna pagina.
- **Confermato coerente**: "Osservatorio" usato ovunque al posto di "Blog".
- **Trovato e corretto un residuo**: nella pagina Devianza Giovanile c'erano due riferimenti diretti alla "Polizia di Stato" come credenziale personale di Walter (una frase in prima persona e una card "Formazione delle forze dell'ordine" che nominava esplicitamente l'istituzione). Sono stati generalizzati in "forze dell'ordine", rimandando alla Biografia per il dettaglio istituzionale completo — così la regola "nessun riferimento al ruolo nella Polizia di Stato al di fuori della Biografia" è rispettata anche in questo punto, che era sfuggito alla revisione precedente.
- **Confermati legittimi e non modificati**: i riferimenti a "Polizia di Stato" presenti in Eventi, Il Libro e Media che descrivono fatti esterni (uno stand a una fiera, il ruolo istituzionale di un altro relatore, il nome di una rivista) — non sono Walter che usa il proprio ruolo come leva di autorità, ma la cronaca di eventi pubblici reali.

---

## 2. Criticità residue

- **Le Core Web Vitals reali (LCP, CLS, INP) non sono misurabili in questa sessione** perché il sito non è ancora raggiungibile dai miei strumenti di verifica automatica. La struttura tecnica (niente JS pesante, immagini con dimensioni dichiarate, preload sulle immagini critiche) fa ben sperare, ma raccomando una verifica reale su PageSpeed Insights entro la prima settimana dalla pubblicazione.
- **Il file `style.source.css`** (versione leggibile e commentata) è incluso nel pacchetto ma non è collegato da nessuna pagina HTML — è pensato solo come riferimento per modifiche future. Se preferisci non includerlo nel repository pubblico, può essere rimosso senza alcun effetto sul sito pubblicato.
- **Il piccolo script `header-scroll.js`** è l'unico JavaScript presente sul sito. È volutamente minimale (15 righe, nessuna dipendenza) ma è comunque una novità rispetto alla versione precedente, che non aveva JavaScript. Va tenuto d'occhio se in futuro si aggiungono altri script, per evitare che si accumulino piccoli file sparsi.

## 3. Suggerimenti per una futura v1.1

- Valutare l'aggiunta di un semplice contatore di condivisioni o un pulsante "condividi" sugli articoli dell'Osservatorio, se in futuro si vuole misurare quali temi generano più interesse.
- Se la pagina Media continua a crescere con nuove fonti, ordinarle per rilevanza (nazionale prima, locale dopo) invece che solo cronologicamente, come già suggerito in una revisione precedente.
- Considerare un feed RSS per l'Osservatorio se la frequenza di pubblicazione aumenta.
