import React from "react";

const Liste = () => {
  let titles = {
    justifyContent: "Center",
    alignItems: "Center",
    padding: "20px 30px",
    color: "#e49605",
  };
  let subtitles = {
    justifyContent: "left",
    alignItems: "Left",
    padding: "10px 30px",
    color: "#e49605",
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
        <h1>Liste</h1>
      </div> 

      <div className="listePage">
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            padding: "10px 30px",
            color: "red",
            fontWeight: "bold",
          }}
        >
				  <h2>ATENȚIE!</h2>
        </div>

        <div className="content-lists text1">
          <p>
            Informația de aici este doar ceea ce îmi imaginez eu în cap când mă
            gândesc la acest subiect.
            <br />
            <strong>
              {" "}
              E posibil ca 90% din ceea ce am scris mai jos să fie greșit.
            </strong>{" "}
            <br />
            Scopul acestei pagini este de a oferi o prezentare generală, foarte
            abstractă și pe scurt a informației.
          </p>
        </div>

        <br />

        <div style={titles}>
          <h2>Cio za ArrayList?</h2>
        </div>

        <div style={subtitles}>
          <h3>Implementarea</h3>
        </div>

        <div className="content-lists text2">
          <p>
            List - este interfața.ArrayList și LinkedList o implementează (
            implements ).
            <br /> <br />
            <strong>ArrayList</strong> - o listă; un tablou obișnuit; același
            lucru ca un vector (nu confundați cu clasa Vector din Java.Astea
            două sunt{" "}
            <a href="https://stackoverflow.com/questions/1386275/why-is-java-vector-and-stack-class-considered-obsolete-or-deprecated?noredirect=1&lq=1">
              aproape
            </a>{" "}
            aceleași, doar că listele sunt unsynchronized). Practic, la creare
            se alocă o bucată de memorie, necesară pentru un număr anumit de
            elemente. Dacă se adaugă mai multe elemente - o bucată încă mai mare
            se alocă, iar elementele din bucata precedentă (plină) sunt copiate
            în bucata nouă. Atunci un element este șters, elementele de după
            elementul șters trebuiesc recopiate. Recopierea folosește multă
            memorie.
            <br /> <br />
            <strong>LinkedList</strong> - listă (dublu) înlănțuită. La creare nu
            se alocă memorie. Când se adaugă un element nou - se crează un
            pointer care îl leagă de elementul precedent și de cel următor. De
            obicei, asta va folosi mai multă memorie decât un ArrayList. Atunci
            când un element este șters, singurul lucru care se schimbă este
            legătura (pointerul elementului dinaintea celui șters va fi legat de
            cel de după cel șters).
          </p>
        </div>

        <div style={subtitles}>
          <h3>Ce și când folosim?</h3>
        </div>

        <div className="content-lists text3">
          <p>
            Folosim ArrayList când vrem să stocăm (salvăm, memorăm, citim și
            după accesăm etc.) date.
            <br /> <br />
            Folosim LinkedList când vrem să manipulăm datele (adăugăm, ștergem,
            modificăm). Keep in mind că această regulă nu trebuie dusă la absurd
            (nu folosi LinkedList când ai de șters 3-4 elemente, diferența va fi
            minimală, iar cel mai probabil un ArrayList va fi mai eficient).
          </p>
        </div>

        <div style={subtitles}>
          <h3>Array static vs Lista</h3>
        </div>

        <div className="content-lists text4">
          <p>
            Dacă știm dinainte cât de mare va fi array-ul dinainte (capacitatea
            sa maximă), folosim un array static (type []a = new type [n]); (cel
            puțin, așa ar spune regula).
            <br /> <br />
            Dacă nu - folosim o listă (ArrayList). Cu toate acestea, eu folosesc
            ArrayList în ambele cazuri, și vă recomand s-o faceți și voi. De ce?
          </p>
        </div>

        <div style={subtitles}>
          <h3>Item 28: Prefer lists to arrays</h3>
        </div>

        <div className="content-lists text5">
          <p>Conform Effective Java by Joshua Bloch, cod precum:</p>
          <br />
          <div className="codeExample example1">
            <pre className="codeDisplay">
              <code className="codeComments">// Va esua la runtime!</code>{" "}
              <br />
              <code className="ObjectInfo">Long[] objectArray = </code>{" "}
              <code style={{ color: "red", fontWeight: "bold" }}>new </code>
              <code className="ObjectInfo">
                Long[
                <code style={{ color: "blue", fontWeight: "bold" }}>1</code>];
              </code>{" "}
              <br />
              <code className="ObjectInfo">
                objectArray[<code style={{ color: "blue" }}>0</code>] ={" "}
                <code style={{ color: "blue" }}>"I don't fit in"</code>;
              </code>
              <code className="codeComments">
                // ArrayStoreException: tipul array-ului este Long, dar memoram
                un String
              </code>
            </pre>
          </div>
          <br />

          <p>
            este considerat corect (pentru că eșuează abia la runtime). Acest
            cod, însă
          </p>

          <br />

          <div className="codeExample example2">
            <pre className="codeDisplay">
              <code className="codeComments">// Nu se va compila</code> <br />
              <code className="ObjectInfo">
                List(Long) ll ={" "}
                <code style={{ color: "red", fontWeight: "bold" }}>new </code>
                ArrayList(Long) ();
              </code>
              <code className="codeComments">// tipuri incompatibile</code>{" "}
              <br />
              <code className="ObjectInfo">ll.add("I don't fit in");</code>
            </pre>
          </div>

          <br />

          <p>
            este considerat greșit. Desigur, el este greșit în ambele cazuri (nu
            poți pune un String într-un container de tip Long), dar cu un array
            afli despre asta după ce programul rulează (runtime), în timp ce cu
            un list - la compile time (după ce programul a fost compilat, deci
            înainte de a rula).
          </p>

          <br />

          <p>
            El (Joshua) menționează încă o diferență, ce ține de integrarea cu
            generici, dar nu o includ aici, pentru că încă nu știu prea multe
            despre ei. Dacă voi sunteți interesați, citiți cartea.
          </p>
        </div>

        <div style={subtitles}>
          <h3>Programare (aproape) funcțională și clasa stream</h3>
        </div>

        <div style={subtitles}>
          <h3>Funcțiile lambda</h3>
        </div>

        <div className="content-lists text6">
          <p>
            În limbajele de programare funcțională, instrumentul de bază este
            (ați ghicit) funcția. În astfel de limbaje avem funcții care primesc
            funcții ca parametru, și returnează alte funcții. Java nu este un
            limbaj funcțional, și totuși ea (pe lângă multe alte limbaje
            populare astăzi) împrumută lucruri din programarea funcțională.
            Desigur, implementarea lor, sintaxa ș.a.m.d variază mult (sunt, până
            la urmă, două paradigme diferite), însă esența rămâne tot acolo
            (dacă îți încruntezi privirea, așa încât ochii tăi seamănă cu cei ai
            unui asian).
          </p>
          <br />
          <p>
            Ceea ce ne apropie de programarea funcțională este stream. Nu știu
            prea multe despre ea. Mulțumesc lui Dumnezeu că exista Intellij,
            care scrie 80% din cod pentru mine. Știu doar că este așa clasă sau
            metodă - stream, care face magia.
          </p>
          <br />
          <p>
            O funcție lambda e pur și simplu o funcție fără nume. Să presupunem
            că avem codul următor:
          </p>

          <br />

          <div className="codeExample example3">
            <pre className="codeDisplay">
              <code className="ObjectInfo">
                <code style={{ color: "orange", fontWeight: "bold" }}>
                  public int
                </code>{" "}
                sum(
                <code style={{ color: "orange", fontWeight: "bold" }}>int</code>{" "}
                a,{" "}
                <code style={{ color: "orange", fontWeight: "bold" }}>int</code>{" "}
                b) ({" "}
                <code style={{ color: "orange", fontWeight: "bold" }}>
                  return
                </code>{" "}
                a + b; ) <br />
                <code style={{ color: "orange", fontWeight: "bold" }}>
                  public void
                </code>{" "}
                afiseazaSumaDouaNumere() ( <br />
                System.out.println(sum(3, 5));)
              </code>
            </pre>
          </div>
          <br />
          <p>
            Desigur, nimeni treaz la cap nu scrie astfel de cod (dacă vrei să
            afișezi cât e 3 + 5 afișezi cât e 3 + 5), dar să ignorăm acest lucru
            pentru moment. Să presupunem că avem o astfel de funcție, care este
            folosită de o altă funcție, și numai o dată. sum este folosită doar
            de metoda afiseazaSumaDouaNumere, în interiorul ei, și nicăieri
            altundeva. Ei bine, am putea face ceva ca:
          </p>

          <br />

          <div className="codeExample example4">
            <pre className="codeDisplay">
              <code className="ObjectInfo">
                <code style={{ color: "orange", fontWeight: "bold" }}>
                  public void
                </code>{" "}
                afiseazaSumaDouaNumere() ( <br />
                System.out.println((3, 5) -{">"} (
                <code style={{ color: "orange", fontWeight: "bold" }}>
                  return
                </code>{" "}
                3 + 5;));{" "}
                <code className="codeComments">
                  // ia ca parametri doua numere oricare, returneaza suma
                </code>
                )
              </code>
            </pre>
          </div>
          <br />
          <p>
            Codul de mai sus, chiar dacă nu funcționează din punct de vedere al
            limbajului, are sens, și exprimă ceea ce vrem să facem. Nu e nevoie
            să definești o funcție care face ceva simplu, și pe care oricum o
            vei folosi o singură dată.{" "}
            <strong>
              Programatorii, la fel ca matematicienii, sunt oameni lenoși.{" "}
            </strong>
            De ce să definești o funcție, când poți să nu o definești?
          </p>

          <br />
        </div>

        <div style={subtitles}>
          <h3>Iteratori</h3>
        </div>

        <div className="content-lists text6">
          <p>
            Este destul de greu de explicat ce sunt iteratorii cu cuvinte, așa
            că o s-o fac prin exemple. Ceea ce trebuie să țineți minte e că
            fiecare iterator ia ca parametri cel puțin 2 lucruri: o funcție și o
            colecție (o listă), asupra căreia să aplice funcția. În Java, însă,
            acestea iau un singur lucru (ca parametru, în orice caz), și anume
            funcția. Colecția este specificată deodată, atunci când folosim
            metoda .stream() pe ea.
          </p>
        </div>

        <div style={subtitles}>
          <h4 style={{ marginLeft: "20px" }}>- map</h4>
        </div>

        <div className="content-lists text6">
          <p>
            <strong>map</strong> ia ca parametru o funcție, pe care o aplică
            fiecărui element al colecției. Rezultatul iteratorului map este o
            colecție, în care fiecare element este rezultatul aplicării funcției
            pe elementul colecției. În exemplul de mai jos, vom crea un nou
            ArrayList, în care fiecare element este elementul respectiv din
            numere + 1.
          </p>

          <br />

          <div className="codeExample example5">
            <pre className="codeDisplay">
              <code className="ObjectInfo">
                ArrayList{"<"}Integer{">"}{" "}
              </code>{" "}
              <code className="ObjectInfo">
                numere = new ArrayList{"<>"}(List.of(1,2,5,9,11,4,7,2));
              </code>
              <br />
              <code className="ObjectInfo">
                ArrayList{"<"}Integer{">"} numereNou = (ArrayList{"<"}Integer
                {">"}) numere.stream().map(element {"->"} element = element +
                1).collect(Collectors.toList());
              </code>
            </pre>
          </div>
          <br />
          <p>Și acum, hai să analizăm pe linii.</p>
          <br />
          <p>
            1. (ArrayList{"<"}Integer{">"}) - asta se numește cast, și
            reprezintă o transformare, dintr-un tip în altul. E nevoie să
            cast-uim, pentru că în linia 3, metoda .collect(Collectors.toList())
            nu specifica tipul listei. numere.stream() - sintaxa de folosire.
            Asta e ceea ce transformă obiectul nostru într-un obiect ciotkii 😎.{" "}
            <br />
            2. .map(element {"->"} element = element + 1) - Apelul funcției
            .map() cu o lambda, care ia un argument și îi adaugă 1. Această
            funcție va crea o listă nouă, în care fiecare element este
            elemenmtul din lista numere + 1. O să accentuez faptul că .map(...)
            nu modifică lista numere, ci creează o listă nouă. <br />
            3. .collect(Collectors.toList()) - ceea ce transformă rezultatul
            aplicării map-ului într-o listă. Nu știu prea bine cum funcționează,
            dar presupun că map nu crează obiectul propriu-zis, ci îl păstrează
            în memorie, iar .collect() îl ia din memorie și îl transformă în
            valoare.
          </p>
        </div>

        <br />
      </div>
    </>
  );
};

export default Liste;
