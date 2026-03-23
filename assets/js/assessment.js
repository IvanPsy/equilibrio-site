/* Equilibrio – Assessment scoring logic
   BPS (Kraus 2017), IIEF-5 (Rosen 1999), PHQ-2, GAD-2
   Tutto client-side, nessun dato trasmesso fino al form submit */

const answers = {};
const TOTAL_Q = 14;

function updateProgress() {
  const n = Object.keys(answers).length;
  document.getElementById('progressFill').style.width = ((n / TOTAL_Q) * 100) + '%';
  document.getElementById('progressText').textContent = n + ' di ' + TOTAL_Q;
}

document.querySelectorAll('.scale-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const q = this.dataset.q;
    answers[q] = parseInt(this.dataset.val);
    document.querySelectorAll('.scale-btn[data-q="' + q + '"]').forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');
    document.getElementById('errorMsg').style.display = 'none';
    updateProgress();
  });
});

document.querySelectorAll('.radio-option').forEach(opt => {
  opt.addEventListener('click', function () {
    const q = this.dataset.q;
    answers[q] = parseInt(this.dataset.val);
    document.querySelectorAll('.radio-option[data-q="' + q + '"]').forEach(o => o.classList.remove('selected'));
    this.classList.add('selected');
    document.getElementById('errorMsg').style.display = 'none';
    updateProgress();
  });
});

function calculateResults() {
  if (Object.keys(answers).length < TOTAL_Q) {
    document.getElementById('errorMsg').style.display = 'block';
    const allQs = ['b1','b2','b3','b4','b5','c1','c2','c3','c4','c5','d1','d2','e1','e2'];
    for (const q of allQs) {
      if (!(q in answers)) {
        const el = document.querySelector('[data-q="' + q + '"]');
        if (el) el.closest('.question-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
    return;
  }

  /* ── Scoring ── */
  const bps = answers.b1 + answers.b2 + answers.b3 + answers.b4 + answers.b5;
  const iiefItems = [answers.c1, answers.c2, answers.c3, answers.c4, answers.c5];
  const iiefAllZero = iiefItems.every(v => v === 0);
  const iief = iiefItems.reduce((s, v) => s + v, 0);
  const phq = answers.d1 + answers.d2;
  const gad = answers.e1 + answers.e2;

  /* ── Bande BPS ── */
  const bpsBand = bps <= 4 ? 'basso' : bps <= 11 ? 'moderato' : 'alto';
  const bpsBandLabel = bps <= 4 ? 'Basso rischio' : bps <= 11 ? 'Rischio moderato' : 'Rischio significativo';
  const bpsBandClass = bps <= 4 ? 'band-green' : bps <= 11 ? 'band-yellow' : 'band-red';

  /* ── Bande IIEF-5 ── */
  let iiefBand, iiefBandLabel, iiefBandClass;
  if (iiefAllZero) { iiefBand = 'noactivity'; iiefBandLabel = 'No attività recente'; iiefBandClass = 'band-yellow'; }
  else if (iief >= 22) { iiefBand = 'normale'; iiefBandLabel = 'Nella norma'; iiefBandClass = 'band-green'; }
  else if (iief >= 17) { iiefBand = 'lieve'; iiefBandLabel = 'Difficoltà lievi'; iiefBandClass = 'band-yellow'; }
  else if (iief >= 12) { iiefBand = 'moderata'; iiefBandLabel = 'Difficoltà moderate'; iiefBandClass = 'band-yellow'; }
  else { iiefBand = 'severa'; iiefBandLabel = 'Difficoltà significative'; iiefBandClass = 'band-red'; }

  /* ── Bande PHQ-2 / GAD-2 ── */
  const phqFlag = phq >= 3;
  const phqBandLabel = phqFlag ? 'Segnale presente' : 'Nella norma';
  const phqBandClass = phqFlag ? 'band-yellow' : 'band-green';
  const gadFlag = gad >= 3;
  const gadBandLabel = gadFlag ? 'Segnale presente' : 'Nella norma';
  const gadBandClass = gadFlag ? 'band-yellow' : 'band-green';

  const iiefDisplay = iiefAllZero ? '\u2014' : iief;
  const iiefMaxDisplay = iiefAllZero ? '' : '/ 25';

  /* ── Score cards ── */
  document.getElementById('scoresGrid').innerHTML =
    '<div class="score-card"><div class="score-card-label">Pornografia</div><div class="score-card-number">' + bps + '<span class="score-card-max"> / 20</span></div><div class="score-card-band ' + bpsBandClass + '">' + bpsBandLabel + '</div></div>' +
    '<div class="score-card"><div class="score-card-label">Funzione erettile</div><div class="score-card-number">' + iiefDisplay + '<span class="score-card-max"> ' + iiefMaxDisplay + '</span></div><div class="score-card-band ' + iiefBandClass + '">' + iiefBandLabel + '</div></div>' +
    '<div class="score-card"><div class="score-card-label">Umore</div><div class="score-card-number">' + phq + '<span class="score-card-max"> / 6</span></div><div class="score-card-band ' + phqBandClass + '">' + phqBandLabel + '</div></div>' +
    '<div class="score-card"><div class="score-card-label">Ansia</div><div class="score-card-number">' + gad + '<span class="score-card-max"> / 6</span></div><div class="score-card-band ' + gadBandClass + '">' + gadBandLabel + '</div></div>';

  /* ── Report narrativo ── */
  let r = '';

  // BPS
  r += '<div class="report-section"><h2>Pornografia: cosa indicano le tue risposte</h2>';
  if (bpsBand === 'basso') {
    r += '<p>Il tuo punteggio (' + bps + '/20) suggerisce che, negli ultimi 6 mesi, il tuo consumo di pornografia non ha presentato segnali di problematicità significativa secondo i parametri di questo strumento.</p><p>Tuttavia, se qualcosa ti ha portato a fare questo assessment — un dubbio, un disagio, una situazione che ti preoccupa — quel segnale merita attenzione. Il fatto di cercare informazioni è già un atto di consapevolezza importante.</p>';
  } else if (bpsBand === 'moderato') {
    r += '<p>Il tuo punteggio (' + bps + '/20) indica che il tuo rapporto con la pornografia presenta segnali che meritano attenzione. Non necessariamente una situazione critica, ma un pattern che potrebbe star sottraendo qualcosa alla tua qualità di vita — energia, intimità, serenità.</p><p>Spesso è in questa fascia che un intervento è più efficace: il comportamento non si è ancora consolidato in modo rigido, e ci sono buone leve su cui lavorare.</p>';
    if (answers.b4 >= 3) {
      r += '<div class="report-highlight"><p>In particolare, emerge un uso della pornografia come strategia per gestire emozioni spiacevoli. Questo è un pattern importante: quando un comportamento diventa il modo principale per regolare lo stress o la tristezza, tende a rafforzarsi nel tempo.</p></div>';
    }
    if (answers.b2 >= 3) {
      r += '<div class="report-highlight"><p>Segnali una difficoltà nel controllo volontario — la sensazione di non riuscire a smettere anche quando vorresti. Questo non è una questione di forza di volontà: è un meccanismo neurobiologico che può essere affrontato con gli strumenti giusti.</p></div>';
    }
  } else {
    r += '<p>Il tuo punteggio (' + bps + '/20) indica che la pornografia sta avendo un impatto significativo sulla tua vita. Probabilmente lo percepisci già — forse è proprio ciò che ti ha portato qui.</p><p>Un punteggio in questa fascia significa che il comportamento ha sviluppato caratteristiche che lo rendono difficile da gestire autonomamente: interferenza con la vita quotidiana, difficoltà di controllo, uso come regolatore emotivo.</p><div class="report-highlight"><p>Questo non significa che qualcosa in te sia rotto. Il tuo cervello ha sviluppato un pattern di risposta molto forte — e come tutto ciò che si impara, si può cambiare. Le problematiche con punteggi in questa fascia sono tra le più responsive al trattamento strutturato.</p></div>';
  }
  r += '</div>';

  // IIEF
  r += '<div class="report-section"><h2>Funzione sessuale: cosa emerge</h2>';
  if (iiefAllZero) {
    r += '<p>Hai indicato di non aver avuto attività sessuale nel periodo di riferimento. Questo dato in sé non è un problema — ci possono essere molte ragioni.</p>';
    if (bpsBand !== 'basso') {
      r += '<div class="report-highlight"><p>In alcuni casi, l\'evitamento dell\'attività sessuale con un partner può essere collegato proprio al pattern di consumo di pornografia — una sorta di sostituzione che nel tempo modifica le preferenze del sistema di eccitazione. È un aspetto che vale la pena esplorare.</p></div>';
    }
  } else if (iiefBand === 'normale') {
    r += '<p>Il tuo punteggio (' + iief + '/25) indica un funzionamento erettile nella norma. Questo è un dato positivo.</p>';
    if (bpsBand !== 'basso') {
      r += '<p>Il fatto che la funzione sessuale sia preservata nonostante un uso problematico della pornografia suggerisce che il comportamento non ha ancora impattato questa area — oppure che l\'impatto si manifesta in modi diversi (desiderio, soddisfazione, connessione emotiva). Un approfondimento può chiarire.</p>';
    }
  } else if (iiefBand === 'lieve') {
    r += '<p>Il tuo punteggio (' + iief + '/25) indica difficoltà erettili di grado lieve. Qualcosa non funziona come vorresti, anche se non in modo costante.</p>';
    if (bpsBand !== 'basso') {
      r += '<div class="report-highlight"><p>La combinazione tra uso problematico di pornografia e difficoltà erettili è un profilo frequente. Spesso il meccanismo è questo: il sistema di eccitazione si è calibrato sugli stimoli della pornografia — intensi, controllati, sempre nuovi — e lo stimolo reale non riesce più a competere. La buona notizia: è un condizionamento, non un danno permanente.</p></div>';
    } else {
      r += '<p>In assenza di un uso problematico della pornografia, le cause più comuni sono l\'ansia da prestazione, lo stress, o fattori relazionali. Un assessment clinico può distinguere con precisione le componenti in gioco.</p>';
    }
  } else {
    r += '<p>Il tuo punteggio (' + iief + '/25) indica difficoltà erettili di grado ' + (iiefBand === 'moderata' ? 'moderato' : 'significativo') + '. Questo ha probabilmente un impatto concreto sulla tua vita intima e sulla tua autostima.</p>';
    if (bpsBand !== 'basso') {
      r += '<div class="report-highlight"><p>Quando il corpo funziona con la pornografia ma non con una persona reale, non è un problema fisico — è quello che in ambito scientifico viene chiamato disfunzione erettile indotta dalla pornografia (PIED). Il tuo sistema di eccitazione si è adattato a stimoli artificiali. È un meccanismo conosciuto e trattabile.</p></div>';
    }
    if (iief <= 10) {
      r += '<div class="report-highlight"><p>Con un punteggio in questa fascia, è importante escludere anche componenti organiche. Un controllo andrologico, se non l\'hai già fatto, permette di avere un quadro completo. Le due cose non si escludono — e sapere esattamente cosa contribuisce al problema rende il lavoro molto più efficace.</p></div>';
    }
  }
  r += '</div>';

  // Contesto emotivo
  r += '<div class="report-section"><h2>Il contesto emotivo</h2>';
  if (!phqFlag && !gadFlag) {
    r += '<p>I tuoi punteggi nell\'area dell\'umore (' + phq + '/6) e dell\'ansia (' + gad + '/6) non presentano segnali di particolare sofferenza emotiva nelle ultime due settimane. Questo è un buon punto di partenza: significa che puoi affrontare il lavoro sulle altre aree con risorse emotive disponibili.</p>';
  } else if (phqFlag && !gadFlag) {
    r += '<p>Il tuo punteggio nell\'area dell\'umore (' + phq + '/6) segnala la presenza di alcuni sintomi depressivi nelle ultime due settimane — riduzione dell\'interesse e sentimenti di scoraggiamento.</p>';
    if (bpsBand !== 'basso') {
      r += '<p>Umore e comportamento sessuale si influenzano a vicenda: un tono dell\'umore basso può portare a cercare sollievo nella pornografia, e l\'uso compulsivo di pornografia può alimentare sensi di colpa e scoraggiamento. Capire quale viene prima è importante per definire il punto di partenza del lavoro.</p>';
    }
    if (phq >= 5) {
      r += '<div class="report-highlight"><p>Il tuo livello di sofferenza emotiva merita attenzione prioritaria. Prima ancora del lavoro sul comportamento, è importante capire come stai — e se c\'è bisogno di un supporto specifico su questo fronte.</p></div>';
    }
  } else if (!phqFlag && gadFlag) {
    r += '<p>Il tuo punteggio nell\'area dell\'ansia (' + gad + '/6) indica un livello di tensione e preoccupazione sopra la norma nelle ultime settimane.</p>';
    if (iiefBand !== 'normale' && iiefBand !== 'noactivity') {
      r += '<div class="report-highlight"><p>Ansia e funzione erettile sono strettamente collegate. L\'ansia da prestazione può sia causare che mantenere le difficoltà erettili — creando un ciclo in cui la paura del fallimento produce il fallimento stesso. Questo ciclo si può interrompere, ma serve un approccio mirato.</p></div>';
    }
  } else {
    r += '<p>I tuoi punteggi mostrano segnali sia nell\'area dell\'umore (' + phq + '/6) che in quella dell\'ansia (' + gad + '/6). Questo indica un livello di sofferenza emotiva che va ascoltato.</p><div class="report-highlight"><p>Quando sia l\'umore che l\'ansia sono coinvolti, è possibile che il comportamento con la pornografia funzioni come una sorta di valvola di sfogo — un modo per gestire un malessere più ampio. In questi casi, il lavoro più efficace non parte dal comportamento in sé, ma dal capire cosa sta sotto.</p></div>';
  }
  r += '</div>';

  // Cross-referencing
  r += '<div class="next-steps"><h2>Cosa significano questi risultati insieme</h2>';
  if (bpsBand === 'alto' && (iiefBand === 'lieve' || iiefBand === 'moderata' || iiefBand === 'severa')) {
    r += '<p>Il tuo profilo mostra un quadro coerente: uso significativo di pornografia e difficoltà erettili. In termini clinici, questo è il profilo più chiaro e più responsivo al trattamento, perché le due cose sono probabilmente collegate in modo diretto. Un percorso strutturato che lavori su entrambi i fronti può produrre risultati concreti.</p>';
  } else if (bpsBand === 'moderato' && (iiefBand === 'lieve' || iiefBand === 'moderata')) {
    r += '<p>Le tue risposte delineano un profilo tra i più comuni: un consumo di pornografia che ha iniziato a creare attrito, accompagnato da segnali di cambiamento nella risposta sessuale. È il punto in cui un intervento precoce fa la differenza più grande.</p>';
  } else if (bpsBand === 'basso' && (iiefBand === 'moderata' || iiefBand === 'severa')) {
    r += '<p>Le tue risposte mostrano difficoltà erettili significative senza un uso problematico della pornografia. Questo suggerisce che le cause vadano cercate altrove — ansia da prestazione, stress, dinamiche relazionali, o fattori medici. Un assessment più approfondito può identificare con precisione le componenti in gioco.</p>';
  } else if (bpsBand !== 'basso' && iiefBand === 'normale') {
    r += '<p>Il tuo profilo mostra un rapporto problematico con la pornografia ma una funzione erettile ancora nella norma. Il pattern che emerge merita attenzione, perché tende a evolvere nel tempo se non affrontato.</p>';
  } else if (bpsBand === 'basso' && (iiefBand === 'normale' || iiefBand === 'noactivity')) {
    r += '<p>Dai punteggi non emergono criticità evidenti. Se hai fatto questo assessment, però, è perché qualcosa ti ha portato a cercare — e questo merita rispetto e attenzione, indipendentemente dai numeri.</p>';
  } else {
    r += '<p>Il tuo profilo presenta elementi su più dimensioni che meritano un\'analisi più approfondita. I numeri da soli raccontano una parte della storia — quello che manca è il contesto: la tua storia, la tua situazione attuale, cosa funziona e cosa no.</p>';
  }
  r += '<p>Questo assessment ti dà un primo quadro. Un colloquio approfondito permette di leggere questi dati alla luce della tua esperienza concreta — e capire con precisione cosa sta succedendo e cosa si può fare.</p></div>';

  r += '<div class="report-source"><p>Strumenti utilizzati: <em>Brief Pornography Screen</em> (Kraus et al., 2017), <em>International Index of Erectile Function-5</em> (Rosen et al., 1999), <em>Patient Health Questionnaire-2</em> (Kroenke et al., 2003), <em>Generalized Anxiety Disorder-2</em> (Kroenke et al., 2007). Questo assessment non sostituisce una valutazione clinica.</p></div>';

  document.getElementById('reportBody').innerHTML = r;

  /* ── Store data for Google Form ── */
  window._assessmentData = {
    punteggi: 'BPS:' + bps + '/20 IIEF:' + (iiefAllZero ? 'N/A' : iief + '/25') + ' PHQ:' + phq + '/6 GAD:' + gad + '/6',
    risposte: JSON.stringify(answers),
    profilo: 'BPS:' + bps + '(' + bpsBandLabel + ') IIEF:' + (iiefAllZero ? 'N/A' : iief) + '(' + iiefBandLabel + ') PHQ:' + phq + '(' + phqBandLabel + ') GAD:' + gad + '(' + gadBandLabel + ')'
  };

  /* ── Conversion tracking: assessment completato ── */
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-1004214539/zENhCO3HzoAcEIuy7N4D',
      'value': 1.0,
      'currency': 'EUR'
    });
  }

  /* ── UI switch ── */
  document.getElementById('assessmentWrapper').style.display = 'none';
  document.getElementById('resultsWrapper').style.display = 'block';
  document.getElementById('resultCta').style.display = 'block';
  document.getElementById('progressBar').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Google Form redirect ── */
function sendToGoogleForm() {
  var nome = (document.getElementById('ctaNome').value || '').trim();
  var cognome = (document.getElementById('ctaCognome').value || '').trim();
  var email = (document.getElementById('ctaEmail').value || '').trim();
  if (!email) {
    document.getElementById('ctaError').style.display = 'block';
    return;
  }
  document.getElementById('ctaError').style.display = 'none';

  /* ── Enhanced Conversions: passa email per attribuzione ──
     Google hasha automaticamente l'email prima di inviarla.
     Questo permette di attribuire la conversione al clic sull'annuncio
     anche quando il gclid si perde o il cookie consent è negato. */
  if (typeof gtag === 'function') {
    gtag('set', 'user_data', {
      'email': email
    });
    gtag('event', 'conversion', {
      'send_to': 'AW-1004214539/rjxoCOrHzoAcEIuy7N4D',
      'value': 5.0,
      'currency': 'EUR'
    });
  }

  var quando = document.getElementById('ctaQuando').value;
  var eta = (document.getElementById('ctaEta').value || '').trim();
  var relazione = document.getElementById('ctaRelazione').value;
  var partner = document.getElementById('ctaPartner').value;
  var aiuto = document.getElementById('ctaAiuto').value;
  var perche = (document.getElementById('ctaPerche').value || '').trim();
  var data = window._assessmentData || {};
  var baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSffFim5dyVsnQRzrU5jARNDuFFkJAJSiwt3RJsAzDrm3Q5URg/viewform?usp=pp_url';
  var url = baseUrl
    + '&entry.505395232=' + encodeURIComponent(nome)
    + '&entry.338654322=' + encodeURIComponent(cognome)
    + '&entry.165398742=' + encodeURIComponent(email)
    + '&entry.499482887=' + encodeURIComponent(quando)
    + '&entry.1864579851=' + encodeURIComponent(eta)
    + '&entry.185807262=' + encodeURIComponent(relazione)
    + '&entry.1932324362=' + encodeURIComponent(partner)
    + '&entry.1212788347=' + encodeURIComponent(aiuto)
    + '&entry.1497780864=' + encodeURIComponent(perche)
    + '&entry.1233088920=' + encodeURIComponent(data.punteggi || '')
    + '&entry.95763489=' + encodeURIComponent(data.risposte || '')
    + '&entry.981953841=' + encodeURIComponent(data.profilo || '');
  window.open(url, '_blank', 'noopener');
}
