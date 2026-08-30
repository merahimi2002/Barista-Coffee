const PRODUCTS = [
    // قهوه
    {
        category: 'coffee',
        name: 'لاته',
        image: 'Image/product-latte.jpg',
        alt: 'فنجان لاته با لاته‌آرت',
        description: 'اسپرسو با شیر بخارپز و لایه‌ی نازک فوم؛ ملایم و خوش‌عطر.',
        price: '۱۴۵٬۰۰۰'
    },
    {
        category: 'coffee',
        name: 'کاپوچینو',
        image: 'Image/product-cappuccino.jpg',
        alt: 'فنجان‌های کاپوچینو با لاته‌آرت',
        description: 'ترکیب متعادل اسپرسو، شیر و فوم غلیظ با کمی پودر کاکائو.',
        price: '۱۳۵٬۰۰۰'
    },
    {
        category: 'coffee',
        name: 'فلت وایت',
        image: 'Image/product-flat-white.jpg',
        alt: 'فنجان فلت وایت از نمای بالا با لاته‌آرت برگ',
        description: 'اسپرسو با شیر مخملی؛ طعمی پررنگ‌تر از لاته و به همان اندازه لطیف.',
        price: '۱۴۰٬۰۰۰'
    },
    {
        category: 'coffee',
        name: 'آیس لاته',
        image: 'Image/product-iced-latte.jpg',
        alt: 'لیوان آیس لاته با شیر و یخ',
        description: 'شیر سرد و اسپرسو روی یخ؛ انتخاب خنک برای روزهای گرم.',
        price: '۱۶۵٬۰۰۰'
    },
    {
        category: 'coffee',
        name: 'آیس آمریکانو',
        image: 'Image/product-iced-americano.jpg',
        alt: 'لیوان آیس آمریکانو روی پیشخوان',
        description: 'اسپرسو و آب سرد روی یخ؛ ساده، تلخ و خنک.',
        price: '۱۲۵٬۰۰۰'
    },
    {
        category: 'coffee',
        name: 'دانه قهوه تازه‌رست',
        image: 'Image/product-beans.jpg',
        alt: 'کیسه‌ی کنفی پر از دانه‌های قهوه تازه‌رست',
        description: 'دانه‌ی تازه‌رست برای دم‌آوری در خانه؛ عطر کافه باریستا روی میز شما.',
        price: '۲۸۵٬۰۰۰'
    },

    // دمنوش
    {
        category: 'tea',
        name: 'دمنوش نعناع',
        image: 'Image/tea-green.jpg',
        alt: 'دمنوش نعناع با برگ‌های نعناع تازه',
        description: 'خنک و آرامش‌بخش با برگ نعناع تازه؛ همراه خوب پایان یک روز شلوغ.',
        price: '۸۹٬۰۰۰'
    },
    {
        category: 'tea',
        name: 'دمنوش گیاهی',
        image: 'Image/tea-lemon-ginger.jpg',
        alt: 'فنجان دمنوش گیاهی با کیسه‌های دم‌آوری',
        description: 'ترکیب گیاهان خشک؛ ملایم، خوش‌عطر و بدون کافئین.',
        price: '۹۵٬۰۰۰'
    },
    {
        category: 'tea',
        name: 'چای با شیر',
        image: 'Image/tea-milk.jpg',
        alt: 'فنجان چای با شیر در کنار کلوچه',
        description: 'چای سیاه با شیر؛ همراه کلوچه‌ی تازه‌ی روز.',
        price: '۹۸٬۰۰۰'
    },
    {
        category: 'tea',
        name: 'چای سرد لیمو و نعناع',
        image: 'Image/tea-berry.jpg',
        alt: 'چای سرد با برش لیمو و نعناع روی یخ',
        description: 'چای سرد با لیموی تازه و نعناع؛ سرشار از طراوت.',
        price: '۱۱۰٬۰۰۰'
    },
    {
        category: 'tea',
        name: 'دمنوش ادویه‌ای',
        image: 'Image/tea-masala.jpg',
        alt: 'فنجان دمنوش ادویه‌ای با برگ چای و ادویه‌های معطر',
        description: 'ترکیبی از برگ چای و ادویه‌های معطر؛ گرم و پرطعم.',
        price: '۹۵٬۰۰۰'
    },

    // دسر و عصرانه
    {
        category: 'dessert',
        name: 'عصرانه باریستا',
        image: 'Image/product-breakfast.jpg',
        alt: 'چیدمان عصرانه با نان، پنیر، میوه و نوشیدنی داغ',
        description: 'چیدمانی از نان تازه، پنیر، میوه‌ی فصل و مربا؛ همراه نوشیدنی داغ دلخواه.',
        price: '۱۹۵٬۰۰۰'
    },
    {
        category: 'dessert',
        name: 'کیک شکلاتی',
        image: 'Image/dessert-chocolate-cake.jpg',
        alt: 'کیک شکلاتی با گاناش شکلات تلخ',
        description: 'اسفنجی و خوش‌عطر با گاناش شکلات تلخ؛ رفیق همیشگی اسپرسو.',
        price: '۱۹۵٬۰۰۰'
    },
    {
        category: 'dessert',
        name: 'کیک تمشک',
        image: 'Image/dessert-berry.jpg',
        alt: 'برش کیک تمشک با خامه و تمشک تازه',
        description: 'لایه‌های اسفنجی و کرم با تمشک تازه؛ سبک و میوه‌ای.',
        price: '۱۸۵٬۰۰۰'
    },
    {
        category: 'dessert',
        name: 'براونی',
        image: 'Image/dessert-brownie.jpg',
        alt: 'برش‌های براونی با سس شکلات',
        description: 'مغزدار و فاجی با شکلات تلخ؛ همراه مطمئن قهوه.',
        price: '۱۷۵٬۰۰۰'
    },
    {
        category: 'dessert',
        name: 'چیزکیک بلوبری',
        image: 'Image/dessert-cheesecake.jpg',
        alt: 'برش چیزکیک با سس بلوبری',
        description: 'کرمی و لطیف روی بیسکویت، با سس بلوبری خانگی.',
        price: '۲۱۰٬۰۰۰'
    },
    {
        category: 'dessert',
        name: 'تیرامیسو',
        image: 'Image/dessert-tiramisu.jpg',
        alt: 'برش تیرامیسو با پودر کاکائو',
        description: 'لایه‌های بیسکویت آغشته به قهوه و کرم ماسکارپونه.',
        price: '۲۲۵٬۰۰۰'
    }
];