import React from "react";

const Resurse = () => {
  let titles = {
    justifyContent: "Center",
    alignItems: "Center",
    padding: "20px 30px",
    color: "#e49605",
    fontWeight: "2000",
  };
  let paragrafe = {
    justifyContent: "left",
    alignItems: "Left",
    padding: "0px 30px",
    width: "1000px",
  };
  let subtitles = {
    justifyContent: "left",
    alignItems: "Left",
    padding: "10px 30px",
    color: "#e49605",
    fontWeight: "2000",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Center",
          padding: "30px 0",
        }}
      >
        <h1>Resurse</h1>
      </div>

      <div className="resursePage">
        <div style={titles}>
          <h2>Resursele din care eu învăț</h2>
        </div>

        <div className="content-resurse text1">
          <p>
            Când vine vorba de învățare, eu sunt genul de persoană care{" "}
            <strong>a)</strong> ușor se plictisește și <strong>b) </strong>
            preferă cărțile cursurilor video. <br /> De asta eu învăț din mai
            multe cărți și resurse deodată. M-am plictisit de una? Învăț din
            alta.
          </p>
        </div>

        <div style={titles}>
          <h2>Programare</h2>
        </div>

        <div style={subtitles}>
          <h3>Colegiu</h3>
        </div>

        <br />

        <div className="content-resurse text2">
          <p>
            Pentru Java am cărțile <i>Think Java</i>, <i>Core Java</i>,{" "}
            <i>Effective Java</i>, <i>OCA Java SE8</i>,{" "}
            <i>Modern Java In Action</i>, și{" "}
            <i>Design Patterns (Gang of Four)</i>. Cu toate acestea, eu cred că
            cel mai bine înveți atunci când lucrezi la un proiect, cu minimul de
            cunoștințe. De aceea, nu citesc cărțile cap-coadă, ci le folosesc ca
            referințe pentru a-mi adânci cunoștințele obținute de pe
            stackoverflow și indienii youtube-ului.
          </p>
        </div>

        <br />

        <div style={subtitles}>
          <h3>Restul</h3>
        </div>

        <div className="content-resurse text3">
          <p>
            {" "}
            În timpul liber, învăț din 3 resure principale:{" "}
            <a href="https://teachyourselfcs.com/">
              Teach Yourself Computer Science
            </a>
            ,<a href="https://github.com/ossu/computer-science"> OSSU</a> și{" "}
            <a href="https://functionalcs.github.io/curriculum/#Principles%20of%20Functional%20Programming">
              functionalcs
            </a>
            . Care e cea mai bună dintre ele - nu pot spune. Toate 3 sunt
            structurate ca o curiculă, de aceea calitatea lor depinde în mare
            parte de resursele pe care fiecare le recomandă.
            <br /> <br /> La momentul scrierii, învăț din SICP. Pot să spun că
            ea “rupe mozgu” destul de bine, de asta eu încerc să o evit pe cât
            posibil, prin cursul acesta. Din functionalcs citesc doar câteva
            cărți (cele de OCaml și SML), dar nu citesc tot, ci doar lucrurile
            pe care nu le știu (evident, sunt multe lucruri care se repetă în 3
            curicule).
          </p>
        </div>

        <div style={titles}>
          <h2>Matematica</h2>
        </div>

        <div className="content-resurse text4">
          <p>
            {" "}
            Aici am o grămadă de cărți. La momentul actual, învăț din{" "}
            <i>Basic Mathematics</i> de Serge Lang și <i>Algebra</i> de Gelfand.
            Ambele sunt cărți cu exerciții neobișnuite la care trebuie să te
            gândești. Ambele încep de la lucruri elementare, îți dau minimul de
            cunoștințe, și te pun să le aplici pe exerciții care necesită
            gândire. Basic Mathematics include geometrie și trigonometrie,
            explicate, la fel, foarte succint. Nu necesită absolut nici o
            cunoștință matematică (poate doar tabla înmulțirii și să numeri până
            la 100).
            <br /> <br />
            Cel care a creat functionalcs are și un fel de două feluri pentru
            matematică. Cartea pe care el o recomandă, însă, e mult prea
            jostkaia pentru mine. YMMV.
          </p>
        </div>
      </div>
    </>
  );
};

export default Resurse;
