# Node.js REST API för Studenthantering

Detta är ett Node.js-baserat REST API som hanterar student- och kursinformation. API:et bygger på Express.js och använder MySQL för datalagring. Projektet är strukturerat enligt MVC-mönstret för att organisera koden mer effektivt och inkluderar en webbgränssnitt för användarinteraktion.

## Funktioner

- **CRUD-operationer**: Skapa, läsa, uppdatera och ta bort information för studenter och kurser.
- **Sökfunktionalitet**: Möjliggör sökning efter studenter och kurser baserat på olika parametrar.
- **Säkerhet**: Använder .env-filer för att hantera konfidentiell information och förberedda uttalanden för att förebygga SQL-injektioner.

## Teknologier

- **Node.js**: Serverplattform.
- **Express.js**: Webbramverk för Node.js.
- **MySQL**: Databas för lagring av data.
- **phpMyAdmin**: Verktyg för enklare hantering av MySQL-databaser.

## Förutsättningar

Innan du börjar, se till att följande programvara är installerad:

- Node.js
- npm (Node Package Manager)
- MySQL Server
- phpMyAdmin (valfritt)


**Installera Nödvändiga Paket**

npm install

**Konfigurera Miljövariabler**
Skapa en `.env`-fil i projektroten och konfigurera dina databasinställningar:

DB_HOST=localhost
DB_USER=myUser
DB_PASS=myPassword
DB_NAME=myDatabase

## Kör Projektet

Starta servern genom att köra:

npm start
