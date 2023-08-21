import { Router } from "express";
import axios from "axios"
import cheerio from "cheerio"
import fetch from "node-fetch"
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

routes.get("/religi/kisahnabi", async (req, res) => {
  let nama_nabi = req.query.nabi
  if (!nama_nabi) {
    return res.status(400).json({
      message:'masukan nama nabi'
    })
  }
  let re = await fetch(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Islami/${nama_nabi}.json`)
  let result = await re.json()
  res.json({
    status: 200,
    creator: 'ＳａｔｇａｎｚＤｅｖｓ',
    result
  })
})

routes.get("/religi/asmaulhusna", async (req, res) => {
  let q = req.query.query; // Mengambil nilai query parameter "query"
  
  if (!q) {
    return res.status(400).json({
      message: 'Masukan Index, Contoh ?query=1'
    });
  }

  try {
    let re = await fetch(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Islami/asmaulhusna.json`);
    let result = await re.json();

    const index = parseInt(q);
    if (isNaN(index) || index < 1 || index > result.result.length) {
      return res.status(400).json({
        message: 'Indeks tidak valid'
      });
    }

    const selectedData = result.result[index - 1]; // Karena indeks dimulai dari 1
    res.json({
      status: 200,
      creator: 'ＳａｔｇａｎｚＤｅｖｓ',
      asmaulhusna: selectedData
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil data'
    });
  }
});

routes.get("/religi/doaharian", async (req, res) => {
  let re = await axios.get(`https://raw.githubusercontent.com/SatganzDevs/scrape/main/doaharian.json`)
  let result = re.data[Math.floor(Math.random() * re.data.length)]
  res.json({
    status: 200,
    creator: 'ＳａｔｇａｎｚＤｅｖｓ',
    result
  })
})

routes.get("/random/meme", async (req, res) => {
  let asu = await fetch('https://meme-api.com/gimme')
  let result = await asu.json()
  try {
    const response = await axios.get(result.url, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})  

routes.get("/random/darkjokes", async (req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/SatganzDevs/scrape/main/darkjoke.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/stiker/amongus', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/among.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/stiker/anime', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/animestick.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/stiker/mukalu', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/mukalu.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/stiker/doge', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/doge.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/stiker/paimon', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/paimon.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/stiker/patrick', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Sticker/patrick.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/wallpaper/programming', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/programming.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/wallpaper/pegunungan', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/mountain.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/wallpaper/cyberspace', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/cyberspace.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/wallpaper/pegunungan', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/mountain.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get('/wallpaper/teknologi', async (req,res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/technology.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get("/mangasearch", async(req, res) => {
try {
var q = req.query.query
const response = await fetch("https:/.jikan.moe/v4/manga?q=" + q)
var resz = await response.json()
res.json({
status: true,
creator: 'ＳａｔｇａｎｚＤｅｖｓ',
result: resz
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})


routes.get("/animesearch", async(req, res) => {
try {
var q = req.query.query
const response = await fetch("https://kyoko.rei.my.id/myanimelist.php?query=" + q)
var result = await response.json()
res.json({
status: true,
creator: 'ＳａｔｇａｎｚＤｅｖｓ',
result
});
} catch (error) {
console.error(error);
res.json({ status: false, message: 'An error occurred' });
}
})


routes.get("/random/waifu", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/waifu.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get("/random/loli", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/loli.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})

routes.get("/animewallpaper", async(req, res) => {
  let asu = await fetch('https://raw.githubusercontent.com/SatganzDevs/scrape/main/wppanime.json')
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
})


routes.get("/anime", async(req, res) => {
let listChar = [
"akira",
"akiyama",
"ana",
"asuna",
"ayuzawa",
"boruto",
"chitoge",
"deidara",
"doraemon",
"elaina",
"emilia",
"erza",
"gremory",
"hestia",
"hinata",
"inori",
"isuzu",
"itachi",
"itori",
"kaga",
"kagura",
"kakasih",
"kaori",
"keneki",
"kotori",
"kurumi",
"madara",
"mikasa",
"miku",
"minato",
"naruto",
"nezuko",
"onepiece",
"pokemon",
"rize",
"sagiri",
"sakura",
"sasuke",
"shina",
"shinka",
"shizuka",
"shota",
"toukachan",
"tsunade",
"yuki"
]
var q = req.query.query
  if (!q) {
    return
  res.status(400).json({
  creator: 'ＳａｔｇａｎｚＤｅｖｓ',
  message: `penggunaan salah!\nContoh penggunaan : api/anime?query=madara`
})
  }
  if (!listChar.includes(q)) {
    return res.json({
  status: 400,
  creator: 'ＳａｔｇａｎｚＤｅｖｓ',
  message: `Karakter Tidak ada di list.`
})
  }

  let asu = await fetch(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${q}.json`)
  let resu = await asu.json()
  let result = resu[Math.floor(Math.random() * resu.length)]
  try {
    const response = await axios.get(result, { responseType: 'arraybuffer' });

    // Mendapatkan konten gambar dari respons array buffer
    const imageContent = response.data;

    // Mengatur tipe konten respons sebagai gambar
    res.setHeader('Content-Type', 'image/jpeg');

    // Mengirimkan konten gambar sebagai respons
    res.send(imageContent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }  
})

const pindl = async(url) => {
  try {
    let form = new URLSearchParams();
    form.append("url", url);
    let html = await (
      await fetch("https://pinterestvideodownloader.com/", {
        method: "POST",
        body: form,
      })
    ).text();
    const $ = cheerio.load(html);
    const videoSrc = $('video').attr('src');
    if (videoSrc) {
      return { status: true, creator: 'ＳａｔｇａｎｚＤｅｖｓ', videoUrl: videoSrc };
    } else {
      return { status: false, error: "Video not found" };
    }
  } catch (error) {
    return { status: false, error: error.message };
  }
}
function scdl(link) {
      return new Promise((resolve, reject) => {
        const options = {
          method: "POST",
          url: "https://www.klickaud.co/download.php",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
          formData: {
            value: link,
            "2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37":
              "710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3",
          },
        };
        request(options, async function (error, response, body) {
          console.log(body);
          if (error) throw new Error(error);
          const $ = cheerio.load(body);
          resolve({
            status: 200,
            creator: 'ＳａｔｇａｎｚＤｅｖｓ',
            judul: $(
              "#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)"
            ).text(),
            download_count: $(
              "#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)"
            ).text(),
            thumb: $(
              "#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img"
            ).attr("src"),
            link: $("#dlMP3")
              .attr("onclick")
              .split(`downloadFile('`)[1]
              .split(`',`)[0],
          });
        });
      });
    }

const xnxxsearch = async(query) => {
      return new Promise((resolve, reject) => {
        const baseurl = "https://www.xnxx.com";
        fetch(
          `${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`,
          { method: "get" }
        )
          .then((res) => res.text())
          .then((res) => {
            let $ = cheerio.load(res, {
              xmlMode: false,
            });
            let titles = [];
            let urls = [];
            let descs = [];
            let results = [];
            $("div.mozaique").each(function (a, b) {
              $(b)
                .find("div.thumb")
                .each(function (c, d) {
                  urls.push(
                    baseurl +
                      $(d).find("a").attr("href").replace("/THUMBNUM/", "/")
                  );
                });
            });
            $("div.mozaique").each(function (a, b) {
              $(b)
                .find("div.thumb-under")
                .each(function (c, d) {
                  descs.push($(d).find("p.metadata").text());
                  $(d)
                    .find("a")
                    .each(function (e, f) {
                      titles.push($(f).attr("title"));
                    });
                });
            });
            for (let i = 0; i < titles.length; i++) {
              results.push({
                status: 200,
                creator: 'ＳａｔｇａｎｚＤｅｖｓ',
                title: titles[i],
                info: descs[i],
                link: urls[i],
              });
            }
            resolve({
              title: titles[0],
              info: descs[0],
              link: urls[0],
            });
          })
          .catch((err) => reject({ code: 503, status: false, result: err }));
      });
    }
    const xnxxdl = async(URL) => {
      return new Promise((resolve, reject) => {
        fetch(URL, { method: "get" })
          .then((res) => res.text())
          .then((res) => {
            let $ = cheerio.load(res, {
              xmlMode: false,
            });
            const title = $('meta[property="og:title"]').attr("content");
            const duration = $('meta[property="og:duration"]').attr("content");
            const image = $('meta[property="og:image"]').attr("content");
            const videoType = $('meta[property="og:video:type"]').attr(
              "content"
            );
            const videoWidth = $('meta[property="og:video:width"]').attr(
              "content"
            );
            const videoHeight = $('meta[property="og:video:height"]').attr(
              "content"
            );
            const info = $("span.metadata").text();
            const videoScript = $(
              "#video-player-bg > script:nth-child(6)"
            ).html();
            const files = {
              low: (videoScript.match(
                "html5player.setVideoUrlLow\\('(.*?)'\\);"
              ) || [])[1],
              high: videoScript.match(
                "html5player.setVideoUrlHigh\\('(.*?)'\\);" || []
              )[1],
              HLS: videoScript.match(
                "html5player.setVideoHLS\\('(.*?)'\\);" || []
              )[1],
              thumb: videoScript.match(
                "html5player.setThumbUrl\\('(.*?)'\\);" || []
              )[1],
              thumb69: videoScript.match(
                "html5player.setThumbUrl169\\('(.*?)'\\);" || []
              )[1],
              thumbSlide: videoScript.match(
                "html5player.setThumbSlide\\('(.*?)'\\);" || []
              )[1],
              thumbSlideBig: videoScript.match(
                "html5player.setThumbSlideBig\\('(.*?)'\\);" || []
              )[1],
            };
            resolve({
              status: 200,
              creator: 'ＳａｔｇａｎｚＤｅｖｓ',
              title,
              URL,
              duration,
              image,
              videoType,
              videoWidth,
              videoHeight,
              info,
              files,
            });
          })
          .catch((err) => reject({ code: 503, status: false, result: err }));
      });
    }

routes.get("/xnxxsearch", async(req, res) => {
let query = req.query
  if (!query) {
    return res.status(500).json({
      status: 500,
      message: 'Masukkan query pencarian!'
    });
  }
 let result = await xnxxsearch(query)
    res.json({result})
}) 

routes.get("/xnxxdl", async(req, res) => {
let url = req.query.url
  if (!url) {
    return res.status(500).json({
    status: 500,
    message: 'masukan url video!'
  })
  }
 let result = await xnxxdl(url)
    res.json({result})
}) 

routes.get("/pinterestdl", async(req, res) => {
let url = req.query.url
  if (!url) {
    return res.status(500).json({
    status: 500,
    message: 'masukan url video!'
  })
  }
 let result = await pindl(url)
    res.json({result})
}) 

routes.get("/scdl", async(req, res) => {
let url = req.query.url
  if (!url) {
    return res.status(500).json({
    status: 500,
    message: 'masukan url video!'
  })
  }
 let result = await scdl(url)
    res.json({result})
}) 


export default routes;