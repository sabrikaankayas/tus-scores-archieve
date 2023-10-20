import React, { useEffect, useState } from "react";
import { Select, Space } from "antd";

const HastaneCheckBox = ({ setSelectedHastanes }) => {
  const options = [
    {
      label: "Abant İzzet Baysal Ünv. Tıp Fak.",
      value: "Abant İzzet Baysal Ünv. Tıp Fak.",
    },
    { label: "Acıbadem Ünv. Tıp Fak.", value: "Acıbadem Ünv. Tıp Fak." },
    { label: "Adana Şehir Hastanesi", value: "Adana Şehir Hastanesi" },
    { label: "Adli Tıp Kurumu", value: "Adli Tıp Kurumu" },
    {
      label: "Adnan Menderes Ünv. Tıp Fak.",
      value: "Adnan Menderes Ünv. Tıp Fak.",
    },
    { label: "Adıyaman Ünv. Tıp Fak.", value: "Adıyaman Ünv. Tıp Fak." },
    {
      label: "Afyonkarahisar Sağlık Bilimleri Ünv. Tıp Fak.",
      value: "Afyonkarahisar Sağlık Bilimleri Ünv. Tıp Fak.",
    },
    {
      label: "Ahi Evran Ünv. Tıp Fakültesi",
      value: "Ahi Evran Ünv. Tıp Fakültesi",
    },
    {
      label: "Ahi Evren Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
      value: "Ahi Evren Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
    },
    { label: "Akdeniz Ünv. Tıp Fak.", value: "Akdeniz Ünv. Tıp Fak." },
    {
      label: "Aksaray Üniversitesi Tıp Fak.",
      value: "Aksaray Üniversitesi Tıp Fak.",
    },
    {
      label: "Alanya Alaaddin Keykubat Üniversitesi Tıp Fak.",
      value: "Alanya Alaaddin Keykubat Üniversitesi Tıp Fak.",
    },
    {
      label: "Amasya Üniversitesi Tıp Fak.",
      value: "Amasya Üniversitesi Tıp Fak.",
    },
    {
      label: "Ankara Atatürk Eğt. ve Araş. Hast.",
      value: "Ankara Atatürk Eğt. ve Araş. Hast.",
    },
    {
      label:
        "Ankara Atatürk Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
      value:
        "Ankara Atatürk Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
    },
    {
      label: "Ankara Dr. Abdurrahman Yurtarslan Onkoloji Eğt. ve Araş. Hast.",
      value: "Ankara Dr. Abdurrahman Yurtarslan Onkoloji Eğt. ve Araş. Hast.",
    },
    {
      label:
        "Ankara Dr. Sami Ulus Kadın Doğum, Çocuk Sağlığı ve Hastalıkları Eğt. ve Araş. Hast.",
      value:
        "Ankara Dr. Sami Ulus Kadın Doğum, Çocuk Sağlığı ve Hastalıkları Eğt. ve Araş. Hast.",
    },
    {
      label: "Ankara Dışkapı Yıldırım Beyazıt Eğt. ve Araş. Hast.",
      value: "Ankara Dışkapı Yıldırım Beyazıt Eğt. ve Araş. Hast.",
    },
    {
      label:
        "Ankara Etlik Zübeyde Hanım Kadın Hastalıkları Eğt. ve Araş. Hast.",
      value:
        "Ankara Etlik Zübeyde Hanım Kadın Hastalıkları Eğt. ve Araş. Hast.",
    },
    {
      label: "Ankara Etlik İhtisas Eğt. ve Araş. Hast.",
      value: "Ankara Etlik İhtisas Eğt. ve Araş. Hast.",
    },
    {
      label: "Ankara Eğt. ve Araş. Hast.",
      value: "Ankara Eğt. ve Araş. Hast.",
    },
    {
      label: "Ankara Fizik Tedavi ve Rehabilitasyon Eğt. ve Araş. Hast.",
      value: "Ankara Fizik Tedavi ve Rehabilitasyon Eğt. ve Araş. Hast.",
    },
    {
      label: "Ankara Keçiören Eğt. ve Araş. Hast.",
      value: "Ankara Keçiören Eğt. ve Araş. Hast.",
    },
    {
      label: "Ankara Ulucanlar Göz Eğt. ve Araş. Hast.",
      value: "Ankara Ulucanlar Göz Eğt. ve Araş. Hast.",
    },
    { label: "Ankara Ünv. Tıp Fak.", value: "Ankara Ünv. Tıp Fak." },
    { label: "Ankara Şehir Hastanesi", value: "Ankara Şehir Hastanesi" },
    {
      label: "Antalya Eğt. ve Araş. Hast.",
      value: "Antalya Eğt. ve Araş. Hast.",
    },
    { label: "Atatürk Ünv. Tıp Fak.", value: "Atatürk Ünv. Tıp Fak." },
    {
      label: "Bahçeşehir Ünv. Tıp Fak.",
      value: "Bahçeşehir Ünv. Tıp Fak.",
    },
    {
      label: "Balıkesir Ünv. Tıp Fak.",
      value: "Balıkesir Ünv. Tıp Fak.",
    },
    {
      label: "Başakşehir Çam ve Sakura Şehir Hastanesi",
      value: "Başakşehir Çam ve Sakura Şehir Hastanesi",
    },
    { label: "Başkent Ünv. Tıp Fak.", value: "Başkent Ünv. Tıp Fak." },
    {
      label: "Beyoğlu Göz Eğitim ve Araştırma Hastanesi",
      value: "Beyoğlu Göz Eğitim ve Araştırma Hastanesi",
    },
    {
      label: "Bezm-i Alem Vakıf Üniversitesi Tıp Fakültesi",
      value: "Bezm-i Alem Vakıf Üniversitesi Tıp Fakültesi",
    },
    {
      label: "Bozok Üniversitesi Tıp Fakültesi",
      value: "Bozok Üniversitesi Tıp Fakültesi",
    },
    {
      label: "Bursa Yüksek İhtisas Eğt. ve Araş. Hast.",
      value: "Bursa Yüksek İhtisas Eğt. ve Araş. Hast.",
    },
    { label: "Bursa Şehir Hastanesi", value: "Bursa Şehir Hastanesi" },
    {
      label: "Bülent Ecevit Ünv. Tıp Fak.",
      value: "Bülent Ecevit Ünv. Tıp Fak.",
    },
    {
      label: "Celal Bayar Ünv. Tıp Fak.",
      value: "Celal Bayar Ünv. Tıp Fak.",
    },
    {
      label: "Cumhuriyet Ünv. Tıp Fak.",
      value: "Cumhuriyet Ünv. Tıp Fak.",
    },
    {
      label: "Çanakkale Onsekiz Mart Ünv. Tıp Fak.",
      value: "Çanakkale Onsekiz Mart Ünv. Tıp Fak.",
    },
    { label: "Çukurova Ünv. Tıp Fak.", value: "Çukurova Ünv. Tıp Fak." },
    {
      label: "Demiroğlu Bilim Üniversitesi Tıp Fak.",
      value: "Demiroğlu Bilim Üniversitesi Tıp Fak.",
    },
    { label: "Dicle Ünv. Tıp Fak.", value: "Dicle Ünv. Tıp Fak." },
    {
      label: "Dokuz Eylül Ünv. Tıp Fak.",
      value: "Dokuz Eylül Ünv. Tıp Fak.",
    },
    { label: "Düzce Ünv. Tıp Fak.", value: "Düzce Ünv. Tıp Fak." },
    { label: "Ege Ünv. Tıp Fak.", value: "Ege Ünv. Tıp Fak." },
    {
      label: "Elazığ Eğt. ve Araş. Hast.",
      value: "Elazığ Eğt. ve Araş. Hast.",
    },
    {
      label: "Elazığ Fethi Sekin Şehir Hastanesi",
      value: "Elazığ Fethi Sekin Şehir Hastanesi",
    },
    { label: "Erciyes Ünv. Tıp Fak.", value: "Erciyes Ünv. Tıp Fak." },
    {
      label: "Erzincan Binali Yıldırım Üniversitesi Tıp Fak.",
      value: "Erzincan Binali Yıldırım Üniversitesi Tıp Fak.",
    },
    { label: "Erzincan Ünv. Tıp Fak.", value: "Erzincan Ünv. Tıp Fak." },
    {
      label: "Erzurum Bölge Eğt. ve Araş. Hast.",
      value: "Erzurum Bölge Eğt. ve Araş. Hast.",
    },
    {
      label: "Eskişehir Osmangazi Ünv. Tıp Fak.",
      value: "Eskişehir Osmangazi Ünv. Tıp Fak.",
    },
    {
      label: "Fatih Sultan Mehmet Eğitim Ve Araştırma Hastanesi",
      value: "Fatih Sultan Mehmet Eğitim Ve Araştırma Hastanesi",
    },
    { label: "Fırat Ünv. Tıp Fak.", value: "Fırat Ünv. Tıp Fak." },
    {
      label: "Gazi Yaşargil Eğt. ve Araştırma Hast.",
      value: "Gazi Yaşargil Eğt. ve Araştırma Hast.",
    },
    { label: "Gazi Ünv. Tıp Fak.", value: "Gazi Ünv. Tıp Fak." },
    {
      label: "Gaziantep Ünv. Tıp Fak.",
      value: "Gaziantep Ünv. Tıp Fak.",
    },
    {
      label:
        "Gaziler Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
      value:
        "Gaziler Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
    },
    {
      label: "Gaziosmanpaşa Eğitim ve Araştırma Hastanesi",
      value: "Gaziosmanpaşa Eğitim ve Araştırma Hastanesi",
    },
    {
      label: "Gaziosmanpaşa Ünv. Tıp Fak.",
      value: "Gaziosmanpaşa Ünv. Tıp Fak.",
    },
    { label: "Giresun Ünv. Tıp Fak.", value: "Giresun Ünv. Tıp Fak." },
    {
      label: "Gülhane Askeri Tıp Akademisi Deniz Kuv. Kom.",
      value: "Gülhane Askeri Tıp Akademisi Deniz Kuv. Kom.",
    },
    {
      label: "Gülhane Askeri Tıp Akademisi Hava Kuv. Kom.",
      value: "Gülhane Askeri Tıp Akademisi Hava Kuv. Kom.",
    },
    {
      label: "Gülhane Askeri Tıp Akademisi Jandarma Kuv. Kom.",
      value: "Gülhane Askeri Tıp Akademisi Jandarma Kuv. Kom.",
    },
    {
      label: "Gülhane Askeri Tıp Akademisi Kara Kuv. Kom.",
      value: "Gülhane Askeri Tıp Akademisi Kara Kuv. Kom.",
    },
    {
      label: "Gülhane Eğitim ve Araştırma Hastanesi",
      value: "Gülhane Eğitim ve Araştırma Hastanesi",
    },
    {
      label:
        "Gülhane Tıp Fakültesi Gaziler Fizik Tedavi Ve Rehabilitasyon Eğitim Ve Araştırma Hastanesi",
      value:
        "Gülhane Tıp Fakültesi Gaziler Fizik Tedavi Ve Rehabilitasyon Eğitim Ve Araştırma Hastanesi",
    },
    {
      label: "Hacettepe Ünv. Tıp Fak.",
      value: "Hacettepe Ünv. Tıp Fak.",
    },
    { label: "Harran Ünv. Tıp Fak.", value: "Harran Ünv. Tıp Fak." },
    {
      label: "Hitit Ünv. Tıp Fakültesi",
      value: "Hitit Ünv. Tıp Fakültesi",
    },

    { label: "İnönü Ünv. Tıp Fak.", value: "İnönü Ünv. Tıp Fak." },
    {
      label: "İstanbul Bakırköy Dr. Sadi Konuk Eğt. ve Araş. Hast.",
      value: "İstanbul Bakırköy Dr. Sadi Konuk Eğt. ve Araş. Hast.",
    },
    {
      label:
        "İstanbul Bakırköy Prof. Dr. M. Osman Ruh Sağlığı ve Sinir Hastalıkları Eğt. ve Araş. Hast.",
      value:
        "İstanbul Bakırköy Prof. Dr. M. Osman Ruh Sağlığı ve Sinir Hastalıkları Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Bağcılar Eğt. ve Araş. Hast.",
      value: "İstanbul Bağcılar Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Cerrahpaşa Ünv. Tıp Fak.",
      value: "İstanbul Cerrahpaşa Ünv. Tıp Fak.",
    },
    {
      label: "İstanbul Dr. Lütfi Kırdar Kartal Eğt. ve Araş. Hast.",
      value: "İstanbul Dr. Lütfi Kırdar Kartal Eğt. ve Araş. Hast.",
    },
    {
      label:
        "İstanbul Dr. Siyami Ersek Göğüs Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
      value:
        "İstanbul Dr. Siyami Ersek Göğüs Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Erenköy Ruh ve Sinir Hastalıkları Eğt. ve Araş. Hast.",
      value: "İstanbul Erenköy Ruh ve Sinir Hastalıkları Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Eğitim ve Araş. Hast.",
      value: "İstanbul Eğitim ve Araş. Hast.",
    },
    {
      label: "İstanbul Fizik Tedavi ve Rehabilitasyon Eğt. ve Araş. Hast.",
      value: "İstanbul Fizik Tedavi ve Rehabilitasyon Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Haseki Eğt. ve Araş. Hast.",
      value: "İstanbul Haseki Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Haydarpaşa Numune Eğt. ve Araş. Hast.",
      value: "İstanbul Haydarpaşa Numune Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Kartal Koşuyolu Yüksek İhtisas Eğt. ve Araş. Hast.",
      value: "İstanbul Kartal Koşuyolu Yüksek İhtisas Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Medeniyet Ünv. Tıp Fak.",
      value: "İstanbul Medeniyet Ünv. Tıp Fak.",
    },
    {
      label: "İstanbul Medipol Ünv. Tıp Fak.",
      value: "İstanbul Medipol Ünv. Tıp Fak.",
    },
    {
      label:
        "İstanbul Mehmet Akif Ersoy Göğüs Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
      value:
        "İstanbul Mehmet Akif Ersoy Göğüs Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
    },
    {
      label:
        "İstanbul Metin Sabancı Baltalimanı Kemik Hastalıkları Eğt. Ve Araş. Hast.",
      value:
        "İstanbul Metin Sabancı Baltalimanı Kemik Hastalıkları Eğt. Ve Araş. Hast.",
    },
    {
      label: "İstanbul Okmeydanı Eğt. ve Araş. Hast.",
      value: "İstanbul Okmeydanı Eğt. ve Araş. Hast.",
    },
    {
      label:
        "İstanbul Süreyyapaşa Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
      value:
        "İstanbul Süreyyapaşa Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Taksim Eğt. ve Araş. Hast.",
      value: "İstanbul Taksim Eğt. ve Araş. Hast.",
    },
    {
      label:
        "İstanbul Yedikule Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
      value:
        "İstanbul Yedikule Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
    },
    {
      label:
        "İstanbul Zeynep Kamil Kadın ve Çocuk Hastalıkları Eğt. ve Araş. Hast.",
      value:
        "İstanbul Zeynep Kamil Kadın ve Çocuk Hastalıkları Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Ümraniye Eğt. ve Araş. Hast.",
      value: "İstanbul Ümraniye Eğt. ve Araş. Hast.",
    },
    {
      label: "İstanbul Ünv. Kardiyoloji Enstitüsü",
      value: "İstanbul Ünv. Kardiyoloji Enstitüsü",
    },
    { label: "İstanbul Ünv. Tıp Fak.", value: "İstanbul Ünv. Tıp Fak." },
    {
      label: "İstanbul Şişli Etfal Eğt. Ve Araş. Hast.",
      value: "İstanbul Şişli Etfal Eğt. Ve Araş. Hast.",
    },
    {
      label: "İzmir Bakırçay Üniversitesi Tıp Fak.",
      value: "İzmir Bakırçay Üniversitesi Tıp Fak.",
    },
    {
      label:
        "İzmir Behçet Uz Çocuk Hastalıkları ve Cerrahisi Eğt. ve Araş. Hast.",
      value:
        "İzmir Behçet Uz Çocuk Hastalıkları ve Cerrahisi Eğt. ve Araş. Hast.",
    },
    {
      label: "İzmir Bozyaka Eğt. ve Araş. Hast.",
      value: "İzmir Bozyaka Eğt. ve Araş. Hast.",
    },
    {
      label: "İzmir Demokrasi Üniversitesi Tıp Fak.",
      value: "İzmir Demokrasi Üniversitesi Tıp Fak.",
    },
    {
      label:
        "İzmir Dr. Suat Seren Göğüs Hastalıkları ve Cerrahisi Eğt. ve Araş. Hast.",
      value:
        "İzmir Dr. Suat Seren Göğüs Hastalıkları ve Cerrahisi Eğt. ve Araş. Hast.",
    },
    {
      label: "İzmir Tepecik Eğt. ve Araş. Hast.",
      value: "İzmir Tepecik Eğt. ve Araş. Hast.",
    },
    {
      label: "K.K.T.C. Dr. Burhan Nalbantoğlu Devlet Hastanesi",
      value: "K.K.T.C. Dr. Burhan Nalbantoğlu Devlet Hastanesi",
    },
    { label: "Kafkas Ünv. Tıp Fak.", value: "Kafkas Ünv. Tıp Fak." },
    {
      label: "Kanuni Sultan Süleyman Eğt. ve Araş. Hast.",
      value: "Kanuni Sultan Süleyman Eğt. ve Araş. Hast.",
    },
    { label: "Karabük Ünv. Tıp Fak.", value: "Karabük Ünv. Tıp Fak." },
    {
      label: "Karadeniz Teknik Ünv. Tıp Fak.",
      value: "Karadeniz Teknik Ünv. Tıp Fak.",
    },
    {
      label: "Karamanoğlu Mehmetbey Üniversitesi Tıp Fak.",
      value: "Karamanoğlu Mehmetbey Üniversitesi Tıp Fak.",
    },
    {
      label: "Kastamonu Üniversitesi Tıp Fak.",
      value: "Kastamonu Üniversitesi Tıp Fak.",
    },
    {
      label: "Katip Çelebi Ünv. Tıp Fak.",
      value: "Katip Çelebi Ünv. Tıp Fak.",
    },
    {
      label: "Kayseri Şehir Hastanesi",
      value: "Kayseri Şehir Hastanesi",
    },
    {
      label: "Kocaeli Derince Eğt. Ve Araş. Hast.",
      value: "Kocaeli Derince Eğt. Ve Araş. Hast.",
    },
    { label: "Kocaeli Ünv. Tıp Fak.", value: "Kocaeli Ünv. Tıp Fak." },
    {
      label: "Konya Beyhekim Eğitim Ve Araştırma Hastanesi",
      value: "Konya Beyhekim Eğitim Ve Araştırma Hastanesi",
    },
    {
      label: "Konya Eğt. ve Araş. Hast.",
      value: "Konya Eğt. ve Araş. Hast.",
    },
    { label: "Konya Şehir Hastanesi", value: "Konya Şehir Hastanesi" },
    {
      label: "Koç Üniversitesi Tıp Fak.",
      value: "Koç Üniversitesi Tıp Fak.",
    },
    {
      label: "Kütahya Sağlık Bilimleri Üniversitesi Tıp Fak.",
      value: "Kütahya Sağlık Bilimleri Üniversitesi Tıp Fak.",
    },
    {
      label: "Kırıkkale Ünv. Tıp Fak.",
      value: "Kırıkkale Ünv. Tıp Fak.",
    },
    {
      label: "Lokman Hekim Üniversitesi Tıp Fak.",
      value: "Lokman Hekim Üniversitesi Tıp Fak.",
    },
    {
      label: "M. Kemal Tayfur Ata Sökmen Ünv. Tıp Fak.",
      value: "M. Kemal Tayfur Ata Sökmen Ünv. Tıp Fak.",
    },
    { label: "Maltepe Ünv. Tıp Fak.", value: "Maltepe Ünv. Tıp Fak." },
    { label: "Marmara Ünv. Tıp Fak.", value: "Marmara Ünv. Tıp Fak." },
    { label: "Mersin Ünv. Tıp Fak.", value: "Mersin Ünv. Tıp Fak." },
    { label: "Mersin Şehir Hastanesi", value: "Mersin Şehir Hastanesi" },
    {
      label: "Muğla Sıtkı Koçman Ünv. Tıp Fak.",
      value: "Muğla Sıtkı Koçman Ünv. Tıp Fak.",
    },
    {
      label: "Namık Kemal Ünv. Tıp Fak.",
      value: "Namık Kemal Ünv. Tıp Fak.",
    },
    {
      label: "Necmettin Erbakan Tıp Fak.",
      value: "Necmettin Erbakan Tıp Fak.",
    },
    {
      label: "Niğde Ömer Halisdemir Üniversitesi Tıp Fak.",
      value: "Niğde Ömer Halisdemir Üniversitesi Tıp Fak.",
    },
    {
      label: "Ondokuz Mayıs Ünv. Tıp Fak.",
      value: "Ondokuz Mayıs Ünv. Tıp Fak.",
    },
    {
      label: "Ordu Ünv. Tıp Fakültesi",
      value: "Ordu Ünv. Tıp Fakültesi",
    },
    {
      label: "Pamukkale Ünv. Tıp Fak.",
      value: "Pamukkale Ünv. Tıp Fak.",
    },
    {
      label: "Prof. Dr. Cemil Taşçıoğlu Şehir Hastanesi",
      value: "Prof. Dr. Cemil Taşçıoğlu Şehir Hastanesi",
    },
    {
      label: "Recep Tayyip Erdoğan Ünv. Tıp Fak.",
      value: "Recep Tayyip Erdoğan Ünv. Tıp Fak.",
    },
    {
      label: "SANKO Üniversitesi Tıp Fak.",
      value: "SANKO Üniversitesi Tıp Fak.",
    },
    { label: "Sakarya Ünv. Tıp Fak.", value: "Sakarya Ünv. Tıp Fak." },
    {
      label: "Samsun Eğt. ve Araş. Hast.",
      value: "Samsun Eğt. ve Araş. Hast.",
    },
    {
      label:
        "Sancaktepe Şehit Prof. Dr. İlhan Varank Eğitim ve Araştırma Hastanesi",
      value:
        "Sancaktepe Şehit Prof. Dr. İlhan Varank Eğitim ve Araştırma Hastanesi",
    },
    {
      label: "Sağlık Bilimleri Üniversitesi Gülhane Tıp Fakültesi",
      value: "Sağlık Bilimleri Üniversitesi Gülhane Tıp Fakültesi",
    },
    {
      label: "Sağlık Bilimleri Üniversitesi Hamidiye Tıp Fak.i",
      value: "Sağlık Bilimleri Üniversitesi Hamidiye Tıp Fak.i",
    },
    {
      label:
        "Sağlık Bilimleri Üniversitesi Tıp Fakültesi, Sultan Abdülhamid Han SUAM",
      value:
        "Sağlık Bilimleri Üniversitesi Tıp Fakültesi, Sultan Abdülhamid Han SUAM",
    },
    {
      label: "Selçuk Üniversitesi Ünv. Tıp Fak.",
      value: "Selçuk Üniversitesi Ünv. Tıp Fak.",
    },
    {
      label: "Sultan 2. Abdülhamid Han Eğitim ve Araştırma Hastanesi",
      value: "Sultan 2. Abdülhamid Han Eğitim ve Araştırma Hastanesi",
    },
    {
      label: "Süleyman Demirel Ünv. Tıp Fak.",
      value: "Süleyman Demirel Ünv. Tıp Fak.",
    },
    {
      label: "Sütçü İmam Ünv. Tıp Fak.",
      value: "Sütçü İmam Ünv. Tıp Fak.",
    },
    {
      label: "Trabzon Kanuni Eğitim Araş. Hast.",
      value: "Trabzon Kanuni Eğitim Araş. Hast.",
    },
    { label: "Trakya Ünv. Tıp Fak.", value: "Trakya Ünv. Tıp Fak." },
    {
      label: "Turgut Özal Ünv. Tıp Fak.",
      value: "Turgut Özal Ünv. Tıp Fak.",
    },
    { label: "Ufuk Ünv. Tıp Fak.", value: "Ufuk Ünv. Tıp Fak." },
    { label: "Uludağ Ünv. Tıp Fak.", value: "Uludağ Ünv. Tıp Fak." },
    {
      label: "Uşak Üniversitesi Tıp Fak.",
      value: "Uşak Üniversitesi Tıp Fak.",
    },
    { label: "Yeditepe Ünv. Tıp Fak.", value: "Yeditepe Ünv. Tıp Fak." },
    {
      label: "Yüzüncü Yıl Ünv. Tıp Fak.",
      value: "Yüzüncü Yıl Ünv. Tıp Fak.",
    },
    {
      label: "Yıldırım Beyazıt Ünv. Tıp Fak.",
      value: "Yıldırım Beyazıt Ünv. Tıp Fak.",
    },
  ];

  const defaultHastanes = [
    "Abant İzzet Baysal Ünv. Tıp Fak.",
    "Acıbadem Ünv. Tıp Fak.",
    "Adana Şehir Hastanesi",
    "Adli Tıp Kurumu",
    "Adnan Menderes Ünv. Tıp Fak.",
    "Adıyaman Ünv. Tıp Fak.",
    "Afyonkarahisar Sağlık Bilimleri Ünv. Tıp Fak.",
    "Ahi Evran Ünv. Tıp Fakültesi",
    "Ahi Evren Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
    "Akdeniz Ünv. Tıp Fak.",
    "Aksaray Üniversitesi Tıp Fak.",
    "Alanya Alaaddin Keykubat Üniversitesi Tıp Fak.",
    "Amasya Üniversitesi Tıp Fak.",
    "Ankara Atatürk Eğt. ve Araş. Hast.",
    "Ankara Atatürk Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
    "Ankara Dr. Abdurrahman Yurtarslan Onkoloji Eğt. ve Araş. Hast.",
    "Ankara Dr. Sami Ulus Kadın Doğum, Çocuk Sağlığı ve Hastalıkları Eğt. ve Araş. Hast.",
    "Ankara Dışkapı Yıldırım Beyazıt Eğt. ve Araş. Hast.",
    "Ankara Etlik Zübeyde Hanım Kadın Hastalıkları Eğt. ve Araş. Hast.",
    "Ankara Etlik İhtisas Eğt. ve Araş. Hast.",
    "Ankara Eğt. ve Araş. Hast.",
    "Ankara Fizik Tedavi ve Rehabilitasyon Eğt. ve Araş. Hast.",
    "Ankara Keçiören Eğt. ve Araş. Hast.",
    "Ankara Ulucanlar Göz Eğt. ve Araş. Hast.",
    "Ankara Ünv. Tıp Fak.",
    "Ankara Şehir Hastanesi",
    "Antalya Eğt. ve Araş. Hast.",
    "Atatürk Ünv. Tıp Fak.",
    "Bahçeşehir Ünv. Tıp Fak.",
    "Balıkesir Ünv. Tıp Fak.",
    "Başakşehir Çam ve Sakura Şehir Hastanesi",
    "Başkent Ünv. Tıp Fak.",
    "Beyoğlu Göz Eğitim ve Araştırma Hastanesi",
    "Bezm-i Alem Vakıf Üniversitesi Tıp Fakültesi",
    "Bozok Üniversitesi Tıp Fakültesi",
    "Bursa Yüksek İhtisas Eğt. ve Araş. Hast.",
    "Bursa Şehir Hastanesi",
    "Bülent Ecevit Ünv. Tıp Fak.",
    "Celal Bayar Ünv. Tıp Fak.",
    "Cumhuriyet Ünv. Tıp Fak.",
    "Çanakkale Onsekiz Mart Ünv. Tıp Fak.",
    "Çukurova Ünv. Tıp Fak.",
    "Demiroğlu Bilim Üniversitesi Tıp Fak.",
    "Dicle Ünv. Tıp Fak.",
    "Dokuz Eylül Ünv. Tıp Fak.",
    "Düzce Ünv. Tıp Fak.",
    "Ege Ünv. Tıp Fak.",
    "Elazığ Eğt. ve Araş. Hast.",
    "Elazığ Fethi Sekin Şehir Hastanesi",
    "Erciyes Ünv. Tıp Fak.",
    "Erzincan Binali Yıldırım Üniversitesi Tıp Fak.",
    "Erzincan Ünv. Tıp Fak.",
    "Erzurum Bölge Eğt. ve Araş. Hast.",
    "Eskişehir Osmangazi Ünv. Tıp Fak.",
    "Fatih Sultan Mehmet Eğitim Ve Araştırma Hastanesi",
    "Fırat Ünv. Tıp Fak.",
    "Gazi Yaşargil Eğt. ve Araştırma Hast.",
    "Gazi Ünv. Tıp Fak.",
    "Gaziantep Ünv. Tıp Fak.",
    "Gaziler Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
    "Gaziosmanpaşa Eğitim ve Araştırma Hastanesi",
    "Gaziosmanpaşa Ünv. Tıp Fak.",
    "Giresun Ünv. Tıp Fak.",
    "Gülhane Askeri Tıp Akademisi Deniz Kuv. Kom.",
    "Gülhane Askeri Tıp Akademisi Hava Kuv. Kom.",
    "Gülhane Askeri Tıp Akademisi Jandarma Kuv. Kom.",
    "Gülhane Askeri Tıp Akademisi Kara Kuv. Kom.",
    "Gülhane Eğitim ve Araştırma Hastanesi",
    "Gülhane Tıp Fakültesi Gaziler Fizik Tedavi Ve Rehabilitasyon Eğitim Ve Araştırma Hastanesi",
    "Hacettepe Ünv. Tıp Fak.",
    "Harran Ünv. Tıp Fak.",
    "Hitit Ünv. Tıp Fakültesi",
    "İnönü Ünv. Tıp Fak.",
    "İstanbul Bakırköy Dr. Sadi Konuk Eğt. ve Araş. Hast.",
    "İstanbul Bakırköy Prof. Dr. M. Osman Ruh Sağlığı ve Sinir Hastalıkları Eğt. ve Araş. Hast.",
    "İstanbul Bağcılar Eğt. ve Araş. Hast.",
    "İstanbul Cerrahpaşa Ünv. Tıp Fak.",
    "İstanbul Dr. Lütfi Kırdar Kartal Eğt. ve Araş. Hast.",
    "İstanbul Dr. Siyami Ersek Göğüs Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
    "İstanbul Erenköy Ruh ve Sinir Hastalıkları Eğt. ve Araş. Hast.",
    "İstanbul Eğitim ve Araş. Hast.",
    "İstanbul Fizik Tedavi ve Rehabilitasyon Eğt. ve Araş. Hast.",
    "İstanbul Haseki Eğt. ve Araş. Hast.",
    "İstanbul Haydarpaşa Numune Eğt. ve Araş. Hast.",
    "İstanbul Kartal Koşuyolu Yüksek İhtisas Eğt. ve Araş. Hast.",
    "İstanbul Medeniyet Ünv. Tıp Fak.",
    "İstanbul Medipol Ünv. Tıp Fak.",
    "İstanbul Mehmet Akif Ersoy Göğüs Kalp ve Damar Cerrahisi Eğt. ve Araş. Hast.",
    "İstanbul Metin Sabancı Baltalimanı Kemik Hastalıkları Eğt. Ve Araş. Hast.",
    "İstanbul Okmeydanı Eğt. ve Araş. Hast.",
    "İstanbul Süreyyapaşa Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
    "İstanbul Taksim Eğt. ve Araş. Hast.",
    "İstanbul Yedikule Göğüs Hastalıkları ve Göğüs Cerrahisi Eğt. ve Araş. Hast.",
    "İstanbul Zeynep Kamil Kadın ve Çocuk Hastalıkları Eğt. ve Araş. Hast.",
    "İstanbul Ümraniye Eğt. ve Araş. Hast.",
    "İstanbul Ünv. Kardiyoloji Enstitüsü",
    "İstanbul Ünv. Tıp Fak.",
    "İstanbul Şişli Etfal Eğt. Ve Araş. Hast.",
    "İzmir Bakırçay Üniversitesi Tıp Fak.",
    "İzmir Behçet Uz Çocuk Hastalıkları ve Cerrahisi Eğt. ve Araş. Hast.",
    "İzmir Bozyaka Eğt. ve Araş. Hast.",
    "İzmir Demokrasi Üniversitesi Tıp Fak.",
    "İzmir Dr. Suat Seren Göğüs Hastalıkları ve Cerrahisi Eğt. ve Araş. Hast.",
    "İzmir Tepecik Eğt. ve Araş. Hast.",
    "K.K.T.C. Dr. Burhan Nalbantoğlu Devlet Hastanesi",
    "Kafkas Ünv. Tıp Fak.",
    "Kanuni Sultan Süleyman Eğt. ve Araş. Hast.",
    "Karabük Ünv. Tıp Fak.",
    "Karadeniz Teknik Ünv. Tıp Fak.",
    "Karamanoğlu Mehmetbey Üniversitesi Tıp Fak.",
    "Kastamonu Üniversitesi Tıp Fak.",
    "Katip Çelebi Ünv. Tıp Fak.",
    "Kayseri Şehir Hastanesi",
    "Kocaeli Derince Eğt. Ve Araş. Hast.",
    "Kocaeli Ünv. Tıp Fak.",
    "Konya Beyhekim Eğitim Ve Araştırma Hastanesi",
    "Konya Eğt. ve Araş. Hast.",
    "Konya Şehir Hastanesi",
    "Koç Üniversitesi Tıp Fak.",
    "Kütahya Sağlık Bilimleri Üniversitesi Tıp Fak.",
    "Kırıkkale Ünv. Tıp Fak.",
    "Lokman Hekim Üniversitesi Tıp Fak.",
    "M. Kemal Tayfur Ata Sökmen Ünv. Tıp Fak.",
    "Maltepe Ünv. Tıp Fak.",
    "Marmara Ünv. Tıp Fak.",
    "Mersin Ünv. Tıp Fak.",
    "Mersin Şehir Hastanesi",
    "Muğla Sıtkı Koçman Ünv. Tıp Fak.",
    "Namık Kemal Ünv. Tıp Fak.",
    "Necmettin Erbakan Tıp Fak.",
    "Niğde Ömer Halisdemir Üniversitesi Tıp Fak.",
    "Ondokuz Mayıs Ünv. Tıp Fak.",
    "Ordu Ünv. Tıp Fakültesi",
    "Pamukkale Ünv. Tıp Fak.",
    "Prof. Dr. Cemil Taşçıoğlu Şehir Hastanesi",
    "Recep Tayyip Erdoğan Ünv. Tıp Fak.",
    "SANKO Üniversitesi Tıp Fak.",
    "Sakarya Ünv. Tıp Fak.",
    "Samsun Eğt. ve Araş. Hast.",
    "Sancaktepe Şehit Prof. Dr. İlhan Varank Eğitim ve Araştırma Hastanesi",
    "Sağlık Bilimleri Üniversitesi Gülhane Tıp Fakültesi",
    "Sağlık Bilimleri Üniversitesi Hamidiye Tıp Fak.i",
    "Sağlık Bilimleri Üniversitesi Tıp Fakültesi, Sultan Abdülhamid Han SUAM",
    "Selçuk Üniversitesi Ünv. Tıp Fak.",
    "Sultan 2. Abdülhamid Han Eğitim ve Araştırma Hastanesi",
    "Süleyman Demirel Ünv. Tıp Fak.",
    "Sütçü İmam Ünv. Tıp Fak.",
    "Trabzon Kanuni Eğitim Araş. Hast.",
    "Trakya Ünv. Tıp Fak.",
    "Turgut Özal Ünv. Tıp Fak.",
    "Ufuk Ünv. Tıp Fak.",
    "Uludağ Ünv. Tıp Fak.",
    "Uşak Üniversitesi Tıp Fak.",
    "Yeditepe Ünv. Tıp Fak.",
    "Yüzüncü Yıl Ünv. Tıp Fak.",
    "Yıldırım Beyazıt Ünv. Tıp Fak.",
  ];

  useEffect(() => {
    setSelectedHastanes(defaultHastanes);
  }, []);

  return (
    <Space
      style={{
        width: "100%",
      }}
      direction="vertical"
    >
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
        }}
        placeholder="Please select"
        defaultValue={defaultHastanes}
        onChange={(value) => {
          setSelectedHastanes(value);
        }}
        options={options}
      />
    </Space>
  );
};
export default HastaneCheckBox;
