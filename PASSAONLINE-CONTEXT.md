# PassaOnline — Contesto di brand e prodotto

Questo file racchiude tutto quello che serve per lavorare su PassaOnline in un'altra conversazione: chi è, cosa offre, come si presenta visivamente e come scrive. Copialo/incollalo come contesto iniziale.

---

## 1. Chi è PassaOnline

PassaOnline è un'agenzia one-man-band gestita da **Samuele Beretta**. Non è una società con P.IVA: opera come prestazione occasionale con ritenuta d'acconto (attenzione: se il volume di lavoro cresce, valutare con un commercialista l'apertura di una P.IVA).

**Missione:** aiutare piccole attività e professionisti che lavorano bene ma restano "invisibili" perché non hanno una presenza online curata. L'idea di fondo: *"il passaparola oggi è digitale — chi non c'è online, semplicemente non viene trovato dai nuovi clienti."*

**Posizionamento:** prezzo aggressivo/basso come amo d'ingresso (strategia di volume per costruire portfolio ed esperienza, in attesa di poter alzare i prezzi una volta consolidata la reputazione), ma senza sembrare "il più economico e basta" — il messaggio è bilanciato tra convenienza e qualità del lavoro.

**Modalità operativa:** rapporto diretto, senza call center né intermediari. Un solo referente (Samuele) dalla prima chiamata alla consegna.

**Contatti:**
- WhatsApp: +39 334 536 6151 (con messaggio precompilato: *"Ciao Samuele! ti ho scritto perché ho un'attività e vorrei sapere come puoi aiutarmi 😊"*)
- Email: info@passaonline.it
- Sito live: https://passaonline-r7ip.vercel.app/
- Repo GitHub: https://github.com/samueleberetta/passaonline

---

## 2. Servizi offerti

Tre servizi reali (non pacchetti fissi — ogni preventivo si costruisce in chiamata):

1. **Siti web**
   Sito professionale su misura (non template), responsive. Include dominio, email professionale. **Nessun abbonamento mensile** — è un punto di forza esplicito da comunicare sempre.

2. **Gestione social**
   Cura delle pagine Instagram e Facebook: contenuti, post, immagine coordinata, crescita del profilo.

3. **Campagne pubblicitarie / Lead generation**
   Gestione campagne a pagamento su Instagram e Facebook: creatività, grafiche, testi persuasivi, con l'obiettivo di portare contatti reali (lead), non solo visibilità.

**Prezzo:** a partire da **399€** (chiavi in mano, una tantum) per il sito web. Social e campagne pubblicitarie si preventivano a parte in chiamata — non hanno un prezzo fisso pubblicato.

**Non ha ancora un portfolio reale** (nessun cliente pagante finora) — per questo il sito non mostra case study/lavori precedenti, ma punta su trasparenza, prezzo e la figura personale di Samuele per costruire fiducia.

---

## 3. Identità visiva

### Colori (CSS custom properties)
```css
--orange:        #FF6B2C   /* colore primario/brand */
--orange-light:  #FF8F5C
--orange-dark:   #E55A1B
--orange-glow:   rgba(255, 107, 44, 0.15)   /* glow/ombre */
--orange-subtle: rgba(255, 107, 44, 0.06)   /* sfondi tenui */

--white:   #FFFFFF
--gray-50:  #FAFAFA   /* sfondo sezioni alternate */
--gray-100: #F5F5F5
--gray-200: #E8E8E8   /* bordi */
--gray-300: #D4D4D4
--gray-400: #A3A3A3
--gray-500: #737373   /* testo secondario */
--gray-600: #525252   /* testo body */
--gray-700: #404040
--gray-800: #262626
--gray-900: #171717   /* testo principale/titoli, nero del logo */
--black:    #0A0A0A
```
Palette essenzialmente **bianco + arancione + scala di grigi/nero** — nessun altro colore accento. L'arancione è usato con parsimonia (CTA, icone, dettagli), mai come sfondo pieno di intere sezioni.

### Font
- **Sans (testo principale, UI):** `Inter` — pesi da 300 a 900 usati nel sito
- **Serif (accenti editoriali):** `Playfair Display`, italic — usato SOLO per parole-chiave enfatizzate all'interno di titoli (es. "Ti trovano?" in corsivo arancione nell'hero, "digitale" nella sezione soluzione). Crea un contrasto premium/editoriale contro il sans-serif bold del resto.

### Logo
Logo reale (non più CSS testuale): un monogramma "P" stilizzato in cui l'asta della P si trasforma in una freccia che punta in alto a sinistra (simbolo di crescita/direzione), colori arancione/nero. Varianti disponibili in `/assets`:
- `logo-icon.png` — icona quadrata (favicon, apple-touch-icon)
- `logo-horizontal.png` — logo orizzontale con tagline "Portiamo la tua attività online" (usato nel footer)
- `logo-horizontal-notag.png` — stessa versione ma senza tagline, più compatta (usata in nav)
- `logo-horizontal-dark.png` — variante per sfondi scuri (non attualmente in uso, tenuta di scorta)

Tutti i loghi hanno sfondo reso trasparente (flood-fill), per fondersi su qualunque superficie senza box/contorni visibili.

### Stile grafico generale
- Design pulito, molto whitespace, bordi arrotondati generosi (16–20px sulle card)
- Forme decorative geometriche fluttuanti (cerchi, quadrati ruotati, una lente d'ingrandimento nella sezione contatti) a bassa opacità (~0.06–0.2), animazione di float lenta
- Card con bordo sottile grigio chiaro, ombra leggera all'hover
- Animazioni "reveal" allo scroll (fade + translateY) su quasi tutti gli elementi
- Cursor glow (alone arancione che segue il mouse) in desktop
- Mockup browser/telefono stilizzati (non screenshot reali) per illustrare "sito + social"

---

## 4. Tono di voce e mood dei testi

- **Diretto e colloquiale**, mai corporate/gergale. Frasi brevi, spesso spezzate in più righe con `<br>` per dare ritmo (tipico degli hero: frase corta → frase corta → domanda retorica finale)
- **Personale**: si parla in prima persona ("Ho creato PassaOnline per questo", "parli sempre con me") — l'assenza di P.IVA/team viene trasformata in un vantaggio ("non un call center, una persona sola, raggiungibile")
- **Orientato al problema del cliente**, non alle feature: si apre quasi sempre nominando il dolore ("i tuoi clienti ti cercano ma non ti trovano") prima di proporre la soluzione
- **Domande retoriche** usate spesso come chiusura di paragrafo/titolo ("Ti trovano?", "E il tuo concorrente?")
- **Zero tecnicismi**, zero superlativi vuoti ("il migliore", "leader di settore" — mai usati)
- **Onestà sul prezzo**: si dichiara esplicitamente il posizionamento "prezzo basso" ma senza svalutare la qualità — es. "Il prezzo più basso che troverai in giro. Il resto lo decidiamo insieme, in chiamata."
- **Call to action orientate alla conversazione**, non alla vendita diretta: "Raccontami la tua attività", "Scrivici oggi senza impegno: solo una chiacchierata..."

### Esempi di headline reali dal sito
- Hero: *"I tuoi clienti ti stanno cercando. Ti trovano?"*
- Problema: *"Anni di lavoro per farti conoscere. Ma oggi i clienti ti cercano online... Ti trovano?"*
- Soluzione: *"Il passaparola oggi è digitale. Noi ti ci portiamo."*
- Servizi: *"Tutto quello che ti serve per passare online."*
- Prezzi: *"Il prezzo più basso che troverai in giro. Il resto lo decidiamo insieme, in chiamata."*
- CTA finale: *"Pronto a farti trovare?"*
- Bio (Chi c'è dietro): *"Ciao, sono Samuele. Credo che molte attività facciano bene il loro lavoro. Il problema è che spesso, cercandole online, non si trovano e perdono potenziali clienti che le stavano cercando."*

---

## 5. Struttura del sito (una pagina, sezioni in ordine)

1. **Hero** — headline + sottotitolo + CTA doppia (primaria arancione + ghost)
2. **Il problema** — 3 card: social (IG+FB), Google, il concorrente che ti ruba il cliente
3. **La soluzione** — mockup browser + telefono (profilo social), messaggio "presenza che lavora 24/7"
4. **I nostri servizi** — 3 card: Siti web, Gestione social, Campagne pubblicitarie
5. **Come funziona** — processo in 3 step (raccontaci → lavoriamo → sei online)
6. **Prezzi** — card singola (non tabella comparativa a più piani, scelta deliberata per spingere verso la chiamata) con prezzo da 399€
7. **Chi c'è dietro** — bio personale di Samuele con avatar-monogramma
8. **FAQ** — accordion, 5 domande frequenti
9. **CTA finale (Contatti)** — WhatsApp + email + badge di garanzia (pagamento sicuro, consegna 7gg, soddisfatto o rimborsato)
10. **Footer** — logo, tagline, nav, copyright, privacy/cookie policy

**Non presenti (scelta consapevole):** tabella prezzi a più piani, sezione portfolio/case study, testimonianze clienti reali (non essendoci ancora clienti).

---

## 6. Aspetti tecnici

- Sito statico: HTML + CSS + JS vanilla, nessun framework/build step
- Cookie banner GDPR completo (accetta/rifiuta/personalizza), placeholder pronti (disattivati) per Google Analytics e Meta Pixel
- Hosting: Vercel, deploy automatico da GitHub su push a `main`
- Interamente responsive (verificato da 320px a desktop largo)

### Dominio, DNS e email

Dominio `passaonline.it` registrato su **Hostinger**. La zona DNS autoritativa è attualmente **Vercel** (`ns1.vercel-dns.com` / `ns2.vercel-dns.com`), impostata per collegare il dominio al progetto Vercel.

> ⚠️ **Email non ancora funzionante.** Spostando i nameserver su Vercel, la zona DNS di Hostinger — che contiene tutti i record della posta — ha smesso di essere interrogata. Nella zona Vercel non esiste alcun record MX o TXT, quindi `info@passaonline.it` non può ricevere né inviare. Il sito invece funziona correttamente.
>
> Il tentativo di riportare i nameserver su Hostinger via API è bloccato da un deadlock: il registro `.it` valida i nameserver prima di accettare la delega, ma `ns1/ns2.dns-parking.com` rispondono `NXDOMAIN` per il dominio perché Hostinger pubblica la zona solo *dopo* che la delega punta a loro.

**Due modi per risolvere (uno dei due, non entrambi):**

1. **Aggiungere i record mail alla zona Vercel** (consigliato, nessun rischio per il sito): ricreare su Vercel i record MX/TXT/CNAME elencati sotto, lasciando i nameserver dove sono.
2. **Riportare i nameserver su Hostinger** da hPanel (*Domini → passaonline.it → Nameserver → Usa i nameserver di Hostinger*), che orchestra pubblicazione zona e cambio delega insieme. La zona Hostinger è **già pronta e completa**: contiene sia i record mail sia gli A record verso Vercel, quindi al momento dello switch sito e posta funzionano entrambi da subito.

Record necessari (già presenti nella zona Hostinger, da replicare su Vercel se si sceglie la via 1):

| Tipo  | Nome                         | Valore                                        | Scopo |
|-------|------------------------------|-----------------------------------------------|-------|
| A     | `@`                          | `216.198.79.1`, `64.29.17.1`                  | sito su Vercel (apex) |
| A     | `www`                        | `216.198.79.1`, `64.29.17.1`                  | sito su Vercel (www) |
| MX    | `@`                          | `5 mx1.hostinger.com`, `10 mx2.hostinger.com` | ricezione posta |
| TXT   | `@`                          | `v=spf1 include:_spf.mail.hostinger.com ~all` | SPF |
| TXT   | `_dmarc`                     | `v=DMARC1; p=none`                            | DMARC |
| CNAME | `hostingermail-a._domainkey` | `hostingermail-a.dkim.mail.hostinger.com`     | DKIM |
| CNAME | `hostingermail-b._domainkey` | `hostingermail-b.dkim.mail.hostinger.com`     | DKIM |
| CNAME | `hostingermail-c._domainkey` | `hostingermail-c.dkim.mail.hostinger.com`     | DKIM |
| CNAME | `autodiscover`               | `autodiscover.mail.hostinger.com`             | config automatica client |
| CNAME | `autoconfig`                 | `autoconfig.mail.hostinger.com`               | config automatica client |

Gli A record puntano a Vercel: sono i valori ufficiali per il collegamento tramite DNS esterni, e valgono sia per l'apex sia per `www`.

Casella `info@passaonline.it` su piano Hostinger **Starter Business Email** (attivo, in trial dal 29/07/2026). Una volta sistemati i DNS, la casella va creata da hPanel se non esiste già. Parametri client:

- IMAP: `imap.hostinger.com`, porta 993, SSL/TLS
- SMTP: `smtp.hostinger.com`, porta 465, SSL/TLS
- Webmail: https://mail.hostinger.com

**Attenzione:** l'indirizzo `info@passaonline.it` è già pubblicato sul sito (sezione contatti, privacy policy, cookie policy). Finché i DNS non sono sistemati, chi scrive a quell'indirizzo riceve un errore di consegna.

**Regola per il futuro:** se si ricollega il dominio a un progetto Vercel, NON usare il metodo "nameserver" — usare sempre i record A qui sopra, altrimenti la posta smette di funzionare.

---

## 7. Cosa NON cambiare senza motivo

- Non introdurre una tabella prezzi a più piani — è una scelta strategica deliberata (spinge alla chiamata invece di far scegliere il cliente da solo)
- Non aggiungere claim non veri (case study, numero di clienti, anni di esperienza) — Samuele è agli inizi, l'onestà è parte del posizionamento
- Non usare toni aggressivi/salesy — il mood è pacato, colloquiale, "una persona che ti aiuta", non un funnel di vendita
- Mantenere sempre il colore arancione (#FF6B2C) come unico accento cromatico
