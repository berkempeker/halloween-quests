"use client";

import { useState } from 'react';
import { CSSProperties } from 'react';

type Quest = {
  quest: string;
  reward: string;
};

export default function Home() {
  const quests: Quest[] = [
    { quest: "Mutfaktaki en gizemli atistirmaligi bul ve ev sahibine sun.", reward: "Bir paket gorunmez cips." },
    { quest: "Evde kaybolmus bir esyayi bulup ev sahibine getir.", reward: "Tuhaf ama anlamli gorunen bir dugme." },
    { quest: "Bardaginizi doldurabileceginiz bir iksir bul ve getir.", reward: "Eski bir sisede buyu suyu (soda sisesi olabilir)." },
    { quest: "Kedilerden biriyle dostluk kur ve onu mutlu et.", reward: "Hayali bir kedi fisildayici unvani." },
    { quest: "Kopege sarilip onu mutlu et.", reward: "Kopek Psikologu rozeti." },
    { quest: "Evdeki en gizemli atistirmaligi bul ve tadim yap.", reward: "Atistirmalik Avcisi madalyasi." },
    { quest: "Bir sarki baslat ya da mevcut bir sarkiya eslik et.", reward: "Parti DJ'i unvani." },
    { quest: "Bir kediyi izleyip onun pesinden git, ama cok korkutma.", reward: "Bir paket kedinin pesinden kosturma tuyosu." },
    { quest: "Bir sise su al ve bunu buyulu bir iksir gibi sun.", reward: "Su buyucusu madalyasi." },
    { quest: "Evde bir balkabagi dekoru bul.", reward: "Balkabagi seklinde hayali bir odul sertifikasi." },
    { quest: "Sarkilardan birinde dans et.", reward: "Dans Yildizi kupasi." },
    { quest: "Eglenceli bir selfie cek ve gostermek icin ev sahibine sun.", reward: "Parti Fotografcisi rozeti." },
    { quest: "Kedilere yemek vermis mis gibi yap, ev sahibine bildir.", reward: "Iki tane yolunmus ordek." },
    { quest: "Baskalarinin kostumlerini incelediginden emin ol.", reward: "Kostum Bekcisi icin tac." },
    { quest: "Bir hayalet tahmini yap, misafirlerden birine sor.", reward: "Hayalet Kahin madalyonu." },
    { quest: "Son icecegi bulup basarili bir sekilde al.", reward: "Sihirli Gorev Uguru." }
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
          <span>❗ Tıkla ve yeni görevin karşında, maceracı!</span>
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
      backgroundColor: "#333",
      textAlign: "center",
    },
    exclamationButton: {
      fontSize: "24px",
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
    fontSize: '20px',
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
    backgroundColor: '#7cfc00',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  resultText: {
    fontSize: '18px',
    marginTop: '20px',
    fontStyle: 'italic',
  },
};