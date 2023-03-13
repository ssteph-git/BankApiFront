import Advertisement from "../components/advertisement";
import Exemple from "../components/example";

function Home() {
  return (
    <>
    <main>
      <Advertisement/>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Exemple src="./assets/icon-chat.png" title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."/>
        <Exemple src="./assets/icon-money.png" title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!"/>
        <Exemple src="./assets/icon-security.png" title="Security you can trust" text="We use top of the line encryption to make sure your data and money
            is always safe."/>
      </section>
      </main>
    </>
  );
}

export default Home;
