# 🍎 Fresh Market - Full Stack E-Commerce Application

**Fresh Market**, kullanıcıların taze meyve ve sebze alışverişi yapabileceği, modern arayüzlü ve uçtan uca çalışan bir e-ticaret web uygulamasıdır.

---

## 🚀 Özellikler

* **Dinamik Ürün Listeleme:** Ürünler veritabanından çekilerek ana sayfada Material UI kartları ile sergilenir.
* **Gelişmiş Arama:** Kullanıcılar ürün ismi veya kategorisine göre anlık arama yapabilir.
* **Sepet Yönetimi:** React Context API kullanılarak merkezi bir sepet sistemi oluşturulmuştur.
* **Detay Sayfası:** Her ürünün besin değerleri ve kökeni gibi detaylı bilgilerine ulaşılabilir.
* **Güvenli Ödeme Formu:** Harf ve rakam kısıtlamaları içeren profesyonel ödeme sayfası.
* **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarla tam uyumlu arayüz.

---

## 🛠️ Kullanılan Teknolojiler

### **Frontend**
* **React.js** (v18+)
* **Material UI (MUI)** (Görsel bileşenler ve tema)
* **React Router Dom** (Sayfalar arası geçiş)
* **Axios** (API haberleşmesi)

### **Backend**
* **Java 17+** & **Spring Boot 3**
* **Spring Data JPA** (Veritabanı işlemleri)
* **Hibernate** (ORM)
* **Maven** (Bağımlılık yönetimi)

### **Database**
* **PostgreSQL / MySQL**

---

## 📦 Kurulum ve Çalıştırma

### 1. Veritabanı Hazırlığı
* Veritabanı yönetim sisteminizde (pgAdmin/Workbench) bir veritabanı oluşturun.
* `SourceCode/database` klasöründeki `.sql` dosyasını içe aktarın (import).

### 2. Backend Çalıştırma
* `backend/src/main/resources/application.properties` dosyasındaki DB ayarlarını güncelleyin.
* IDE'niz üzerinden projeyi çalıştırın (`http://localhost:8080`).

### 3. Frontend Çalıştırma
* `frontend` klasöründe terminali açın.
* `npm install` komutu ile kütüphaneleri yükleyin.
* `npm start` komutu ile uygulamayı başlatın (`http://localhost:3000`).

---

## 📂 Klasör Yapısı

```text
│   ├── frontend/     # React Projesi (src, public, package.json)
│   ├── backend/      # Spring Boot Projesi (src, pom.xml)
│   └── database/     # SQL dökümü (.sql)
└── README.md         # Kurulum Klavuzu
