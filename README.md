# Equilibrio — Jekyll Site

Sito web di Equilibrio (equilibrio.ivanferrero.it), pratica online di psicoterapia specializzata in dipendenza da pornografia, PIED e disfunzione erettile psicogena.

## Struttura

```
├── _config.yml              # Variabili sito (author, whatsapp, gtag)
├── _layouts/
│   ├── default.html         # Layout base
│   └── thanks.html          # Layout pagine "grazie"
├── _includes/
│   ├── head.html            # <head> con consent mode v2, gtag, meta
│   ├── footer.html          # Credenziali professionali
│   ├── cookie-banner.html   # Banner GDPR
│   ├── contact-form.html    # Form parametrizzato (Netlify)
│   ├── whatsapp-float.html  # Bottone WhatsApp fisso
│   ├── whatsapp-inline.html # WhatsApp alternativa al form
│   ├── inline-cta.html      # Blocco CTA riutilizzabile
│   ├── icon-whatsapp.svg    # SVG WhatsApp
│   └── icon-check.svg       # SVG checkmark
├── _sass/
│   ├── _variables.scss      # Design tokens
│   ├── _base.scss           # Reset, tipografia, layout
│   ├── _components.scss     # Bottoni, hero, form, FAQ, CTA
│   ├── _landing.scss        # Sezioni specifiche landing
│   └── _assessment.scss     # UI assessment completa
├── assets/
│   ├── css/main.scss        # Entry point SCSS
│   └── js/assessment.js     # Scoring BPS/IIEF-5/PHQ-2/GAD-2
├── index.html                        # Landing principale
├── autovalutazione/index.html         # Assessment 14 domande
├── grazie/index.html                  # Thank you (conversione)
├── disfunzione-erettile-psicologica/
│   ├── index.html                     # Landing DE psicogena
│   └── grazie.html                    # Thank you DE
```

## Build locale

```bash
gem install jekyll jekyll-seo-tag
jekyll serve
```

## Deploy

### Netlify (raccomandato — form nativi)
- Build command: `jekyll build`
- Publish directory: `_site`
- I form usano `data-netlify="true"` → funzionano nativamente

### GitHub Pages
- Funziona con GitHub Actions (workflow Jekyll)
- **Nota:** i form Netlify NON funzionano su GitHub Pages
- Alternativa: sostituire con Formspree/Getform nei `_includes/contact-form.html`

## Form

Il form dell'assessment (`autovalutazione/index.html`) invia campi nascosti con i punteggi:
- `punteggio-bps` (0-20)
- `punteggio-iief` (0-25 o N/A)
- `punteggio-phq` (0-6)
- `punteggio-gad` (0-6)
- `profilo` (stringa riassuntiva)
- `risposte` (JSON completo)

## Note

- Mobile-first design (breakpoint 768px)
- Consent Mode v2 per Google Ads
- Tutto lo scoring dell'assessment è client-side (nessun dato trasmesso prima del submit)
- Font: Cormorant (headings) + Source Sans 3 (body) via Google Fonts
