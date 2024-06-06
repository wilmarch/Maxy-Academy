<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TBN Indonesia</title>
    <link rel="icon" href="https://images.squarespace-cdn.com/content/v1/5e71ab9e744c0d5faca1944b/1587370769370-797INGXWBVPV7G2FB8GV/full+circle+logo+-+Copy.jpeg" type="image/png">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Styling for the expanded description */
        .expanded {
            height: auto;
        }
    </style>
</head>

<body class="bg-gray-100">

    <!-- Navigation Bar -->
    <nav class="bg-blue-900 text-white py-4">
        <div class="container mx-auto flex justify-between items-center px-4">
            <a href="#" class="mr-4">
                <img src="https://tbnconference.icmanagement.id/tbn_content/uploads/2023/01/tbn-indonesia-logo-white.png" alt="TBN Indonesia Logo" class="h-12">
            </a>
            <div>
                <a href="#" class="mr-4">Home</a>
                <a href="#" class="mr-4">About</a>
                <a href="#" class="mr-4">Programs</a>
                <a href="#" class="mr-4">Contact</a>
            </div>
        </div>
    </nav>


    <!-- Hero Section -->
    <section class="bg-blue-900 text-white py-16">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-semibold mb-4">Welcome to TBN Indonesia</h1>
            <p class="text-lg">Ini PHP</p>
            <a href="https://youtu.be/Kgrumz_76RI" class="bg-white text-blue-900 font-semibold px-6 py-3 mt-8 inline-block rounded-full">Watch Now</a>
        </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto my-8 px-4">
        <h2 class="text-2xl text-blue-900 font-semibold mb-4">Last Event</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Content Block 1 -->
            <div class="flex items-center">
                <div class="w-1/2 mr-4">
                    <img src="https://tbnindonesia.org/images/transformational-sales-conference-2023-.jpg" alt="Program 1" class="w-full object-cover rounded-lg">
                </div>
                <div class="w-1/2">
                    <div class="p-4">
                        <h3 class="text-xl text-blue-900 font-semibold mb-2">Transformational Sales Conference 2023</h3>
                        <p class="text-gray-600 program-description">It's crucial to adapt to the changing sales landscape in the digital age, and Seth Godin's quote emphasizes the importance of customer-centricity.
                            Digital transformation has indeed shifted the focus towards online sales, but it's essential to remember that serving the customer's needs remains paramount.
                            The Transformational Sales Conference sounds like a great opportunity to explore the evolving world of sales and learn how to provide excellent service in both online and offline contexts.</p>
                    </div>
                </div>
            </div>
            <!-- Content Block 2 -->
            <div class="flex items-center">
                <div class="w-1/2 mr-4">
                    <img src="https://tbnindonesia.org/images/tbn-asia-conference-2023-2.jpg" alt="Program 2" class="w-full object-cover rounded-lg">
                </div>
                <div class="w-1/2">
                    <div class="p-4">
                        <h3 class="text-xl text-blue-900 font-semibold mb-2">TBN Asia Conference 2023</h3>
                        <p class="text-gray-600 program-description">In a world once plagued by environmental degradation and societal inequalities, a transformative movement emerged, igniting a path towards a sustainable future. This narrative follows the lives of four individuals whose passion and dedication became catalysts for change in agriculture, education, green technology, digital innovation, and art and culture.
                            Together, they embarked on a shared mission to harmonize humanity's relationship with the planet and shape a brighter tomorrow.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto my-8 px-4">
        <h2 class="text-2xl text-blue-900 font-semibold mb-4">Last Event</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Program Card 1 -->
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://tbnindonesia.org/images/transformational-sales-conference-2023-.jpg" alt="Program 1" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl text-blue-900 font-semibold mb-2">Transformational Sales Conference 2023</h3>
                    <p class="text-gray-600 program-description">It's crucial to adapt to the changing sales landscape in the digital age, and Seth Godin's quote emphasizes the importance of customer-centricity.
                        Digital transformation has indeed shifted the focus towards online sales, but it's essential to remember that serving the customer's needs remains paramount.
                        The Transformational Sales Conference sounds like a great opportunity to explore the evolving world of sales and learn how to provide excellent service in both online and offline contexts.</p>
                </div>
            </div>
            <!-- Program Card 2 -->
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://tbnindonesia.org/images/tbn-asia-conference-2023-2.jpg" alt="Program 2" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl text-blue-900 font-semibold mb-2">TBN Asia Conference 2023</h3>
                    <p class="text-gray-600 program-description">In a world once plagued by environmental degradation and societal inequalities, a transformative movement emerged, igniting a path towards a sustainable future. This narrative follows the lives of four individuals whose passion and dedication became catalysts for change in agriculture, education, green technology, digital innovation, and art and culture.
                        Together, they embarked on a shared mission to harmonize humanity's relationship with the planet and shape a brighter tomorrow.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Partner Section -->
    <section class="container mx-auto my-8 px-4">
        <h2 class="text-2xl text-blue-900 font-semibold mb-4">Our Partners</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <!-- Partner Card 1 -->
            <?php
            $partners = [
                "https://conference.tbnindonesia.org/assets/images/partners/tdr-one-team.png",
                "https://conference.tbnindonesia.org/assets/images/partners/yss.png",
                "https://conference.tbnindonesia.org/assets/images/partners/ActonInstitute.jpg",
                "https://conference.tbnindonesia.org/assets/images/partners/WHydrocolloids.png",
                "https://conference.tbnindonesia.org/assets/images/partners/actxplorer.png",
                "https://conference.tbnindonesia.org/assets/images/partners/MEEK.jpg",
                "https://conference.tbnindonesia.org/assets/images/partners/Mastereign.png",
                "https://conference.tbnindonesia.org/assets/images/partners/ClarionNewlifeCapital.jpg",
                "https://conference.tbnindonesia.org/assets/images/partners/DamsonCapital-1.jpeg",
                "https://conference.tbnindonesia.org/assets/images/partners/green-hope.jpg",
                "https://conference.tbnindonesia.org/assets/images/partners/solar-nusantara.png",
                "https://conference.tbnindonesia.org/assets/images/partners/the-trans.png"
            ];

            foreach ($partners as $partner) {
                echo '<div class="bg-white rounded-lg overflow-hidden border border-gray-200 relative rounded-tl-lg rounded-tr-lg">';
                echo '<div class="absolute inset-0 border-4 border-white"></div>';
                echo '<img src="' . $partner . '" alt="Partner" class="w-full h-32 object-contain">';
                echo '</div>';
            }
            ?>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-900 text-white py-8">
        <div class="container mx-auto text-center">
            <p>&copy; <?php echo date("Y"); ?> TBN Indonesia. All Rights Reserved.</p>
        </div>
    </footer>

</body>

</html>
