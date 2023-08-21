import { Router } from "express";
import axios from "axios"
const routes = Router();

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]};

routes.get("/quotes/islami", async (req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/SatganzDevs/DataApi/main/random/quotesislam.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/quotes/dilan", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/dilan.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/quotes/galau", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/galau.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/quotes/motivasi", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/motivasi.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/quotes/senja", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/senja.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/quotes/bacot", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/bacot.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/quotes/katailham", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/katailham.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/gombal", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random/gombal.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/quotes/bucin", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/bucin.json');
console.log(response.data)
const randomQuote = await pickRandom(response.data);
res.json({
status: true,
quote: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

          const lyrics = async (judul) => {
            return new Promise(async (resolve, reject) => {
              axios
                .get("https://www.musixmatch.com/search/" + judul)
                .then(async ({ data }) => {
                  const $ = cheerio.load(data);
                  const hasil = {};
                  let limk = "https://www.musixmatch.com";
                  const link =
                    limk +
                    $("div.media-card-body > div > h2").find("a").attr("href");
                  await axios.get(link).then(({ data }) => {
                    const $$ = cheerio.load(data);
                    hasil.thumb =
                      "https:" +
                      $$(
                        "div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div"
                      )
                        .find("img")
                        .attr("src");
                    $$(
                      "div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics"
                    ).each(function (a, b) {
                      hasil.lirik =
                        $$(b).find("span > p > span").text() +
                        "\n" +
                        $$(b).find("span > div > p > span").text();
                    });
                  });
                  resolve(hasil);
                })
                .catch(reject);
            });
          };

routes.get("/lirik", async(req, res) => {
  var lirik = req.query.query
    if (!lirik) {
    return res.status(400).json({
      message: 'Masukan judul Lagu, Contoh ?query=1'
    });
  }
var result = await lyrics(lirik);
  res.json({
    status: true,
    creator: 'ＳａｔｇａｎｚＤｅｖｓ',
    result
  })
})

routes.get("/quotes/anime", async(req, res) => {
  var anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)];
  res.json({
    status: 200,
    creator: 'ＳａｔｇａｎｚＤｅｖｓ',
    result: result
  })
})

routes.get("/kbbi", async(req, res) => {
  var sult = await fetch(`https://kamus-kbbi.cyclic.app/entri/${req.query.kata}`)
  var result = await sult.json()
  res.json({
    result
  })
})

routes.get("/taugasih", async(req, res) => {
try {
const response = await axios.get('https://raw.githubusercontent.com/SatganzDevs/scrape/main/taugasih.json');
console.log(response.data)
const randomQuote = response.data[Math.floor(Math.random() * response.data.length)]
res.json({
status: true,
fakta: randomQuote,
author: 'ＳａｔｇａｎｚＤｅｖｓ'
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})

routes.get("/simi", async (req, res) => {
  let message = req.query.message;

  if (!message) {
    return res.status(400).json({
      status: 400,
      message: 'Masukkan pesan!'
    });
  }


  try {
    let response = await fetch(`https://simsimi.fun/v2/?mode=talk&lang=en&message=${message}&filter=false`);
    let results = await response.json();

    if (results.success) {
      res.status(200).json({
        status: 200,
        creator: 'ＳａｔｇａｎｚＤｅｖｓ',
        message: results.success
      });
    } else {
      res.status(500).json({
        status: 500,
        message: 'Terjadi kesalahan saat berbicara dengan Simi'
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Terjadi kesalahan saat berbicara dengan Simi'
    });
  }
});

export default routes;