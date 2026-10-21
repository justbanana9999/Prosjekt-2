### Hva er et tallsystem?
Det er allmennkunnskap at vi bruker ti sifre for å telle. Men hvordan funker det egentlig? Og finnes det andre tallsystemer?

Vi bruker base-10. Det vil si at vi teller med første sifferet fra 0 til 9, før neste siffer går opp med 1.

### Hvordan finner vi verdien?

Alle tallsystemer bruker posisjonssystemet.

For å finne verdien av hvilket som helst tall fra andre tallsystemer, kan man bruke denne tabellen:

| ... | 4     | 3     | 2     | 1     | Posisjon |
| --- | ----- | ----- | ----- | ----- | -------- |
| ... | $x^3$ | $x^2$ | $x^1$ | $x^0$ | Verdi    |
(der $x$ er grunntallet / basen)

Hvis man legger opp verdiene fra nederste rad, får man verdien i sitt eget tallsystem.

Herunder kan vi kalle tall fra x-tallssystemet til base-x, eller så kan vi si tall_x

***

Ett eksempel er å gjøre om 1523 i base-8 til et tall i base-10:

Verdien til hver posisjon i base-8 er:

|     | $8^3$ | $8^2$ | $8^1$ | $8^0$ |
| --- | ----- | ----- | ----- | ----- |
| =   | $512$ | $64$  | $8$   | $1$   |
Hvis vi ganger hvert siffer fra 1523_8 med hvert tall, henholdsvis:

| $1 \cdot 512$ | $5 \cdot 64$ | $2 \cdot 8$ | $3 \cdot 1$ |
| ------------- | ------------ | ----------- | ----------- |
Får vi:

| $512$         | $320$        | $16$        | $3$         |
| ------------- | ------------ | ----------- | ----------- |
Lagt sammen blir 851 i base-10.

***

Hvis vi vil gjøre om et tall fra base-10 til base-8 (som for eksempel 342), må vi bruke en annen metode, fordi vi ikke greier å regne i base-8.

Vi må først starte med et siffer intuitivt til venstre, avhengig av hvor stort tallet er. Vi kan begynne med det fjerde sifferet. Husk at man må opphøye grunntallet med (1 minus siffertall):

1. 8^3 = 512 > 342 , så det finnes ingen tall som ligger i fjerde siffer.
2. 64 < 342 , så det finnes tall som ligger i tredje siffer. Vi trenger ikke sjekke mer av dette.
3. 342/62 = 5.34 ; Tredje siffer er lik 5.
4. 342 - 5\*8² = 22
5. 22/16 = 2.75 ; Andre siffer er lik 2.
6. 22 - 2\*8 = 6
7. 6/1 = 6 ; Første siffer er lik 6.

Tallet blir da 526_8.

***

Samme tall i en mindre base vil alltid være mindre enn samme tallet i en høyere base.

***

Det er veldig enkelt å gjøre om 16-bit-tall (hexadesimal) til binær, fordi 2 kan bli opphøyd i 4 for å gi 16.

A78_16 = 1010 0111 1000_2

Fordi:

| base-16 | $0$ | $1$ | $2$  | $3$  | $4$   | $5$   | $6$   | $7$   |
| ------- | --- | --- | ---- | ---- | ----- | ----- | ----- | ----- |
| base-2  | $0$ | $1$ | $10$ | $11$ | $100$ | $101$ | $110$ | $111$ |

| base-16 | $8$    | $9$    | $A$    | $B$    | $C$    | $D$    | $E$    | $F$    |
| ------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| base-2  | $1000$ | $1001$ | $1010$ | $1011$ | $1100$ | $1101$ | $1110$ | $1111$ |

Når man legger til et siffer hos tallet i base-16 på høyre side, vil man legge til 4 tall i tallet i base-2 på høyre side.

Samme skjer med tall i base-4, fordi 4 kan bli opphøyd i 2 for å gi 16. Det betyr at når man legger til et siffer i base-16, legger man til 2 sifre i base-4.

### Fargesystemer

Mange programmer tar i bruk hexadesimal-tall for å representere farger. Dette er fordi skjermer pleier å ha 256 ulike lysstyrker på hver pixel (0-255), på hver fargekanal, og et tosifret hexadesimaltall kan gi tall mellom 0 og 255_10.

Eksempel:

88AABB:

Rødt = 88_16 = 136_10
Grønt = AA_16 = 170_10
Blått = BB_16 = 187_10

Fargen vil se slik ut:

Når begge sifrene i hvert kanal er like, kan man forkorte det slik:

88AABB = 8AB