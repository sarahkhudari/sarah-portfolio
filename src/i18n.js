// =====================================================================
//  All site content lives here. Edit this file to update text in both
//  languages. Arabic = `ar`, English = `en`.
// =====================================================================

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: 'Hello, I’m',
      name: 'Sarah Alkhudari',
      role: 'Flutter Developer & React Frontend Developer',
      tagline:
        'Crafting elegant mobile apps and polished web experiences where thoughtful design meets clean, production-ready code.',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact Me',
      badge: 'Available for new opportunities',
      stats: [
        { value: '4+', label: 'Shipped Projects' },
        { value: '2+', label: 'Years Experience' },
        { value: '100%', label: 'Responsive Design' },
      ],
    },
    about: {
      eyebrow: 'About Me',
      title: 'Designing experiences, engineering the details.',
      body: [
        'I’m Sarah Alkhudari — a Flutter and React developer who loves turning ideas into beautifully crafted, reliable products. I build cross-platform mobile apps with Flutter and modern, responsive interfaces with React.',
        'My work sits at the intersection of UI/UX sensibility and clean engineering. I care deeply about typography, motion, accessibility, and performance — because the details are what make a product feel premium.',
        'I write clean, modular, and well-documented code. I collaborate closely with designers and backend teams, integrate REST and GraphQL APIs, and ship features that feel effortless to use. I don’t just build interfaces — I craft user experiences that guide behavior and drive results. By combining intuitive design with data-driven decisions, I aim to increase user engagement, optimize conversion rates, and create products that users genuinely enjoy coming back to.',
      ],
      highlights: [
        'Pixel-perfect Flutter mobile apps',
        'Modern React frontends with Tailwind',
        'Strong UI/UX sensibility',
        'Clean, reusable, maintainable code',
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'My toolkit',
      subtitle:
        'The technologies I reach for to build fast, beautiful, and scalable products.',
      items: [
        { name: 'Flutter', level: 'Expert', icon: 'Smartphone' },
        { name: 'Dart', level: 'Expert', icon: 'Code2' },
        { name: 'React', level: 'Advanced', icon: 'Atom' },
        { name: 'JavaScript', level: 'Advanced', icon: 'Braces' },
        { name: 'Responsive Design', level: 'Expert', icon: 'LayoutGrid' },
        { name: 'API Integration', level: 'Advanced', icon: 'Plug' },
        { name: 'Git / GitHub', level: 'Advanced', icon: 'GitBranch' },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work',
      subtitle:
        'A glimpse at recent apps and dashboards I’ve designed and built end-to-end.',
      demo: 'Live Demo',
      code: 'GitHub',
      role: 'Role',
      stack: 'Tech Stack',
      viewDetails: 'View Details',
      overview: 'Overview',
      features: 'Key Features',
      gallery: 'Gallery',
      close: 'Close',
      items: [
        {
          id: 'dentavision',
          kind: 'mobile',
          title: 'DentaVision',
          description:
            'A full-featured Flutter mobile app for a dental clinic: patient records, appointment booking, treatment plans, and in-app notifications with a calm, trustworthy UI.',
          role: 'Mobile Developer & UI Designer',
          tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
          image: '/images/firstdenta.png',
          gallery: [
            '/images/firstdenta.png',
            '/images/dental-1.jpg',
            '/images/dental-2.jpg',
            '/images/dental-3.jpg',
          ],
          features: [
            'Patient records with full medical history, X-rays, and treatment notes accessible at a glance.',
            'Appointment booking with a real-time calendar, available slots, and automated reminders.',
            'Treatment plan timelines that visualize upcoming and completed procedures for each patient.',
            'Push notifications for appointments, follow-ups, and post-treatment care instructions.',
            'Bilingual UI (Arabic / English) with full RTL support and an accessible, calming color system.',
          ],
          demo: 'https://youtube.com/shorts/H20FJaRzdYQ',
          github: '#',
        },
        {
          id: 'pregnancy',
          kind: 'mobile',
          title: 'Eileithyia Mobile App',
          description:
            'An AI-powered maternal and fetal monitoring mobile application developed using Flutter. The application enables pregnant women to track pregnancy progress, receive personalized weekly guidance based on gestational age, access educational information about fetal development, view pregnancy and visit history, manage appointments, upload laboratory tests, communicate with an AI-powered medical chatbot, and monitor their health through an intuitive and user-friendly experience.',
          role: 'Lead Flutter Developer & API Integration',
          tech: ['Flutter', 'Dart', 'Provider', 'Local Notifications'],
          image: '/images/firstmom.png',
          gallery: [
            '/images/firstmom.png',
            '/images/mom1.jpg',
            '/images/mom2.jpg',
            '/images/mom3.jpg',
            '/images/mom4.jpg',
            '/images/mom5.jpg',
          ],
          features: [
            'Personalized weekly guidance and recommendations based on gestational age.',
            'Educational content about fetal development and pregnancy progression.',
            'View latest visit information and complete pregnancy history.',
            'Appointment booking and cancellation.',
            'Upload laboratory tests and share them with the doctor before the next visit.',
            'AI-powered medical chatbot for pregnancy guidance and triage.',
            'CTG and ultrasound records viewing.',
            'Fetal kick tracking and maternal vital measurements.',
            'Statistics and visual insights shared with healthcare providers for patient monitoring.',
            'Notifications and reminders.',
            'Responsive and bilingual user interface.'
          ],
          demo: 'https://youtube.com/shorts/CYy1WogwXNo',
          github: '#',
        },
        {
          id: 'Doctor',
          title: 'Eileithyia Doctor Dashboard',
          description:
            'A responsive healthcare dashboard developed with React.js that centralizes maternal and fetal healthcare management. The platform enables doctors to monitor pregnancy cases, review patient profiles, track complete pregnancy and visit history, review ultrasound images and reports, analyze CTG records, assess preterm birth risks through AI-powered modules, manage appointments, and access clinical insights through an intuitive and responsive interface.',
          role: 'Frontend Developer & UI/UX Designer',
          tech: [
            'React.js',
            'JavaScript',
            'Tailwind CSS',
            'REST APIs',
            'Axios',
            'Postman'
          ],
          image: '/images/firstdr.png',
          gallery: [
            '/images/firstdr.png',
            '/images/dr1.png',
            '/images/dr2.png',
            '/images/dr3.png',
            '/images/dr4.png',
            '/images/dr5.png',
            '/images/dr6.png',
          ],
          features: [
            'Patient and pregnancy management with complete medical records.',
            'Complete pregnancy and visit history tracking.',
            'Ultrasound image review and report management.',
            'CTG analysis and classification module.',
            'AI-powered preterm birth risk prediction module.',
            'Appointment scheduling and management.',
            'Clinical notes and patient follow-up.',
            'Responsive dashboard optimized for healthcare professionals.'
          ],
          demo: 'https://youtu.be/zGTPSOQv3s0',
          github: '#',
        },
        {
          id: 'furniture',
          title: 'Furniture E-Commerce Website',
          description:
            'A front-end furniture e-commerce website focused on showcasing furniture products through a clean and responsive user interface. The project includes product listing pages, product details, shopping cart interactions, and a simple purchase flow designed to practice modern React UI development.',
          role: 'Frontend Developer',
          tech: ['React', 'Tailwind CSS', 'JavaScript'],
          image: '/images/furniture-1.png',
          gallery: [
            '/images/furniture-1.png',
            '/images/furniture-2.png',
            '/images/furniture-3.png',
            '/images/furniture-4.png',
            '/images/furniture-5.png',
          ],
          features: [
            'Responsive product listing and furniture showcase pages.',
            'Product detail pages with images, descriptions, and prices.',
            'Add-to-cart interface and shopping cart preview.',
            'Simple checkout and purchase flow UI.',
            'Clean visual layout designed for an online furniture shopping experience.',
          ],
          demo: '#',
          github: '#',
        }
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build something together',
      subtitle:
        'Have a project in mind, a role to fill, or just want to say hello? My inbox is always open.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Thanks! Your message has been sent.',
      },
    },
    footer: {
      role: 'Flutter & React Developer',
      rights: 'All rights reserved.',
      madeWith: 'Designed & built with',
    },
    language: { toggle: 'العربية' },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عنّي',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'تواصل',
      resume: 'السيرة',
    },
    hero: {
      greeting: 'مرحبًا، أنا',
      name: 'سارة الخضري',
      role: 'مطوّرة Flutter و مطوّرة واجهات React',
      tagline:
        'أصمّم وأبني تطبيقات موبايل أنيقة وواجهات ويب متقنة، حيث يلتقي التصميم المدروس بكود نظيف جاهز للإنتاج.',
      ctaProjects: 'استعرضي مشاريعي',
      ctaContact: 'تواصلي معي',
      badge: 'متاحة لفرص جديدة',
      stats: [
        { value: '+٤', label: 'مشاريع منجزة' },
        { value: '+٢', label: 'سنوات خبرة' },
        { value: '٪١٠٠', label: 'تصميم متجاوب' },
      ],
    },
    about: {
      eyebrow: 'عنّي',
      title: 'أصمّم تجربة، وأهندس التفاصيل.',
      body: [
        'أنا سارة الخضري — مطوّرة Flutter و React، شغوفة بتحويل الأفكار إلى منتجات مصنوعة بعناية وجديرة بالثقة. أبني تطبيقات موبايل متعدّدة المنصّات بـ Flutter وواجهات ويب حديثة ومتجاوبة بـ React.',
        'عملي يقف عند تقاطع الإحساس البصري بتجربة المستخدم والهندسة النظيفة. أهتمّ جدًا بالطباعة والحركة وسهولة الوصول والأداء — لأن التفاصيل هي ما يمنح المنتج شعورًا فاخرًا.',
        'أكتب كودًا نظيفًا ومُعَدّلاً وموثّقًا جيدًا. أعمل بتعاون وثيق مع المصمّمين وفِرَق الباك-إند، وأُكامِل واجهات REST و GraphQL، وأُطلِق ميزات يشعر المستخدم معها بالسلاسة التامة.',
      ],
      highlights: [
        'تطبيقات Flutter بدقّة عالية',
        'واجهات React حديثة مع Tailwind',
        'حسّ قويّ في تجربة وواجهة المستخدم',
        'كود نظيف وقابل لإعادة الاستخدام',
      ],
    },
    skills: {
      eyebrow: 'المهارات',
      title: 'أدواتي',
      subtitle: 'التقنيات التي أعتمد عليها لبناء منتجات سريعة وأنيقة وقابلة للتوسّع.',
      items: [
        { name: 'Flutter', level: 'خبيرة', icon: 'Smartphone' },
        { name: 'Dart', level: 'خبيرة', icon: 'Code2' },
        { name: 'React', level: 'متقدّمة', icon: 'Atom' },
        { name: 'JavaScript', level: 'متقدّمة', icon: 'Braces' },
        { name: 'التصميم المتجاوب', level: 'خبيرة', icon: 'LayoutGrid' },
        { name: 'تكامل الـ APIs', level: 'متقدّمة', icon: 'Plug' },
        { name: 'Git / GitHub', level: 'متقدّمة', icon: 'GitBranch' },
      ],
    },
    projects: {
      eyebrow: 'المشاريع',
      title: 'أعمال مختارة',
      subtitle:
        'نظرة على أحدث التطبيقات ولوحات التحكّم التي صمّمتها وطوّرتها من الفكرة إلى الإطلاق.',
      demo: 'عرض مباشر',
      code: 'GitHub',
      role: 'الدور',
      stack: 'التقنيات',
      viewDetails: 'عرض التفاصيل',
      overview: 'نبذة عن المشروع',
      features: 'أبرز المزايا',
      gallery: 'معرض الصور',
      close: 'إغلاق',
      items: [
        {
          id: 'dentavision',
          kind: 'mobile',
          title: 'DentaVision',
          description:
            'نظام ذكي لمساعدة أطباء الأسنان والمرضى في إدارة المواعيد والملفات الطبية وتحليل صور الأشعة السنية من خلال تطبيق موبايل سهل الاستخدام ومدعوم بخدمات الذكاء الاصطناعي.',
          role: 'مطوّرة موبايل ومصمّمة واجهة',
          tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
          image: '/images/firstdenta.png',
          gallery: [
            '/images/firstdenta.png',
            '/images/dental-1.jpg',
            '/images/dental-2.jpg',
            '/images/dental-3.jpg',
          ],
          features: [
            'إدارة ملفات المرضى والسجل الطبي.',
            'حجز المواعيد ومتابعتها.',
            'رفع وعرض صور الأشعة السنية.',
            'عرض تقارير التشخيص المدعومة بالذكاء الاصطناعي.',
            'واجهة ثنائية اللغة وسهلة الاستخدام.',
          ],
          demo: 'https://youtube.com/shorts/H20FJaRzdYQ',
          github: '#',
        },
        {
          id: 'pregnancy',
          kind: 'mobile',
          title: 'تطبيق Eileithyia لمتابعة صحة الأم والجنين',
          description:
            'تطبيق ذكي لمتابعة صحة الأم والجنين تم تطويره باستخدام Flutter، يرافق المرأة الحامل طوال رحلة الحمل من خلال إرشادات أسبوعية مخصّصة حسب عمر الحمل، ومعلومات تعليمية عن تطوّر الجنين، ومتابعة السجلات الطبية، والمواعيد، والخدمات الصحية المدعومة بالذكاء الاصطناعي ضمن تجربة سهلة ومتكاملة.',
          role: 'مطوّرة Flutter الرئيسية',
          tech: ['Flutter', 'Dart', 'REST APIs', 'Postman', 'Laravel'],
          image: '/images/firstmom.png',
          gallery: [
            '/images/firstmom.png',
            '/images/mom1.jpg',
            '/images/mom2.jpg',
            '/images/mom3.jpg',
            '/images/mom4.jpg',
            '/images/mom5.jpg',
          ],
          features: [
            'إرشادات وتوصيات أسبوعية مخصّصة حسب عمر الحمل.',
            'محتوى تعليمي حول تطوّر الجنين والتغيرات التي تحدث خلال الحمل.',
            'عرض معلومات آخر زيارة والسجل الكامل للحمل.',
            'حجز المواعيد وإلغاؤها بسهولة.',
            'رفع التحاليل الطبية ومشاركتها مع الطبيب لمراجعتها في الزيارة القادمة.',
            'روبوت محادثة طبي مدعوم بالذكاء الاصطناعي للإرشاد وفرز الحالات.',
            'عرض سجلات تخطيط قلب الجنين (CTG) وسجلات الإيكو.',
            'تسجيل ركلات الجنين والقياسات الحيوية للأم.',
            'إرسال الإحصائيات والبيانات للطبيب لدعم المتابعة الطبية واتخاذ القرار.',
            'إشعارات وتذكيرات بالمواعيد والمتابعة.',
            'واجهة ثنائية اللغة ومتجاوبة وسهلة الاستخدام.'
          ],
          demo: 'https://youtube.com/shorts/CYy1WogwXNo',
          github: '#',
        },
        {
          id: 'Doctor',
          title: 'لوحة تحكم Eileithyia للأطباء',
          description:
            'لوحة تحكم صحية متجاوبة تم تطويرها باستخدام React.js لإدارة ومتابعة حالات الحمل بشكل مركزي. تتيح المنصة للأطباء مراجعة معلومات المريضة، وتتبع تاريخ الحمل والزيارات، واستعراض صور وتقارير الإيكو، وتحليل سجلات CTG، وتقييم خطر الولادة المبكرة باستخدام نماذج الذكاء الاصطناعي، وإدارة المواعيد والوصول إلى رؤى سريرية متقدمة من خلال واجهة حديثة وسهلة الاستخدام.',
          role: 'مطوّرة واجهات أمامية وUI/UX',
          tech: ['React', 'Tailwind CSS', 'Axios', 'REST APIs', 'Postman'],
          image: '/images/firstdr.png',
          gallery: [
            '/images/firstdr.png',
            '/images/dr1.png',
            '/images/dr2.png',
            '/images/dr3.png',
            '/images/dr4.png',
            '/images/dr5.png',
            '/images/dr6.png',
          ],
          features: [
            'إدارة معلومات المريضة وسجلات الحمل بشكل متكامل.',
            'عرض تاريخ الحمل وسجل الزيارات السابقة.',
            'استعراض صور الإيكو وتقاريرها الطبية.',
            'تحليل ومراجعة سجلات تخطيط قلب الجنين (CTG).',
            'وحدة تنبؤ بخطر الولادة المبكرة مدعومة بالذكاء الاصطناعي.',
            'إدارة المواعيد ومتابعة الحالات.',
            'إضافة الملاحظات السريرية ومتابعة المرضى.',
            'واجهة متجاوبة ومهيأة للاستخدام من قبل الكوادر الطبية.'
          ],
          demo: 'https://youtu.be/zGTPSOQv3s0',
          github: '#',
        },
        {
          id: 'furniture',
          title: 'موقع إلكتروني لبيع المفروشات',
          description:
            'موقع تجارة إلكترونية لعرض وبيع المفروشات تم تطوير واجهاته الأمامية باستخدام React. يركّز المشروع على تقديم تجربة تسوق عصرية من خلال عرض المنتجات، تصفح تفاصيلها، إضافة المنتجات إلى سلة التسوق، ومحاكاة عملية الشراء ضمن واجهة متجاوبة وسهلة الاستخدام.',
          role: 'مطوّرة واجهات أمامية',
          tech: ['React', 'Tailwind CSS', 'JavaScript'],
          image: '/images/furniture-1.png',
          gallery: [
            '/images/furniture-1.png',
            '/images/furniture-2.png',
            '/images/furniture-3.png',
            '/images/furniture-4.png',
            '/images/furniture-5.png',
          ],
          features: [
            'صفحات لعرض منتجات المفروشات بطريقة متجاوبة وجذابة.',
            'صفحات تفصيلية للمنتجات تتضمن الصور والوصف والأسعار.',
            'إضافة المنتجات إلى سلة التسوق واستعراض محتوياتها.',
            'محاكاة واجهة إتمام عملية الشراء.',
            'تصميم حديث وسهل الاستخدام لتجربة تسوق إلكترونية مريحة.',
          ],
          demo: '#',
          github: '#',
        },
      ],
    },
    contact: {
      eyebrow: 'تواصلي',
      title: 'لنصنع شيئًا جميلًا معًا',
      subtitle: 'لديكِ فكرة مشروع، أو فرصة عمل، أو تريدين فقط إلقاء التحية؟ بريدي مفتوح دائمًا.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      linkedin: 'لينكدإن',
      github: 'جيت هب',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        success: 'شكرًا لكِ! تمّ إرسال رسالتك.',
      },
    },
    footer: {
      role: 'مطوّرة Flutter و React',
      rights: 'جميع الحقوق محفوظة.',
      madeWith: 'صُمّم وبُني بـ',
    },
    language: { toggle: 'English' },
  },
};

// =====================================================================
//  CONTACT INFO — EDIT HERE
//  Change these values to update your email, phone, location, socials
//  everywhere in the site.
// =====================================================================
export const contactInfo = {
  email: 'sarakhodari336@gmail.com',
  phone: '+963956576033',
  location: 'Damascus, Syria',
  linkedin: 'https://www.linkedin.com/in/sarah-alkhudari-b624a8392',
  github: 'https://github.com/sarahkhudari',
  resume: '/resume.pdf',         // TODO: drop resume.pdf in /public
};
