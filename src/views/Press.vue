<template>
    <div class="container">
        <div class="box">
            <h1 class="center">In the Press</h1>
            <p class="pad20">
                Find below a few articles that talk about my work in the crypto space: just Google <span class="accent">"Mario Mazzola Crypto"</span> for more articles.
            </p>
            <div class="content">

                <Article 
                    v-for="(article, index) in articles" 
                    :publication="article.name"
                    :child="index+1"
                    :img="article.pic"
                    :url="article.link"
                />

            </div>
        </div>
    </div>
</template>

<script>

    import { ref } from 'vue';
    import Article from '../components/Article.vue';
    import elToque from '../assets/images/eltoque.png'
    import ct from '../assets/images/ct.png'
    import decrypt from '../assets/images/decrypt.png'
    import acn from '../assets/images/acn.png'

    export default {
        components: { Article },
        setup(){
            const articles = ref([
                {
                    name: 'ACN', 
                    link: 'http://www.acn.cu/cultura/93878-bloguerias-de-mayo-espacio-ideal-para-comunicar-en-redes-fotos',
                    pic: acn
                },
                {
                    name: 'CoinTelegraph', 
                    link: 'https://cointelegraph.com/news/cuba-s-exploding-crypto-interest-comes-amid-an-absence-of-regulation',
                    pic: ct
                },
                {
                    name: 'Decrypt', 
                    link: 'https://decrypt.co/es/26436/cuba-tiene-plataforma-intercambio-bitcoin-btc-p2p-qbita',
                    pic: decrypt
                },
                {
                    name: 'ElToque', 
                    link: 'https://eltoque.com/enviar-dinero-a-cuba-remesas-con-criptomonedas',
                    pic: elToque
                },
            ])
            
            return { articles };
        }
    }
</script>

<style scoped>
    .content{
        margin: auto;
        margin-top: 40px;
        margin-bottom: 40px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: minmax(360px, auto);
        width: 95%;
        grid-gap: 10px;
    }

    img{
        width: 100%;
        height: 220px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    h4{margin-top: 60px;}

    @media screen and (max-width: 992px){
        .content{
            display: block;
        }

        img{
            height: 260px;
        }
    }
</style>