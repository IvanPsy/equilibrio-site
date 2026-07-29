# REVISIONE CAUSALITÀ — corpus equilibrio.ivanferrero.it

> **Data**: 29 luglio 2026 · **Revisore**: revisione editoriale clinica
> **Posizione di riferimento (vincolante)**: la pornografia **non è agente causale** della disfunzione erettile. È una **condizione di contesto**. Il quadro funzionale nasce dall'interazione di condizionamento a uno script, ansia da prestazione, aspettativa, vergogna ed evitamento esperienziale. Corollario: l'uso compulsivo è **via di fuga** da un disagio preesistente, non la sua origine.

**Legenda classi**

🔴 `C1` causale forte — la pornografia provoca / danneggia / rovina
🟠 `C2` causale implicito — nesso dato per scontato dalla sintassi
🟡 `C3` contributivo — concorre insieme ad altri fattori
🟢 `C4` contestuale — coerente con la posizione di riferimento
⚪ `C5` neutro — descrittivo, nessun nesso implicato

**Legenda rischio**

🔴 `ALTO` contraddice apertamente la posizione di riferimento
🟠 `MEDIO` la implica senza dichiararla
🟢 `BASSO` già allineata

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## ⚠️ INFORMAZIONI CRITICHE IN APERTURA

1. **Le modifiche di Fase 2 sono già applicate in locale.** 29 file toccati, nessun push. `git status` era pulito prima dell'intervento: il diff che vedi è interamente questo lavoro.
2. **Nessuna riscrittura di Fase 3 è stata scritta nelle pagine.** Le proposte restano in questo file.
3. **Il baricentro del problema non è diffuso: è concentrato.** Quattro superfici reggono l'intera architettura causale (`/disfunzione-erettile-pornografia/`, `/guida-dipendenza-pornografia-pied/`, `/ansia-prestazione-sessuale/`, il report di `assets/js/assessment.js`). Sono anche le quattro che il lettore incontra nel momento di massimo intent.
4. **Due passaggi richiedono riscrittura strutturale, non una toppa** (schema del ciclo in `/disfunzione-erettile-pornografia/`, gerarchia causale in `/ansia-prestazione-sessuale/`). Segnalati in Fase 3 con la motivazione.
5. **Il corpus contiene già la voce giusta.** `/problemi-di-erezione/`, `/smettere-pornografia/`, `/marito-guarda-pornografia/` e la landing DE dicono già quello che la posizione di riferimento chiede. Non serve inventare un registro: serve estenderne uno che esiste.
6. **Interventi su titoli, H e meta description**: elencati in una sezione separata in fondo. I `<title>` non sono stati toccati.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1. TABELLA RIASSUNTIVA (esposizione decrescente)

| # | Pagina | Classe prevalente | Rischio | C1 | C2 | Nota |
|---|--------|-------------------|---------|----|----|------|
| 1 | `/disfunzione-erettile-pornografia/` | 🟠 C2 | 🔴 ALTO | 4 | 6 | Lo schema del ciclo mette la pornografia in testa alla catena causale |
| 2 | `/guida-dipendenza-pornografia-pied/` | 🟠 C2 | 🔴 ALTO | 4 | 5 | Pillar: "PIED = manifestazione di questo meccanismo" |
| 3 | `/ansia-prestazione-sessuale/` | 🟢 C4 | 🔴 ALTO | 2 | 1 | Una frase inverte esplicitamente la posizione di riferimento |
| 4 | `assets/js/assessment.js` (report di `/autovalutazione/`) | 🟠 C2 | 🔴 ALTO | 2 | 3 | Restituzione personalizzata, letta al massimo intent |
| 5 | `/erezione-masturbazione-non-partner/` | 🟡 C3 | 🔴 ALTO | 1 | 2 | Unico "causa" esplicito del corpus |
| 6 | `/pornografia-relazione-coppia/` | 🟡 C3 | 🟠 MEDIO | 2 | 3 | "il danno che la pornografia infligge" |
| 7 | `/` (homepage) | 🟠 C2 | 🟠 MEDIO | 0 | 3 | Sezione PIED |
| 8 | `/disfunzione-erettile-giovani/` | 🟢 C4 | 🟠 MEDIO | 1 | 1 | "la causa in crescita più rapida" |
| 9 | `/test-dipendenza-pornografia/` | 🟡 C3 | 🟠 MEDIO | 1 | 1 | "che genera disfunzione erettile" |
| 10 | `/guida-autovalutazione/` | 🟠 C2 | 🟠 MEDIO | 1 | 1 | "il PIED, la disfunzione erettile da pornografia" |
| 11 | `/disfunzione-erettile-psicologica-cause/` | 🟢 C4 | 🟠 MEDIO | 0 | 2 | "Il risultato:" in un articolo per il resto allineato |
| 12 | `/come-smettere-guardare-pornografia/` | 🟢 C4 | 🟠 MEDIO | 0 | 2 | Coda fisiologica in fondo a un pezzo allineato |
| 13 | `/blog/` | 🟠 C2 | 🟠 MEDIO | 0 | 2 | Etichette di navigazione in voce paziente |
| 14 | `/dipendenza-pornografia/` | 🟢 C4 | 🟢 BASSO | 0 | 1 | Impianto Grubbs: già la posizione di riferimento |
| 15 | `/marito-guarda-pornografia/` | 🟢 C4 | 🟢 BASSO | 0 | 1 | "Nasce come risposta a stress, noia, ansia o solitudine" |
| 16 | `/smettere-pornografia/` | 🟢 C4 | 🟢 BASSO | 0 | 1 | Funzioni, coping, vergogna: modello di voce |
| 17 | `/problemi-di-erezione/` | 🟢 C4 | 🟢 BASSO | 0 | 0 | "è una taratura, e le tarature si possono rivedere" |
| 18 | `/disfunzione-erettile-psicologica/` | 🟢 C4 | 🟢 BASSO | 0 | 0 | Pornografia mai nominata, entra come "abitudini digitali e sessuali" |
| 19 | `/depressione-ansia-sessualita/` | ⚪ C5 | 🟢 BASSO | 0 | 0 | Nessun nesso pornografia/effetti |
| 20 | `/chiedere-aiuto/` | ⚪ C5 | 🟢 BASSO | 0 | 0 | — |
| 21 | `/autovalutazione-de/` | ⚪ C5 | 🟢 BASSO | 0 | 0 | IIEF-5 puro, nessun item pornografia |
| 22 | `/come-funziona/` · `/contatto/` · `/bonus-psicologo/` · `/guida-de/` · `/informativa-assessment/` · ausiliarie | ⚪ C5 | 🟢 BASSO | 0 | 0 | Superfici di servizio |

**Totale**: 18 frasi C1 · 34 frasi C2 su 22 superfici.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 2. FASE 3 — RISCRITTURE PROPOSTE (non applicate)

Regole seguite: valore informativo e lunghezza preservati, nesso spostato da causale a contestuale, nessuna cautela accademica ("secondo alcuni studi", "sembrerebbe"), nessuna lista, compatibilità con il paragrafo precedente e successivo. Dove una frase regge l'architettura del pezzo, non propongo una toppa: lo dichiaro.

---

### 🔴 1. `/disfunzione-erettile-pornografia/` — ALTO

**1.1 🔴 C1 · definizione del PIED**
> *Attuale:* «In ambito clinico si usa talvolta l'acronimo PIED (*Porn-Induced Erectile Dysfunction*), che tradotto significa disfunzione erettile indotta dalla pornografia. Non è un termine diagnostico ufficiale, ma descrive con precisione un quadro clinico che vedo regolarmente nella mia pratica.»

> *Proposta:* «In ambito clinico si usa talvolta l'acronimo PIED (*Porn-Induced Erectile Dysfunction*), che nomina il quadro dal contesto in cui compare più spesso: la pornografia. Non è un termine diagnostico ufficiale, e il nome dice dove il quadro si presenta, non da dove viene: quello che vedo regolarmente nella mia pratica è un sistema di eccitazione che ha imparato un copione, dentro una storia di ansia, aspettativa e vergogna che il copione non ha creato.»

**1.2 🟠 C2 · apprendimento dello script**
> *Attuale:* «Quando un uomo si masturba ripetutamente con pornografia (parliamo di anni, con frequenza regolare), il cervello impara ad associare l'eccitazione sessuale a un insieme molto specifico di stimoli […]»

> *Proposta:* «Quando l'eccitazione passa per anni attraverso lo stesso copione (schermo, controllo dello stimolo, nessuna posta relazionale in gioco), il cervello impara ad associarla a un insieme molto specifico di condizioni […]» — *il resto del periodo resta invariato.*

**1.3 🟠 C2 · taratura della soglia**
> *Attuale:* «Il cervello, nel tempo, *calibra* la propria soglia di risposta su questa intensità. È come se il volume fosse stato alzato al massimo per così tanto tempo che adesso il volume normale sembra silenzio.»

> *Proposta:* «Il cervello, nel tempo, *calibra* la propria soglia di risposta sulle condizioni in cui l'eccitazione si è ripetuta. È come se una stanza fosse stata sempre illuminata allo stesso modo: fuori da quella luce si vede meno, non perché gli occhi siano rotti, ma perché si sono abituati a quella.»

**1.4 🔴 C1 · SCHEMA DEL CICLO — ⚠️ richiede riscrittura strutturale**
> *Attuale:* «Esposizione ripetuta a pornografia ad alta intensità → Calibrazione della soglia → Lo stimolo reale (partner) risulta "insufficiente" → Difficoltà erettile con la partner → frustrazione → Ritorno alla pornografia → Ulteriore rinforzo»

> **Non propongo una toppa.** Lo schema è il cuore visivo dell'articolo e mette l'esposizione alla pornografia come *primo anello e unica origine* della catena: qualunque riformulazione della singola casella lascia in piedi una freccia che va dal porno alla disfunzione. Il ciclo va ridisegnato con un innesco diverso — il primo episodio di difficoltà, o l'aspettativa che precede l'incontro — e con la pornografia collocata dove la posizione di riferimento la mette: nell'anello dell'evitamento («ritorno a un contesto dove funziona, e il copione si rinforza»). È un intervento su tre caselle su sette, e cambia la tesi del pezzo: va deciso, non applicato.

**1.5 🟠 C2 · solco neurale**
> *Attuale:* «Ogni volta che il ciclo si ripete, il solco neurale si approfondisce. Non per debolezza morale, ma per pura meccanica cerebrale.»

> *Proposta:* «Ogni volta che il ciclo si ripete, il solco si approfondisce: non il solco della pornografia, quello dell'evitamento. Non per debolezza morale, ma per pura meccanica dell'apprendimento.»

**1.6 🔴 C1 · l'adolescente che "non ha mai sviluppato i circuiti"**
> *Attuale:* «C'è l'uomo che ha iniziato con la pornografia in adolescenza, prima di qualunque esperienza sessuale reale: il suo cervello ha letteralmente "imparato" la sessualità attraverso lo schermo, e non ha mai sviluppato i circuiti di risposta allo stimolo reale.»

> *Proposta:* «C'è l'uomo che ha incontrato la sessualità in adolescenza attraverso lo schermo, prima di qualunque esperienza con un'altra persona: il suo copione dell'eccitazione si è formato lì, e quello dell'incontro reale non ha mai avuto occasione di scriversi. Il percorso qui è di *costruzione*, non solo di ricalibratura.» — *sostituisce anche la frase successiva, che diventa ridondante.*

**1.7 🟠 C2 · neuroplasticità "che ha creato il problema"**
> *Attuale:* «La stessa neuroplasticità che ha creato il problema è la risorsa per risolverlo.»

> *Proposta:* «La stessa plasticità che ha reso possibile questo apprendimento è la risorsa per riscriverlo.»

**1.8 🟠 C2 · sostituzione della sessualità condivisa**
> *Attuale:* «[…] poi ha attraversato un periodo di stress, solitudine o distanza dalla partner, e l'uso di pornografia è aumentato gradualmente fino a sostituire la sessualità condivisa.»

> *Proposta:* «[…] poi ha attraversato un periodo di stress, solitudine o distanza dalla partner, e la pornografia è diventata il posto dove l'eccitazione continuava a funzionare mentre tutto il resto si complicava.» — *questa frase è già a un passo dal C4: la revisione la porta a casa.*

---

### 🔴 2. `/guida-dipendenza-pornografia-pied/` — ALTO

**2.1 🟠 C2 · le "tre caratteristiche"**
> *Attuale:* «La pornografia online ha tre caratteristiche che rendono questo meccanismo particolarmente potente: Novità infinita / Escalation progressiva / Accessibilità totale»

> *Proposta:* «La pornografia online offre tre condizioni che rendono questo copione facile da consolidare: novità sempre disponibile, escalation possibile, accesso senza attrito.» — *la differenza è tra un oggetto che agisce e un contesto che rende facile un apprendimento. Il corpo dei tre paragrafi successivi regge senza modifiche.*

**2.2 🔴 C1 · key-point "lo stimolo reale non basta più"**
> *Attuale:* «il cervello non distingue tra uno stimolo sessuale "reale" e uno mediato dallo schermo. Ma la pornografia offre un livello di stimolazione che la realtà non può replicare, in termini di novità, intensità e accessibilità. […] E lo stimolo reale (una persona vera, con il suo corpo imperfetto, i suoi tempi, la sua complessità) non basta più.»

> *Proposta:* «il cervello non distingue tra uno stimolo sessuale "reale" e uno mediato dallo schermo. Distingue le condizioni: lo schermo non chiede niente, non giudica, non ha tempi propri. Con il tempo, l'eccitazione impara a presentarsi in quelle condizioni. E quando le condizioni cambiano — una persona vera, con il suo corpo imperfetto, i suoi tempi, la sua complessità — il copione non sa più dove appoggiarsi.» *(nel testo pubblicato gli incisi vanno resi con virgole o parentesi, coerentemente con la Fase 2)*

**2.3 🔴 C1 · "PIED = manifestazione di questo meccanismo"**
> *Attuale:* «La *Porn-Induced Erectile Dysfunction* (PIED) è la manifestazione più concreta e più allarmante di questo meccanismo. L'erezione funziona perfettamente con la pornografia, ma non con una persona reale.»

> *Proposta:* «La *Porn-Induced Erectile Dysfunction* (PIED) è il nome che si dà alla forma più concreta e più spaventosa che questo quadro può prendere. L'erezione funziona perfettamente con la pornografia, ma non con una persona reale: non perché lo schermo abbia rotto qualcosa, ma perché è l'unico contesto rimasto in cui non c'è niente da dimostrare.»

**2.4 🔴 C1 · "il tuo sistema si è ricondizionato"**
> *Attuale:* «Il tuo sistema di eccitazione si è **ricondizionato**. Si è calibrato su stimoli artificiali (visivi, ad alta intensità, controllati) e lo stimolo naturale non riesce più ad attivarlo con la stessa forza. […] È un problema di *calibrazione neurale*.»

> *Proposta:* «Il tuo sistema di eccitazione ha imparato **un copione**. Si è organizzato intorno a condizioni molto precise (controllo, nessun giudizio, nessuna attesa da soddisfare) e fuori da quelle condizioni fatica a partire. […] È un problema di *copione appreso*, non di impianto.»

**2.5 🟠 C2 · dato epidemiologico "in parallelo"**
> *Attuale:* «la disfunzione erettile nei giovani senza cause organiche è aumentata significativamente negli ultimi 15 anni, in parallelo con la diffusione della pornografia in streaming.»

> *Proposta:* «la disfunzione erettile nei giovani senza cause organiche è aumentata significativamente negli ultimi 15 anni, negli stessi anni in cui è cambiato tutto il contesto in cui si impara la sessualità: lo streaming, ma anche l'aspettativa di prestazione e il confronto permanente.» — *il dato resta, l'accostamento smette di funzionare come implicito causale.*

**2.6 🔴 C1 · "l'erezione fallisce per il condizionamento"**
> *Attuale:* «L'erezione fallisce per il condizionamento, l'ansia si installa come risposta, e i due meccanismi si rinforzano a vicenda.»

> *Proposta:* «L'erezione manca una volta, l'ansia si installa, il copione appreso rende più difficile ripartire, e da lì i due si rinforzano a vicenda.» — *stessa lunghezza, stesso contenuto, ordine causale invertito.*

**2.7 🟠 C2 · impatto sulla coppia**
> *Attuale:* «Se hai una relazione, il tuo uso di pornografia la sta probabilmente influenzando, anche se la tua partner non lo sa. L'impatto più diretto è sulla sessualità: l'erezione funziona con la masturbazione ma non con la partner, il desiderio cala, l'intimità si svuota.»

> *Proposta:* «Se hai una relazione, quello che sta succedendo la sta probabilmente toccando, anche se la tua partner non lo sa. Il punto in cui si vede per primo è la sessualità: l'erezione funziona con la masturbazione ma non con la partner, il desiderio cala, l'intimità si svuota.»

---

### 🔴 3. `/ansia-prestazione-sessuale/` — ALTO

**3.1 🔴 C1 · «L'ansia da prestazione si installa come conseguenza, non come causa» — ⚠️ richiede riscrittura strutturale**
> *Attuale:* «In pratica: il cervello si è calibrato su stimoli artificiali (intensi, sempre nuovi, perfettamente controllati) e lo stimolo reale non riesce più a competere. L'ansia da prestazione si installa come conseguenza, non come causa. E in questo caso, le tecniche standard per l'ansia da prestazione funzionano solo parzialmente, perché non toccano la radice del problema.»

> **Non propongo una toppa.** Questa è l'unica frase del corpus che *dichiara* una gerarchia causale, e la dichiara al contrario della posizione di riferimento: la pornografia radice, l'ansia effetto. Non è riformulabile a livello di frase perché è la premessa dell'intera sezione «Quando l'ansia da prestazione nasce dall'uso di pornografia», titolo compreso: la sezione esiste per dire che *lì l'ansia non è il vero problema*. Riscriverla significa cambiare cosa la sezione afferma — che l'ansia e il copione appreso arrivano insieme, che l'ordine varia da uomo a uomo, e che il lavoro sull'ansia serve comunque perché è l'ansia a tenere in piedi l'evitamento. Va deciso a monte, non emendato.

**3.2 🔴 C1 · "il corpo era calibrato diversamente"**
> *Attuale:* «È iniziato con la PIED, l'erezione non arrivava con la partner perché il corpo era calibrato diversamente, e da lì si è installata l'ansia da prestazione. Ora due meccanismi si rinforzano a vicenda […]»

> *Proposta:* «È iniziato dal corpo, l'erezione non arrivava con la partner e nessuna spiegazione tornava, e da lì si è installata l'ansia da prestazione. Ora due cose si rinforzano a vicenda […]» — *la frase perde l'attribuzione causale alla pornografia senza perdere la sequenza clinica.*

**3.3 🟠 C2 · titolo di sezione**
> *Attuale (H2):* «Quando l'ansia da prestazione nasce dall'uso di pornografia»

> *Proposta:* «Quando l'ansia da prestazione si intreccia con l'uso di pornografia» — *vedi §3.1: da solo questo cambio non basta, ma è la prima mossa della riscrittura strutturale.*

---

### 🔴 4. `assets/js/assessment.js` — report di `/autovalutazione/` — ALTO

Superficie speciale: è l'unica in cui il lettore riceve una **restituzione personalizzata sul proprio punteggio**, nel momento di massimo intent. Una frase causale qui pesa più che in un articolo.

**4.1 🔴 C1 · banda IIEF severa + BPS alto**
> *Attuale:* «Quando il corpo funziona con la pornografia ma non con una persona reale, non è un problema fisico, è quello che in ambito scientifico viene chiamato disfunzione erettile indotta dalla pornografia (PIED). Il tuo sistema di eccitazione si è adattato a stimoli artificiali. È un meccanismo conosciuto e trattabile.»

> *Proposta:* «Quando il corpo funziona con la pornografia ma non con una persona reale, non è un problema fisico. In ambito scientifico questo quadro viene chiamato PIED, e il nome dice dove si presenta più spesso, non da dove viene: il tuo sistema di eccitazione ha imparato a funzionare dove non c'è niente da dimostrare. È un meccanismo conosciuto e trattabile.»

**4.2 🔴 C1 · profilo "collegate in modo diretto"**
> *Attuale:* «Il tuo profilo mostra un quadro coerente: uso significativo di pornografia e difficoltà erettili. In termini clinici, questo è il profilo più chiaro e più responsivo al trattamento, perché le due cose sono probabilmente collegate in modo diretto.»

> *Proposta:* «Il tuo profilo mostra un quadro coerente: uso significativo di pornografia e difficoltà erettili. In termini clinici, questo è il profilo più chiaro e più responsivo al trattamento, perché le due cose stanno probabilmente dentro la stessa storia e si tengono a vicenda.»

**4.3 🟠 C2 · banda BPS alta**
> *Attuale:* «Il tuo punteggio (…/20) indica che la pornografia sta avendo un impatto significativo sulla tua vita.»

> *Proposta:* «Il tuo punteggio (…/20) indica che il tuo rapporto con la pornografia occupa uno spazio significativo nella tua vita.» — *sposta da "la pornografia agisce su di te" a "questa relazione occupa spazio", senza attenuare la gravità.*

**4.4 🟠 C2 · banda IIEF lieve + BPS alto**
> *Attuale:* «Spesso il meccanismo è questo: il sistema di eccitazione si è calibrato sugli stimoli della pornografia (intensi, controllati, sempre nuovi) e lo stimolo reale non riesce più a competere. La buona notizia: è un condizionamento, non un danno permanente.»

> *Proposta:* «Spesso il meccanismo è questo: l'eccitazione ha imparato a presentarsi dove non c'è nulla in gioco (nessun giudizio, nessuna attesa) e fatica dove invece c'è. La buona notizia: è un apprendimento, non un danno permanente.»

**4.5 🟠 C2 · evitamento dell'attività sessuale**
> *Attuale:* «In alcuni casi, l'evitamento dell'attività sessuale con un partner può essere collegato proprio al pattern di consumo di pornografia, una sorta di sostituzione che nel tempo modifica le preferenze del sistema di eccitazione.»

> *Proposta:* «In alcuni casi, l'evitamento dell'attività sessuale con un partner e il pattern di consumo di pornografia sono due facce dello stesso movimento: si sta dove la sessualità non chiede niente, e con il tempo diventa l'unico posto in cui è facile stare.»

---

### 🔴 5. `/erezione-masturbazione-non-partner/` — ALTO

**5.1 🔴 C1 · unico "causa" esplicito del corpus**
> *Attuale:* «In molti casi, entrambi i meccanismi sono presenti e si rinforzano: il condizionamento da pornografia causa un primo episodio di difficoltà con la partner, l'episodio innesca l'ansia da prestazione, l'ansia porta a rifugiarsi nella pornografia (dove "funziona"), il condizionamento si rafforza.»

> *Proposta:* «In molti casi entrambi i meccanismi sono presenti e si tengono: un primo episodio di difficoltà con la partner arriva su un sistema già abituato a un altro copione, l'episodio innesca l'ansia da prestazione, l'ansia porta a rifugiarsi nella pornografia (dove "funziona"), e il copione si rafforza.» — *stesso numero di anelli, stessa lunghezza; sparisce il verbo causale e l'innesco diventa l'episodio, non la pornografia.*

**5.2 🟠 C2 · primo meccanismo**
> *Attuale:* «Il primo è il condizionamento da pornografia. Se la masturbazione avviene abitualmente con materiale pornografico, il cervello potrebbe aver calibrato la propria soglia di eccitazione su quel tipo specifico di stimolo […]»

> *Proposta:* «Il primo è il copione appreso. Se la masturbazione avviene abitualmente con materiale pornografico, l'eccitazione ha imparato a presentarsi in quelle condizioni precise […]» — *il resto del periodo (visivo, alta intensità, novità costante, senza componente relazionale) resta invariato e regge meglio.*

**5.3 🟠 C2 · schema decisionale**
> *Attuale (schema):* «Ti masturbi quasi sempre con porno? → Sì → Condizionamento da pornografia»

> *Proposta:* «Ti masturbi quasi sempre con porno? → Sì → Copione appreso» — *stessa lunghezza di riga, l'allineamento monospace tiene.*

---

### 🟠 6. `/pornografia-relazione-coppia/` — MEDIO

**6.1 🔴 C1 · "il danno che la pornografia infligge"**
> *Attuale:* «Nella mia esperienza clinica, il danno maggiore che la pornografia infligge alle relazioni spesso non è il comportamento in sé, è il segreto che lo circonda.»

> *Proposta:* «Nella mia esperienza clinica, quando una relazione si incrina intorno alla pornografia il punto non è quasi mai il comportamento in sé, è il segreto che lo circonda.»

**6.2 🔴 C1 · "principio documentato" del bilancio energetico**
> *Attuale:* «Se una quota significativa dell'eccitazione sessuale viene consumata con la pornografia, soprattutto se questo avviene quotidianamente, la quota disponibile per la sessualità condivisa semplicemente si riduce. Non è una metafora. È un principio documentato nella ricerca sulla motivazione sessuale.»

> *Proposta:* «Quando gran parte dell'eccitazione trova ogni giorno la stessa strada, quella condivisa viene percorsa meno, e come tutte le strade poco battute diventa più faticosa. Non è una metafora morale: è come funziona la motivazione, che va dove trova meno attrito.» — *l'affermazione forte "principio documentato" va tolta: nel corpus non è ancorata a una fonte, e la landing DE ha alzato l'asticella (lì i claim sono linkati).*

**6.3 🟠 C2 · desiderio residuo**
> *Attuale:* «Una volta che il circuito della masturbazione con pornografia si consolida, accade qualcosa di concreto: l'uomo che si masturba al mattino può svegliarsi la sera con meno desiderio reale per il partner.»

> *Proposta:* «Una volta che quel giro si consolida, accade qualcosa di concreto: chi si masturba al mattino può arrivare alla sera con meno spinta verso il partner. Non perché abbia scelto altro: perché il sistema ha già speso una parte di quella spinta.»

**6.4 🟠 C2 · calibrazione delle aspettative**
> *Attuale:* «Non è un cambio consapevole, ma progressivo: la sessualità reale (con il suo tempo elastico, i suoi corpi reali, la sua imprevedibilità) inizia lentamente a pesare meno di quella rappresentata.»

> *Proposta:* «Non è un cambio consapevole, ma progressivo: accanto alla sessualità reale (con il suo tempo elastico, i suoi corpi reali, la sua imprevedibilità) si installa un termine di paragone che nessun incontro vero è costruito per reggere.»

**6.5 🟠 C2 · stimoli virtuali**
> *Attuale:* «Quando l'eccitazione sessuale di uno dei partner è associata soprattutto a stimoli virtuali (varietà infinita, novità costante, zero rischio emotivo), lo stimolo reale può iniziare a pesare diversamente.»

> *Proposta:* «Quando l'eccitazione di uno dei partner trova soprattutto condizioni virtuali (varietà infinita, novità costante, zero rischio emotivo), l'incontro reale entra in competizione con qualcosa che non gli somiglia — e il rischio emotivo, che nell'incontro c'è, pesa.» *(incisi da rendere con virgole/parentesi in pagina)*

---

### 🟠 7. `/` homepage — MEDIO

**7.1 🟠 C2 · definizione PIED nell'hero della sezione**
> *Attuale:* «quella che oggi viene chiamata **disfunzione erettile psicologica** (in ambito scientifico, quando è legata all'uso intensivo di pornografia: *Porn-Induced Erectile Dysfunction*, o PIED) ha un meccanismo preciso. Il tuo sistema di eccitazione si è calibrato su stimoli che il corpo reale non riesce più a raggiungere […]»

> *Proposta:* «quella che oggi viene chiamata **disfunzione erettile psicologica** (in ambito scientifico, quando compare accanto a un uso intensivo di pornografia: *Porn-Induced Erectile Dysfunction*, o PIED) ha un meccanismo preciso. Il tuo sistema di eccitazione ha imparato a funzionare in condizioni che l'incontro reale non riproduce […]»

**7.2 🟠 C2 · "è un condizionamento"**
> *Attuale:* «Non è un difetto del tuo corpo. È un condizionamento, e come tutto ciò che si impara, **si può dis-imparare**.»

> *Proposta:* «Non è un difetto del tuo corpo. È un apprendimento, e come tutto ciò che si impara, **si può riscrivere**.» — *cambio minimo, toglie l'eco del "condizionamento da porno" che l'intera sezione costruisce sopra.*

**7.3 🟠 C2 · hero**
> *Attuale:* «Il porno che non riesci a mollare. Un corpo che funziona con lo schermo e si blocca con una persona reale. Sono tre facce di uno stesso meccanismo»

> *Nessuna riscrittura necessaria.* «Tre facce di uno stesso meccanismo» è già la posizione di riferimento: nessuna delle tre è causa delle altre. È il modello da estendere al resto.

---

### 🟠 8. `/disfunzione-erettile-giovani/` — MEDIO

**8.1 🔴 C1 · "la causa in crescita più rapida"**
> *Attuale:* «il **condizionamento da pornografia**, che è la causa in crescita più rapida.»

> *Proposta:* «il **copione appreso davanti allo schermo**, la condizione di contesto che oggi incontro più spesso.»

**8.2 🟠 C2 · l'adolescenza**
> *Attuale:* «Se hai iniziato a utilizzare pornografia online in adolescenza, e la maggior parte degli uomini della tua generazione lo ha fatto, il tuo cervello potrebbe aver "imparato" la risposta sessuale in associazione con stimoli ad altissima intensità e varietà.»

> *Proposta:* «Se hai incontrato la sessualità online in adolescenza (e la maggior parte degli uomini della tua generazione l'ha fatto), la tua risposta sessuale si è formata dentro condizioni molto particolari: intensità alta, varietà illimitata, nessuno da cui farsi vedere.»

**8.3 🟢 C4 — già allineato, da non toccare**
> «questi tre fattori raramente agiscono da soli. Più spesso coesistono in uno strato: un uomo stressato che usa pornografia per decomprimere, sviluppa un condizionamento, ha un episodio di difficoltà con la partner, e l'ansia da prestazione si installa sopra tutto il resto.» — *è già la posizione di riferimento scritta bene. Va usata come riferimento per le riscritture altrove.*

---

### 🟠 9. `/test-dipendenza-pornografia/` — MEDIO

**9.1 🔴 C1 · "che genera disfunzione erettile"**
> *Attuale:* «l'ansia da prestazione alimenta la ricerca di pornografia come "pratica sicura", che nel tempo alimenta una ricalibrazione del sistema di eccitazione, che genera disfunzione erettile quando arriva una persona reale, che alimenta ancora più ansia.»

> *Proposta:* «l'ansia da prestazione alimenta la ricerca di pornografia come "pratica sicura", che nel tempo consolida un copione, e quel copione lascia scoperto l'incontro reale, che alimenta ancora più ansia.» — *il ciclo parte già dall'ansia, il che è corretto: basta togliere il verbo generativo al centro.*

**9.2 🟠 C2 · ricalibrazione**
> *Attuale:* «il tuo sistema nervoso si è ricalibratos così tanto agli stimoli artificiali che fatica con il contatto umano reale?»

> *Proposta:* «il tuo sistema si è abituato a un tipo di stimolazione così specifico che con il contatto reale fatica a partire?» *(nota: il testo attuale contiene anche un refuso, "ricalibratos")*

---

### 🟠 10. `/guida-autovalutazione/` — MEDIO

**10.1 🔴 C1 · descrizione del contenuto della guida**
> *Attuale:* «perché il PIED, la disfunzione erettile da pornografia, è reversibile»

> *Proposta:* «perché il PIED, la disfunzione erettile che compare accanto all'uso di pornografia, è reversibile»

**10.2 🟠 C2 · stimoli supernormali**
> *Attuale:* «cosa succede a livello neurobiologico con l'esposizione prolungata a stimoli supernormali»

> *Proposta:* «cosa succede a livello neurobiologico quando l'eccitazione passa a lungo per stimoli supernormali»

> ⚠️ **Nota fuori perimetro**: questi due passaggi descrivono il PDF del lead magnet. Se il PDF usa la stessa formulazione, la revisione va estesa lì e alla sequenza SendFox, altrimenti la pagina e il materiale che promette divergono.

---

### 🟠 11. `/disfunzione-erettile-psicologica-cause/` — MEDIO

**11.1 🟠 C2 · "Il risultato:"**
> *Attuale:* «L'uso ripetuto e prolungato di pornografia ad alta stimolazione può calibrare la soglia di eccitazione del tuo cervello su parametri che lo stimolo reale non può raggiungere. Il risultato: erezioni normali con la pornografia, difficoltà con la partner.»

> *Proposta:* «L'uso ripetuto e prolungato di pornografia ad alta stimolazione può abituare l'eccitazione a condizioni che l'incontro reale non riproduce. Quello che si vede: erezioni normali con la pornografia, difficoltà con la partner.»

**11.2 🟢 C4 — già allineato**
> «questi quadri raramente agiscono da soli. Più spesso sono sovrapposti […] Non è un'unica linea causa-effetto, ma un intreccio» — *è la formulazione più vicina alla posizione di riferimento in tutto il corpus. Candidata a diventare il paragrafo-standard da citare negli altri pezzi.*

---

### 🟠 12. `/come-smettere-guardare-pornografia/` — MEDIO

**12.1 🟠 C2 · estensione alla fisiologia**
> *Attuale:* «Significa che il condizionamento si è esteso dalla sfera comportamentale a quella fisiologica. Il sistema di eccitazione si è calibrato sugli stimoli artificiali, e quello naturale non basta più.»

> *Proposta:* «Significa che quello che era un'abitudine adesso passa anche dal corpo. L'eccitazione ha imparato dove presentarsi, e l'incontro reale la coglie fuori posto.»

**12.2 🟠 C2 · PIED reversibile**
> *Attuale:* «Questa condizione, la PIED (Porn-Induced Erectile Dysfunction), è reversibile, ma richiede un intervento specifico.»

> *Proposta:* «Questo quadro, che va sotto il nome di PIED (Porn-Induced Erectile Dysfunction), è reversibile, ma richiede un intervento specifico.»

---

### 🟠 13. `/blog/` — MEDIO

**13.1 🟠 C2 · etichetta porta E**
> *Attuale:* «Il porno sta rovinando la nostra intimità o è solo una mia impressione?»

> *Proposta:* «Il porno sta pesando sulla nostra intimità o è solo una mia impressione?» — *resta in voce paziente, resta una domanda aperta, ma il verbo non attribuisce l'agentività al porno. Nota: l'attuale è la formulazione con cui il lettore arriva davvero, quindi il ritorno SEO/riconoscimento va pesato prima di toccarla.*

**13.2 🟠 C2 · etichetta porta B**
> *Attuale:* «Con il porno funziona, con lei no, perché il corpo risponde solo allo schermo?»

> *Proposta:* «Con il porno funziona, con lei no, perché il corpo risponde solo allo schermo?» — *nessuna modifica proposta: è una domanda del lettore, non un'affermazione del sito, e il punto interrogativo la tiene aperta.*

---

### 🟢 14–16. Rischio BASSO — un solo C2 residuo per pagina

**14.1 `/dipendenza-pornografia/` 🟠 C2**
> *Attuale:* «Un uso di pornografia che non è tecnicamente una dipendenza ma che sta erodendo la tua risposta sessuale con la partner […]»
> *Proposta:* «Un uso di pornografia che non è tecnicamente una dipendenza ma che convive con una risposta sessuale che con la partner si è impoverita […]»

**15.1 `/marito-guarda-pornografia/` 🟠 C2**
> *Attuale:* «potrebbe esserci un condizionamento della risposta sessuale legato alla pornografia, il corpo si è ricallibrato su stimoli artificiali.»
> *Proposta:* «potrebbe esserci una risposta sessuale che ha imparato a funzionare altrove, in condizioni molto diverse da quelle dell'incontro con te.» *(nota: il testo attuale contiene anche un refuso, "ricallibrato")*

**16.1 `/smettere-pornografia/` 🟠 C2**
> *Attuale:* «Una risposta sessuale che si è ricalibrata verso stimoli e persone reali.»
> *Proposta:* «Una risposta sessuale che ha ritrovato la strada verso persone reali.»

---

### 🟢 17–22. Nessun intervento

`/problemi-di-erezione/` · `/disfunzione-erettile-psicologica/` · `/depressione-ansia-sessualita/` · `/chiedere-aiuto/` · `/autovalutazione-de/` · `/come-funziona/` · `/contatto/` · `/bonus-psicologo/` · `/guida-de/` · `/informativa-assessment/` e ausiliarie.

Due meritano una menzione perché sono il modello:

- **`/problemi-di-erezione/`**: «In alcuni casi entra in gioco anche l'abitudine a un certo tipo di stimolazione molto rapida e intensa, per esempio quella della pornografia, che può aver tarato il corpo su una soglia che la realtà, più lenta e più imperfetta, fatica a raggiungere. Non è una colpa e non è una condanna: è una taratura, e le tarature si possono rivedere.» — *"in alcuni casi", "anche", "per esempio", "può": quattro attenuatori che non tolgono niente all'assertività della voce. È la scrittura da cui partire per riscrivere le pagine ALTO.*
- **`/disfunzione-erettile-psicologica/`** (destinazione del 75% della spesa Ads): la pornografia non è mai nominata come agente, entra come «abitudini digitali e sessuali che molti professionisti non indagano». La superficie più esposta commercialmente è già la più allineata.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 3. RACCOMANDAZIONI OPERATIVE

1. **Prima i due nodi strutturali** (Fase 3 · blocco 1.4, schema del ciclo; blocco 3.1, gerarchia causale in `/ansia-prestazione-sessuale/`). Sono decisioni editoriali, non edit: finché reggono, le riscritture di frase sugli altri pezzi lavorano contro il proprio pillar.
2. **Poi il report dell'assessment** (Fase 3 · blocco 4). È l'unica superficie che parla al singolo lettore nel momento in cui ha appena risposto a 14 domande su di sé. Cinque frasi, impatto sproporzionato.
3. **Poi i due pillar** (Fase 3 · blocchi 1 e 2), che sono anche i due pezzi da cui parte l'interlinking di tutto il cluster.
4. **Fissare il lessico prima di riscrivere.** Le proposte qui usano in modo consistente *copione appreso* / *condizioni* / *apprendimento* al posto di *condizionamento da pornografia* / *stimoli artificiali* / *calibrazione*. È una scelta: se preferisci un'altra coppia di termini, va decisa prima, altrimenti il corpus si spacca in due dizionari.
5. **Il perimetro non finisce nel repo.** Il PDF `quando-la-pornografia-smette-di-essere-un-passatempo.pdf`, la guida DE e le due sequenze SendFox (7 email PPU + 5 DE) contengono con ogni probabilità le stesse formulazioni. Le pagine e il materiale che promettono devono dire la stessa cosa.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 4. CHANGELOG FASE 2 — modifiche già applicate in locale

**Perimetro**: 29 file. Nessun push. Codice, CSS, JavaScript, commenti Liquid/HTML e blocchi `extra_css` **non toccati** (verificato con confronto strutturale: tag HTML, blocchi `<style>` e commenti identici all'originale). Delta complessivo del corpus: **+2 parole** su circa 50.000, cioè le sole sostituzioni lessicali. Nessun accorciamento, nessun intervento di stile.

**Norme applicate**
- "cura" / "curare" → "percorso terapeutico" / "lavorare su"
- "guarire" / "guarigione" → riformulazione senza promessa di guarigione
- rimossi: `garantire`/`garantisce`/`garantita`, `recupero`/`recuperata`, `curando` (norma OPL)
- rimossi: `vizio`, `trasformazione`/`trasformativo`, `"non sei solo"`
- `MAIUSCOLO` enfatico → minuscolo
- trattini lunghi e medi → virgole, parentesi o riformulazione sintattica
- "Lei" formale → "tu"

**Non trovati nel corpus** (nessun intervento necessario): `peccato`, `perversione`, `mindset`, `pornodipendenza`, `"la tua migliore versione"`, `"ce la puoi fare"`.

### 4.1 Sostituzioni lessicali puntuali (47)

| # | file | norma applicata | prima | dopo |
|---|------|-----------------|-------|------|
| 1 | `_posts/2026-03-23-dipendenza-pornografia.html` | cura | È come diagnosticare male la malattia: la cura non funziona, e il paziente si sente ancora peggio. | È come diagnosticare male la malattia: il percorso terapeutico non funziona, e il paziente si sente ancora peggio. |
| 2 | `_posts/2026-03-23-come-smettere-guardare-pornografia.html` | curare | smettere senza costruire alternative è come togliere un anestetico senza curare la ferita. | smettere senza costruire alternative è come togliere un anestetico senza lavorare sulla ferita. |
| 3 | `_posts/2026-03-23-test-dipendenza-pornografia.html` | curare | è come togliere un anestetico da una ferita aperta senza curare la ferita. | è come togliere un anestetico da una ferita aperta senza lavorare sulla ferita. |
| 4 | `_posts/2026-03-23-erezione-masturbazione-non-partner.html` | guarire | non è un segno di debolezza e non è qualcosa di cui la partner deve "guarirti". | non è un segno di debolezza e non è qualcosa che la partner debba risolvere al posto tuo. |
| 5 | `_posts/2026-03-23-ansia-prestazione-sessuale.html` | garantire | ha un paradosso al centro: il tentativo di garantire l'erezione è esattamente ciò che la impedisce. | ha un paradosso al centro: il tentativo di controllare l'erezione è esattamente ciò che la impedisce. |
| 6 | `_posts/2026-06-26-chiedere-aiuto.html` | garantisce | perché ogni storia è diversa e nessun professionista serio garantisce risultati. | perché ogni storia è diversa e nessun professionista serio promette risultati. |
| 7 | `_posts/2026-06-26-problemi-di-erezione.html` | garantisce+curando | perché ogni storia è diversa e chi ti garantisce un esito sta vendendo, non curando. | perché ogni storia è diversa e chi ti promette un esito sta vendendo, non lavorando con te. |
| 8 | `_posts/2026-03-23-pornografia-relazione-coppia.html` | garantita | i tempi sono compressi, la risposta è sempre garantita. | i tempi sono compressi, la risposta non manca mai. |
| 9 | `_posts/2026-03-23-pornografia-relazione-coppia.html` | garantita | quello dove il rischio emotivo c'è, e la novità non è garantita. | quello dove il rischio emotivo c'è, e la novità non è scontata. |
| 10 | `_posts/2026-03-23-disfunzione-erettile-giovani.html` | recupero | a 35 anni, con il giusto approccio, il recupero è concreto e veloce | a 35 anni, con il giusto approccio, il miglioramento è concreto e veloce |
| 11 | `_posts/2026-03-23-disfunzione-erettile-giovani.html` | recupero | e con il giusto intervento il recupero è concreto e duraturo. | e con il giusto intervento il miglioramento è concreto e duraturo. |
| 12 | `_posts/2026-03-23-disfunzione-erettile-pornografia.html` | recupero | i circuiti "reali" esistono ancora, e il recupero è generalmente più rapido. | i circuiti "reali" esistono ancora, e il percorso è generalmente più rapido. |
| 13 | `_posts/2026-03-23-erezione-masturbazione-non-partner.html` | recupero | Per approfondire il meccanismo del condizionamento e le fasi del percorso di recupero, leggi la | Per approfondire il meccanismo del condizionamento e le fasi del percorso, leggi la |
| 14 | `_posts/2026-03-23-smettere-pornografia.html` | recupero | ha preso la struttura dei programmi di recupero dalle dipendenze da sostanze — AA, NA — ma ha lasciato fuori | ha preso la struttura dei programmi per le dipendenze da sostanze (AA, NA) ma ha lasciato fuori |
| 15 | `_posts/2026-03-23-disfunzione-erettile-pornografia.html` | recuperata | la risposta sessuale con la partner può essere recuperata. | la risposta sessuale con la partner può tornare a funzionare. |
| 16 | `_posts/2026-03-23-come-smettere-guardare-pornografia.html` | vizio | non stai lottando contro un vizio, stai cercando di rinunciare | non stai lottando contro un'abitudine, stai cercando di rinunciare |
| 17 | `_posts/2026-03-23-guida-dipendenza-pornografia-pied.html` | trasformativa | È la fase più delicata e più trasformativa. | È la fase più delicata e più profonda. |
| 18 | `_posts/2026-03-23-pornografia-relazione-coppia.html` | trasformativo | Questo è uno dei lavori più difficili e più trasformativo della terapia di coppia. | Questo è uno dei lavori più difficili e più profondi della terapia di coppia. |
| 19 | `_posts/2026-03-23-smettere-pornografia.html` | trasformativo | Il quarto — spesso il più profondamente trasformativo — è il | Il quarto, spesso il più profondo, è il |
| 20 | `_posts/2026-03-23-smettere-pornografia.html` | trasformativo | È un processo, non un interruttore. È trasformativo quando lo fai bene, con guida competente e senza fretta. | È un processo, non un interruttore. Funziona quando lo fai bene, con guida competente e senza fretta. |
| 21 | `_posts/2026-03-23-guida-dipendenza-pornografia-pied.html` | trasformazione | <strong>Fase 3 — Trasformazione.</strong> Ricostruire il sistema di eccitazione | <strong>Fase 3, Ricostruzione.</strong> Ricostruire il sistema di eccitazione |
| 22 | `_posts/2026-03-23-pornografia-relazione-coppia.html` | trasformazione | può diventare uno spazio di trasformazione, se gestito bene. | può diventare uno spazio di cambiamento, se gestito bene. |
| 23 | `_posts/2026-03-23-pornografia-relazione-coppia.html` | trasformazione | Quello che accade durante questo percorso è una trasformazione graduale | Quello che accade durante questo percorso è un cambiamento graduale |
| 24 | `_posts/2026-03-23-smettere-pornografia.html` | trasformazioni | Millanta trasformazioni miracolose, | Millanta cambiamenti miracolosi, |
| 25 | `_posts/2026-03-23-smettere-pornografia.html` | trasformazione (H2) | <h2>Cosa funziona: la differenza tra repressione e trasformazione</h2> | <h2>Cosa funziona: la differenza tra repressione e cambiamento</h2> |
| 26 | `come-funziona/index.html` | trasformazione (H3) | <h3 class="pillar-title">Trasformazione</h3> | <h3 class="pillar-title">Lavoro sui meccanismi</h3> |
| 27 | `_posts/2026-03-23-disfunzione-erettile-pornografia.html` | non sei solo | sappi che non sei solo, non sei "rotto" e non stai perdendo la virilità. | sappi che non sei "rotto" e non stai perdendo la virilità. |
| 28 | `_posts/2026-03-23-test-dipendenza-pornografia.html` | MAIUSCOLO (H2) | <h2>Cosa NON ti dice un test</h2> | <h2>Cosa non ti dice un test</h2> |
| 29 | `_posts/2026-03-23-disfunzione-erettile-psicologica-cause.html` | MAIUSCOLO (schema) | <div class="cycle-visual">DISFUNZIONE ERETTILE | <div class="cycle-visual">Disfunzione erettile |
| 30 | `_posts/2026-03-23-disfunzione-erettile-psicologica-cause.html` | MAIUSCOLO (schema) | → PSICOGENA           → Possibile componente | → Psicogena           → Possibile componente |
| 31 | `_posts/2026-03-23-disfunzione-erettile-psicologica-cause.html` | MAIUSCOLO (schema) |   (probabile)           ORGANICA → visita |   (probabile)           Organica → visita |
| 32 | `_posts/2026-03-23-depressione-ansia-sessualita.html` | Lei | Tu tendi a ritirarsi dalla partner | Tu tendi a ritirarti dalla partner |
| 33 | `_posts/2026-03-23-depressione-ansia-sessualita.html` | Lei | se stai prendendo un SSRI e hai problemi sessuali, sappia che potrebbe non essere | se stai prendendo un SSRI e hai problemi sessuali, sappi che potrebbe non essere |
| 34 | `_posts/2026-03-23-dipendenza-pornografia.html` | Lei | perdi tempo che dovrebbe dedicare ad altro? | perdi tempo che dovresti dedicare ad altro? |
| 35 | `_posts/2026-03-23-dipendenza-pornografia.html` | Lei | Se ti riconosci nella descrizione dell'uso problematico reale, sappia che il lavoro terapeutico | Se ti riconosci nella descrizione dell'uso problematico reale, sappi che il lavoro terapeutico |
| 36 | `_posts/2026-03-23-erezione-masturbazione-non-partner.html` | Lei | Se ha una partner, una riflessione: | Se hai una partner, una riflessione: |
| 37 | `_posts/2026-03-23-marito-guarda-pornografia.html` | Lei | <p>Ha trovato la cronologia. | <p>Hai trovato la cronologia. |
| 38 | `_posts/2026-03-23-marito-guarda-pornografia.html` | Lei | Comunque sia arrivata a questa pagina, probabilmente sta provando un misto di emozioni | Comunque tu sia arrivata a questa pagina, probabilmente stai provando un misto di emozioni |
| 39 | `_posts/2026-03-23-marito-guarda-pornografia.html` | Lei | non tutto è patologico, e non tutto significa ciò che teme. | non tutto è patologico, e non tutto significa ciò che temi. |
| 40 | `_posts/2026-03-23-smettere-pornografia.html` | Lei | E il motivo per cui è sbagliato spiega esattamente perché continua a ricadere | E il motivo per cui è sbagliato spiega esattamente perché continui a ricadere |
| 41 | `_posts/2026-03-23-test-dipendenza-pornografia.html` | Lei | Puoi sentirsi molto in colpa per un'abitudine lieve | Puoi sentirti molto in colpa per un'abitudine lieve |
| 42 | `_posts/2026-03-23-erezione-masturbazione-non-partner.html` | Lei (schema) | Ha erezioni mattutine? | Hai erezioni mattutine? |
| 43 | `_posts/2026-03-23-erezione-masturbazione-non-partner.html` | Lei (schema) | Si masturba    I pensieri durante | Ti masturbi    I pensieri durante |
| 44 | `_posts/2026-03-23-dipendenza-pornografia.html` | Lei (meta description) | description: "Si chiede se è dipendente dalla pornografia? | description: "Ti chiedi se sei dipendente dalla pornografia? |
| 45 | `_posts/2026-03-23-marito-guarda-pornografia.html` | Lei (meta description) | description: "Ha scoperto che suo marito guarda porno? | description: "Hai scoperto che tuo marito guarda porno? |
| 46 | `_posts/2026-03-23-smettere-pornografia.html` | Lei (meta description) | description: "Ha provato il NoFap, le app di blocco, le promesse — e ha fallito. | description: "Hai provato il NoFap, le app di blocco, le promesse, e hai fallito. |
| 47 | `_posts/2026-03-23-smettere-pornografia.html` | voi -> tu | quello che posso dirvi è che un lavoro strutturato | quello che posso dirti è che un lavoro strutturato |

### 4.2 Conversione dei trattini lunghi e medi (641 occorrenze)


| file | trattini convertiti |
|------|--------------------|
| `_includes/contact-form.html` | 2 |
| `_includes/dual-cta.html` | 1 |
| `_includes/footer.html` | 2 |
| `_includes/trust-strip.html` | 1 |
| `_posts/2026-03-23-ansia-prestazione-sessuale.html` | 45 |
| `_posts/2026-03-23-come-smettere-guardare-pornografia.html` | 34 |
| `_posts/2026-03-23-depressione-ansia-sessualita.html` | 45 |
| `_posts/2026-03-23-dipendenza-pornografia.html` | 40 |
| `_posts/2026-03-23-disfunzione-erettile-giovani.html` | 34 |
| `_posts/2026-03-23-disfunzione-erettile-pornografia.html` | 31 |
| `_posts/2026-03-23-disfunzione-erettile-psicologica-cause.html` | 36 |
| `_posts/2026-03-23-erezione-masturbazione-non-partner.html` | 32 |
| `_posts/2026-03-23-guida-dipendenza-pornografia-pied.html` | 55 |
| `_posts/2026-03-23-marito-guarda-pornografia.html` | 36 |
| `_posts/2026-03-23-pornografia-relazione-coppia.html` | 53 |
| `_posts/2026-03-23-smettere-pornografia.html` | 57 |
| `_posts/2026-03-23-test-dipendenza-pornografia.html` | 33 |
| `_posts/2026-06-26-chiedere-aiuto.html` | 3 |
| `_posts/2026-06-26-problemi-di-erezione.html` | 3 |
| `assets/js/assessment.js` | 21 |
| `autovalutazione-de/index.html` | 9 |
| `autovalutazione/index.html` | 4 |
| `blog/index.html` | 10 |
| `bonus-psicologo/index.html` | 1 |
| `come-funziona/index.html` | 2 |
| `contatto/index.html` | 10 |
| `disfunzione-erettile-psicologica/index.html` | 19 |
| `guida-de/index.html` | 2 |
| `index.html` | 15 |
| **totale** | **636** |

### 4.3 Occorrenze deliberatamente NON modificate

| file | testo | motivo |
|------|-------|--------|
| `informativa-assessment/index.html` | «la **finalità di assistenza e cura** prestata da un professionista sanitario […] (art. 9, par. 2, lett. h GDPR)» | citazione normativa letterale: modificarla invaliderebbe il riferimento alla base giuridica |
| `informativa-assessment/index.html` | «la loro tutela è parte della cura, non un adempimento» | "cura" qui è *prendersi cura*, non promessa di guarigione. Sostituirlo con "percorso terapeutico" produrrebbe un non-senso |
| `_posts/2026-03-23-marito-guarda-pornografia.html` | «scegliere il momento con cura» | idem: senso avverbiale, nessuna implicazione clinica |
| `_includes/trust-strip.html` | «nessuna qualifica auto-attribuita ("esperto", "specialista")» | è dentro un commento Liquid, non viene pubblicato: è la nota deontologica che *impone* la norma |
| `index.html`, `come-funziona/index.html` | «ambito di specializzazione», «area di specializzazione» | ⚠️ **da decidere**: "specializzazione" non è nell'elenco dei termini da rimuovere, ma è della stessa famiglia OPL di "specialista". Segnalato, non modificato |
| `assets/js/assessment.js`, `autovalutazione-de/index.html` | `var scoreDisplay = allZero ? '—' : score` | il trattino è un glifo segnaposto dell'interfaccia, non punteggiatura |

### 4.4 Interventi su titoli, H e meta description (segnalati separatamente, come da brief)

| tipo | file | intervento | stato |
|------|------|-----------|-------|
| H2 | `_posts/2026-03-23-smettere-pornografia.html` | «repressione e trasformazione» → «repressione e cambiamento» | ✅ applicato |
| H2 | `_posts/2026-03-23-test-dipendenza-pornografia.html` | «Cosa NON ti dice un test» → «Cosa non ti dice un test» | ✅ applicato |
| H3 | `come-funziona/index.html` | pillar «Trasformazione» → «Lavoro sui meccanismi» (rinomina una fase del framework a 5 fasi) | ✅ applicato — **da validare con te** |
| corpo/`<strong>` | `_posts/2026-03-23-guida-dipendenza-pornografia-pied.html` | «Fase 3 — Trasformazione» → «Fase 3, Ricostruzione» | ✅ applicato — **allineare con la voce sopra** |
| meta description | `_posts/2026-03-23-dipendenza-pornografia.html` | «Si chiede se è dipendente…» → «Ti chiedi se sei dipendente…» | ✅ applicato |
| meta description | `_posts/2026-03-23-smettere-pornografia.html` | «Ha provato il NoFap… e ha fallito» → «Hai provato il NoFap… e hai fallito» | ✅ applicato |
| meta description | `_posts/2026-03-23-marito-guarda-pornografia.html` | «Ha scoperto che suo marito…» → «Hai scoperto che tuo marito…» | ✅ applicato |
| meta description | `_posts/2026-03-23-depressione-ansia-sessualita.html` | trattino lungo → virgola | ✅ applicato |
| `<title>` | `_includes/head.html` (separatore globale), `come-funziona/`, `contatto/`, `guida-de/`, `informativa-assessment/` | **NON toccati.** I 5 title tag contengono ancora un trattino lungo | ⏸️ **decisione tua** |

**Proposte per i `<title>`** (impatto SERP, quindi non applicate d'ufficio):

| attuale | proposta |
|---------|----------|
| `{{ page.title }} — {{ site.author }}` | `{{ page.title }} · {{ site.author }}` (il punto medio è già il separatore usato in `/guida-de/` e `/informativa-assessment/`) |
| «Come funziona il percorso — fasi, durata, investimento» | «Come funziona il percorso (fasi, durata, investimento)» |
| «Parliamone — Primo Contatto Riservato» | «Parliamone, primo contatto riservato» |
| «Quando la testa spegne il corpo — Guida gratuita» | «Quando la testa spegne il corpo (guida gratuita)» |
| «Informativa sul trattamento dei dati — Autovalutazione» | «Informativa sul trattamento dei dati (Autovalutazione)» |

### 4.5 Refusi preesistenti rilevati e NON corretti (fuori mandato)

`ricalibratos` (`/test-dipendenza-pornografia/`) · `ricallibrato` (`/marito-guarda-pornografia/`) · `merece` (`/dipendenza-pornografia/`) · «è il differenza tra» (`/smettere-pornografia/`) · «avete dei guide che sa» (`/marito-guarda-pornografia/`) · «emotica» per "emotiva" (`/smettere-pornografia/`, `/pornografia-relazione-coppia/`).

### 4.6 Verifiche eseguite

- ✅ zero trattini lunghi/medi residui in prosa pubblicata (esclusi i 5 `<title>`)
- ✅ zero parentesi sbilanciate, zero doppie virgole, zero spazi prima di virgola
- ✅ CSS, JavaScript, commenti Liquid/HTML byte-identici all'originale
- ✅ sequenza dei tag HTML identica in tutti i 29 file
- ✅ delta parole per file: da −3 a +2, tutte riconducibili alle sostituzioni lessicali in tabella
