import Navbar from "./util/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div>
          <h1>Actinidia deliciosa</h1>
          <p>
            Kiwifruit or Chinese gooseberry is the edible berry of several
            species of woody vines in the genus Actinidia. They're oval, about
            the size of a large egg and have thin, fuzzy, fibrous, tart but
            edible light brown skin and light green or golden flesh with rows of
            tiny, black, edible seeds. The fruit has a soft texture with a sweet
            and unique flavour. Kiwifruit is native to central and eastern
            China. The first recorded description of the kiwifruit dates to the
            12th century during the Song dynasty. In the early 20th century,
            cultivation of kiwifruit spread from China to New Zealand, where the
            first commercial plantings occurred. The fruit became popular with
            British and American servicemen stationed in New Zealand during
            World War II, and later became commonly exported, first to Great
            Britain and then to California in the 1960s.
          </p>

          <h1>The best two Kiwi types</h1>
          <div>
            <div>
              <img src="/images/golden.jpg" alt="..." />
              <div>
                <h5>Golden Kiwi</h5>
                <p>
                  Capitalism popped off when they came up with these sweet tangy
                  juicy delicious berry of greateness.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/fuzy.png" alt="..." />
              <div>
                <h5>Fuzy Kiwi</h5>
                <p>
                  The texture, the color, the fuz, the taste, and the sour skin
                  you NEED to eat. All in all heaven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
