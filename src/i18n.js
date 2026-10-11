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
      role: 'Software Developer & React Frontend Developer',
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
        'I’m Sarah Alkhudari, a Software Engineering graduate specializing in Flutter mobile development and modern frontend technologies, particularly React.js and TypeScript. I enjoy transforming ideas into intuitive, responsive, and visually engaging digital experiences.',
        'My expertise includes building cross-platform mobile applications, developing interactive web platforms, integrating RESTful APIs, and applying Clean Architecture and Bloc state management. I also have knowledge of backend development using PHP and Laravel, along with requirements analysis, system analysis, and software design.',
        'From AI-powered healthcare applications to commercial web platforms, I’ve worked on projects that combine thoughtful UI/UX design with clean, maintainable code. As the founder and developer of Invite Studio, I’ve gained hands-on experience building and deploying real-world digital products, translating client requirements into functional, user-friendly solutions.'

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
        { name: 'Flutter', icon: 'Smartphone' },
        { name: 'Dart', icon: 'Code2' },
        { name: 'React.js', icon: 'Atom' },
        { name: 'JavaScript', icon: 'Braces' },
        { name: 'TypeScript', icon: 'Code2' },
        { name: 'HTML5 / CSS3', icon: 'Code2' },
        { name: 'Tailwind CSS', icon: 'Palette' },
        { name: 'Laravel', icon: 'Database' },
        { name: 'RESTful APIs', icon: 'Plug' },
        { name: 'Clean Architecture', icon: 'Layers' },
        { name: 'Bloc State Management', icon: 'Workflow' },
        { name: 'Responsive Design', icon: 'LayoutGrid' },
        { name: 'System Analysis', icon: 'GitBranch' },
        { name: 'Requirements Analysis', icon: 'ClipboardList' },
        { name: 'Git / GitHub', icon: 'GitBranch' },
        { name: 'Postman', icon: 'Wrench' },
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
          id: 'invite-studio',
          kind: 'web',
          title: 'Invite Studio',
          description:
            'A commercial platform for creating elegant, interactive digital invitations for weddings and special events. Built with React.js and TypeScript, the platform combines personalized guest experiences, RSVP management, and private client dashboards in a responsive, multilingual interface.',

          role: 'Founder & Frontend Developer',

          tech: [
            'React.js',
            'TypeScript',
            'Vite',
            'Cloudflare Pages',
          ],

          image: '/images/invite-studio.jpg',

          gallery: [
            '/images/i1.jpg',
            '/images/i2.jpg',
            '/images/i3.jpg',
          ],

          features: [
            'Interactive and customizable digital invitation templates.',
            'Personalized invitation links for individual guests.',
            'RSVP tracking and guest list management.',
            'Private client dashboards with attendance statistics.',
            'QR codes for guest check-in.',
            'Multilingual support for Arabic, English, and French with RTL/LTR layouts.',
            'Responsive interfaces optimized for mobile and desktop devices.',
          ],

          demo: 'https://invite-studio-bax.pages.dev',
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
          id: 'dentavision',
          kind: 'mobile',
          title: 'DentaVision',

          description:
            'An AI-powered dental healthcare mobile application developed using Flutter. The app integrates a machine learning model to predict dental diseases from dental images and helps patients connect with the appropriate dentist based on the predicted condition. It also provides appointment booking and management through an intuitive, responsive interface.',

          role: 'Flutter Developer & AI Model Integration',

          tech: [
            'Flutter',
            'Dart',
            'RESTful APIs',
            'AI Model Integration',
          ],

          image: '/images/firstdenta.png',

          gallery: [
            '/images/firstdenta.png',
            '/images/dental-1.jpg',
            '/images/dental-2.jpg',
            '/images/dental-3.jpg',
          ],

          features: [
            'AI-powered dental disease prediction through image analysis.',
            'Integration of a machine learning model for dental disease classification.',
            'Doctor recommendations based on the predicted dental condition and specialization.',
            'Appointment booking and management.',
            'RESTful API integration for communication with backend services.',
            'Responsive and intuitive mobile user interface.',
          ],

          demo: 'https://youtube.com/shorts/H20FJaRzdYQ',
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
      role: 'مطوّرة برمجيات و مطوّرة واجهات React و Flutter',
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
        'أنا سارة الخضري، خريجة هندسة برمجيات ومتخصصة في تطوير تطبيقات الموبايل باستخدام Flutter، وتطوير واجهات الويب الحديثة باستخدام React.js وTypeScript. أستمتع بتحويل الأفكار إلى تجارب رقمية تفاعلية، متجاوبة، وسهلة الاستخدام',
        'امتلك خبرة في تطوير تطبيقات متعددة المنصات، وبناء واجهات ويب تفاعلية، وربط التطبيقات باستخدام RESTful APIs، وتطبيق مبادئ Clean Architecture وإدارة الحالة باستخدام Bloc. كما أمتلك معرفة بتطوير الـBackend باستخدام PHP وLaravel، بالإضافة إلى تحليل المتطلبات والأنظمة وتصميم البرمجيات',
        'عملت على مشاريع متنوعة، من تطبيقات الرعاية الصحية المدعومة بالذكاء الاصطناعي إلى منصات الويب التجارية، مع التركيز على تجربة المستخدم وكتابة كود نظيف وقابل للصيانة. ومن خلال تأسيسي وتطويري لمشروع Invite Studio، اكتسبت خبرة عملية في بناء ونشر منتجات رقمية حقيقية، وتحويل متطلبات العملاء إلى حلول عملية وسهلة الاستخدام.'
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
        { name: 'Flutter', icon: 'Smartphone' },
        { name: 'Dart', icon: 'Code2' },
        { name: 'React.js', icon: 'Atom' },
        { name: 'JavaScript', icon: 'Braces' },
        { name: 'TypeScript', icon: 'Code2' },
        { name: 'HTML5 / CSS3', icon: 'Code2' },
        { name: 'Tailwind CSS', icon: 'Palette' },
        { name: 'Laravel', icon: 'Database' },
        { name: 'RESTful APIs', icon: 'Plug' },
        { name: 'Clean Architecture', icon: 'Layers' },
        { name: 'Bloc State Management', icon: 'Workflow' },
        { name: 'التصميم المتجاوب', icon: 'LayoutGrid' },
        { name: 'تحليل الأنظمة', icon: 'GitBranch' },
        { name: 'تحليل المتطلبات', icon: 'ClipboardList' },
        { name: 'Git / GitHub', icon: 'GitBranch' },
        { name: 'Postman', icon: 'Wrench' },
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
          id: 'invite-studio',
          kind: 'web',
          title: 'Invite Studio',
          description:
            'منصة تجارية لإنشاء دعوات رقمية تفاعلية لحفلات الزفاف والمناسبات الخاصة، تم تطويرها باستخدام React.js وTypeScript. تجمع المنصة بين التصميم الأنيق وتجربة الضيوف المخصصة، مع إمكانية تأكيد الحضور وإدارة المدعوين من خلال لوحات تحكم خاصة بالعملاء، ضمن واجهة متجاوبة ومتعددة اللغات.',

          role: 'المؤسِّسة ومطوّرة الواجهات الأمامية',

          tech: [
            'React.js',
            'TypeScript',
            'Vite',
            'Cloudflare Pages',
          ],
          image: '/images/invite-studio.jpg',

          gallery: [
            '/images/i1.jpg',
            '/images/i2.jpg',
            '/images/i3.jpg',
          ],

          features: [
            'قوالب دعوات رقمية تفاعلية وقابلة للتخصيص.',
            'روابط دعوة مخصصة لكل ضيف.',
            'إدارة قوائم المدعوين وتتبع تأكيد الحضور (RSVP).',
            'لوحات تحكم خاصة بالعملاء مع إحصائيات الحضور.',
            'رموز QR لتسجيل دخول الضيوف إلى المناسبة.',
            'دعم العربية والإنجليزية والفرنسية مع اتجاهي العرض RTL/LTR.',
            'تصميم متجاوب مع الموبايل والكمبيوتر.',
          ],

          demo: 'https://invite-studio-bax.pages.dev',
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
          id: 'dentavision',
          kind: 'mobile',
          title: 'DentaVision',

          description:
            'تطبيق ذكي للرعاية الصحية للأسنان تم تطويره باستخدام Flutter، يدمج نموذج ذكاء اصطناعي لتحليل صور الأسنان والتنبؤ بالأمراض المحتملة. يساعد التطبيق المرضى في الوصول إلى طبيب الأسنان المناسب بناءً على نتيجة التنبؤ واختصاص الطبيب، بالإضافة إلى توفير نظام لحجز المواعيد وإدارتها من خلال واجهة سهلة الاستخدام ومتجاوبة.',

          role: 'مطوّرة Flutter ومسؤولة عن دمج نموذج الذكاء الاصطناعي',

          tech: [
            'Flutter',
            'Dart',
            'RESTful APIs',
            'AI Model Integration',
          ],

          image: '/images/firstdenta.png',

          gallery: [
            '/images/firstdenta.png',
            '/images/dental-1.jpg',
            '/images/dental-2.jpg',
            '/images/dental-3.jpg',
          ],

          features: [
            'تحليل صور الأسنان والتنبؤ بالأمراض باستخدام الذكاء الاصطناعي.',
            'دمج نموذج تعلم آلي لتصنيف أمراض الأسنان.',
            'اقتراح طبيب الأسنان المناسب بناءً على المرض المتوقع واختصاص الطبيب.',
            'حجز المواعيد وإدارتها.',
            'ربط التطبيق بخدمات Backend باستخدام RESTful APIs.',
            'واجهة موبايل متجاوبة وسهلة الاستخدام.',
          ],

          demo: 'https://youtube.com/shorts/H20FJaRzdYQ',
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
