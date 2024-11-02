"use client";

import { useState } from 'react';
import { CSSProperties } from 'react';

type Quest = {
  quest: string;
  reward: string;
};

export default function Home() {
  const quests: Quest[] = [
    { quest: "Mutfaktaki en gizemli atistirmaligi bul ve ev sahibine sun.", reward: "Bir paket gorunmez cips kazandin afiyet olsun" },
    { quest: "Evde kaybolmus bir esyayi bulup ev sahibine getir.", reward: "Tuhaf ama anlamli gorunen bir dugme kazandin onu asla kaybetme." },
    { quest: "Bardagini doldurabilecegin bir iksir bul ve getir.", reward: "Eski bir sisede buyu suyu." },
    { quest: "Kedilerin en hirciniyla dostluk kur ve onu mutlu et.", reward: "Kedi fisildayici unvanini artik kullanabilirsin." },
    { quest: "Kopege sarilip onu mutlu et.", reward: "Kopek Psikologu oldun, +5 animal love." },
    { quest: "Evdeki en gizemli atistirmaligi bul ve tadim yap.", reward: "Atistirmalik Avcisi madalyasi kazandin." },
    { quest: "Bir sarki soylemeye basla.", reward: "Parti DJ'i unvanini kullanabilirsin." },
    { quest: "Kediyi izleyip onun pesinden git, ama cok korkutma.", reward: "Bundan sonra kedinin pesinden kosturma konusunda deneyimlisin." },
    { quest: "Bir sise su al ve bunu buyulu bir iksir gibi sun.", reward: "Bir sonraki seneye kadar su bukucu ünvanini kullanabilirsin" },
    { quest: "Evde bir halloween dekoru bul.", reward: "Balkabagi seklinde bir odul sertifikasi hayal et, hakettin." },
    { quest: "Dans etmeye basla.", reward: "Kaf dagindaki Dans Yildizi kupasi artik senin " },
    { quest: "Eglenceli bir selfie cek ve gostermek icin ev sahibine sun.", reward: "Parti Fotografcisi olarak anilabilirsin." },
    { quest: "Kedilere yemek vermis gibi yap, ve ev sahibine bildir.", reward: "Iki tane yolunmus ordek kazandin, yumurtadan cikmalarini bekle." },
    { quest: "Baskalarinin kostumlerini incelediginden emin ol.", reward: "Kostum Bekcisi icin tacin icin seneye ayni gün ayni saatte burada ol." },
    { quest: "Bir hayaletin yerini göster, ve misafirlerden birini orada bir hayalet olduğuna ikna et.", reward: "Hayalet Kahini oldun artik hayaletlerle konuşabilirsin." },
    { quest: "En iyi icecegi bulup gizlice al.", reward: "Icecek artik senin dikkatli iç." },
  ];
  

  const [currentQuest, setCurrentQuest] = useState<Quest | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const getNextQuest = () => {
    const randomQuest = quests[Math.floor(Math.random() * quests.length)];
    setCurrentQuest(randomQuest);
    setResult(null);
  };

  const handleSuccess = () => {
    setResult(`Ödül: ${currentQuest?.reward}`);
  };

  const handleFailure = () => {
    setResult("Gid gud!");
  };

  return (
    <div style={styles.container}>
      {!currentQuest ? (
        <button onClick={getNextQuest} style={styles.exclamationButton}>
          <span>❗ Görevi Kabul etmek için tikla!</span>
        </button>
      ) : (
        <div style={styles.questContainer}>
          <p style={styles.questText}>{currentQuest.quest}</p>
          <div style={styles.buttonContainer}>
            <button onClick={handleSuccess} style={styles.actionButton}>Başarılı</button>
            <button onClick={handleFailure} style={styles.actionButton}>Başarısız</button>
          </div>
          {result && <p style={styles.resultText}>{result}</p>}
        </div>
      )}
    </div>
  );
}




  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "20px",
      backgroundColor: "#D2B48C", // light brown
      textAlign: "center",
    },
    exclamationButton: {
      fontSize: "44px",
      padding: "10px 20px",
      margin: "20px 0",
      cursor: "pointer",
    },
  questContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  questText: {
    fontSize: '44px',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  actionButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#FFD700', // gold
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#000000', // black
  },
  resultText: {
    fontSize: '44px',
    marginTop: '20px',
    fontStyle: 'italic',
    color: '#000000', // black
  },
};