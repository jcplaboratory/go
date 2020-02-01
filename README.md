<p align="center"><a href="#" title="kutt.it"><img src="https://www.jcplaboratory.org/wp-content/uploads/2018/03/nav-banner_ra_large.png" alt="J.C.P Laboratory GO"></a></p>

# J.C.P Laboratory GO

GO is a private URL shortener based on Kutt.

*Contributions and bug reports are welcome.*

## Stack
* Node (Web server)
* Express (Web server framework)
* Passport (Authentication)
* React (UI library)
* Next (Universal/server-side rendered React)
* Redux (State management)
* styled-components (CSS styling solution library)
* Recharts (Chart library)
* Neo4j *version 3.5.14* (Graph database)

### Install Neo4j version 3.5.14
<code>
        wget -O - https://debian.neo4j.org/neotechnology.gpg.key | sudo apt-key add -
        echo 'deb https://debian.neo4j.org/repo stable/' | sudo tee /etc/apt/sources.list.d/neo4j.list
        sudo apt-get update
        sudo apt-get install neo4j=1:3.5.14
</code>



## Setup
You need to have [Node.js](https://nodejs.org/), [Neo4j](https://neo4j.com/) and [Redis](https://redis.io/) installed on your machine.

1. Clone this repository or [download zip](https://github.com/thedevs-network/kutt/archive/develop.zip).
2. Copy `.example.env` to `.env`  and fill it properly.
3. Install dependencies: `npm install`.
4. Start Neo4j database.
5. Run for development: `npm run dev`.
6. Run for production: `npm run build` then `npm start`.

**[Visit Kutt.it project page for more information.](https://github.com/thedevs-network/kutt/)**

## Browser Extensions
Download Kutt's extension for web browsers via below links. You can also find the source code on [kutt-extension](https://github.com/abhijithvijayan/kutt-extension).
* [Chrome](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/kutt/)

## API
In addition to the website, you can use these APIs to create, delete and get URLs.


