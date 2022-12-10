
<template>
    <section class="full-width-dimmer">
        
    
    <div class="checkout-conteiner" :class="modalOpen">
        
        <section class="checkout-header">
            <h1 class="order-title">Order options</h1>
            <h1 class="close-checkout-btn">X</h1>

        </section>
        <hr>
        
           
            <div class="PKFZREU">
                <div class="flex flex-between flex-items-center gig-mini-info">
                    <div class="F4HBtqu">Single order</div>
                    <span class="flex flex-col">${{gig.price}}</span>
                </div>
            </div>



        
        <section class="order-total-wrapper">
            
        
        <div class="ii7ZaAL">
            <div class="CddSubE">
                <span class="text-display-2">
                    <div class="flex flex-col">
                        <span class="m-b-8">
                            <span class="font-size-32">
                                ${{gig.price}}
                            </span>
                            <span class="text-normal tbody-6 m-l-8">for 1st order</span>
                        </span>
                        <span class="tbody-6 text-normal">From 2nd order, pay
                            <b>₪274.00/month for 3 months</b>
                        </span>
                    </div>
                </span>
            </div>
            <div class="tbody-6 CWqLIG3">
                <ul class="flex gap-10 column">
                    <li class="flex flex-between Eootruk text-bold">1st order: Starts now
                        <span>₪288.42</span>
                    </li>
                    <li class="flex flex-between Eootruk">2nd order: 08 Jan 2023
                        <span>
                            <span class="tbody-7 text-bold y6T6tgU">-5%</span>
                            ₪274.00
                        </span>
                    </li>
                    <li class="flex flex-between Eootruk">3rd order: 08 Feb 2023
                        <span>
                            <span class="tbody-7 text-bold y6T6tgU">-5%</span>
                            ₪274.00</span>
                    </li>
                </ul>
            </div>
            <ul class="tbody-6 text-semi-bold CWqLIG3 gap-10">
                <li class="flex flex-items-center _7vsKc2B">
                    <span class="nFghBOe Al0CMyF" aria-hidden="true" style="width: 16px; height: 16px;"><svg width="18"
                            height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.75 1C0.75 0.585786 1.08579 0.25 1.5 0.25H16.5C16.9142 0.25 17.25 0.585786 17.25 1V4C17.25 4.41421 16.9142 4.75 16.5 4.75H12.25V10C12.25 10.2883 12.0847 10.5511 11.8249 10.676C11.565 10.8009 11.2566 10.7658 11.0315 10.5857L9 8.96047L6.96852 10.5857C6.74339 10.7658 6.43496 10.8009 6.17511 10.676C5.91526 10.5511 5.75 10.2883 5.75 10V4.75H1.5C1.08579 4.75 0.75 4.41421 0.75 4V1ZM7.25 4.75V8.43953L8.53148 7.41435C8.80539 7.19522 9.19461 7.19522 9.46852 7.41435L10.75 8.43953V4.75H7.25ZM2.25 3.25V1.75H15.75V3.25H2.25ZM2.5 5.25C2.91421 5.25 3.25 5.58579 3.25 6V14.25H14.75V6C14.75 5.58579 15.0858 5.25 15.5 5.25C15.9142 5.25 16.25 5.58579 16.25 6V15C16.25 15.4142 15.9142 15.75 15.5 15.75H2.5C2.08579 15.75 1.75 15.4142 1.75 15V6C1.75 5.58579 2.08579 5.25 2.5 5.25Z">
                            </path>
                        </svg></span><span class="m-l-12">Basic Package</span>
                </li>
                <li class="flex flex-items-center _7vsKc2B"><span class="nFghBOe Al0CMyF" aria-hidden="true"
                        style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
                            </path>
                            <path d="M9 4H7v5h5V7H9V4z"></path>
                        </svg></span><span class="m-l-12">{{gig.daysToMake}}-day delivery</span></li>
                <li class="flex flex-items-center _7vsKc2B"><span class="nFghBOe Al0CMyF" aria-hidden="true"
                        style="width: 16px; height: 16px;"><svg width="16" height="16" viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z">
                            </path>
                            <path
                                d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z">
                            </path>
                        </svg>
                    </span>
                    <span class="m-l-12">Unlimited revisions</span>
                </li>
            </ul>
        </div>
        </section>
        <section class="botom-btn-section">
        <button class="checkout-cmp-btn" @click="">Continue (${{gig.price}})</button>
        <div class="botom-section-txt">You won't be charged yet</div>
        </section>
        
    </div>
    </section>
    
</template>


<script>

export default {
    name: 'checkOut',
    components: {},
    data() {
        return {};
    },
    props: {
        gig: null,
        modalOpen:"",
  },


    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};

</script>

<!-- <style>
.checkout-conteiner {
    margin-left: 50px;
    width: 530px;
    height: 90vh;
}

.checkout-header {
    font-size: 16px;
    line-height: 24px;
}

.F4HBtqu {
    color: #404145;
    font-weight: 600;
    padding: rem(12px) 0;
    border: 1px solid green;

    /* &:hover{
        border: 1px solid ;
    } */

}

.PKFZREU {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    background-color: #fff;
    border: 1px solid #dadbdd;
    border-radius: 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #404145;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center;
    margin-bottom: 12px;
    padding: 20px;
    width: 100%;
    margin: 0;
    outline: 0;
}

.asNFhyE {
    border-color: #1dbf73;
    border-width: 2px;
    cursor: default;
    padding: 19px;
}

.flex-items-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.iZnzrBK {
    padding: 0;
}

.eGIcTVJ {
    border-top: 1px solid #dadbdd;
    color: #404145;
    font-size: 14px;
    padding-top: 20px;
    width: 100%;
}

.ii7ZaAL {
    background-color: #f5f5f5;
    border-radius: 8px;
    color: #404145;
    padding: 32px;
}

.CWqLIG3,
.CddSubE {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.text-display-2 {
    color: #404145;
    font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 700;
}

.m-b-8 {
    margin-bottom: 8px;
}

.tbody-6,
.text-body-2 {
    font-size: 14px;
    line-height: 21px;
}

.CWqLIG3 {
    border-top: 1px solid #dadbdd;
    margin-top: 24px;
    padding-top: 24px;
}

.flex-between {
    justify-content: space-between;
}

.flex-col {
    flex-direction: column;

}

.gap-10 {
    gap: 10px;
}

.font-size-32 {
    font-size: 32px;
}
</style> -->