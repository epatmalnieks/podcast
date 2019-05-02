<template>
<div>
  <h2>Shop</h2>
  <p>
    Check out our entire <a class="amazon" href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3A78%25+Sports+Apparel&fbclid=IwAR0wzEkeeiB5Bk9v3EC8hC0nGeH4E2zxyVSxqhAttm0nSFCPIq5Q090Nuf8&ref=w_bl_sl_s_ap_web_7141123011">Amazon store</a>, or
    select an item below!
    Each item has multiple colors to choose from. T-Shirt sizes run a little small, so you may want to order one size bigger. All other items should fit normally. They usually take about 6 days from being printed to arriving at your doorstep.
  </p>
  <p class="thankYou">
    Thank you for your support!
  </p>
  <div class="store">
    <a class="shirtContainer" href="https://www.amazon.com/78-Sports-Apparel-Podcast-T-Shirt/dp/B07R2QXMQ6/ref=sr_1_1?fbclid=IwAR0wzEkeeiB5Bk9v3EC8hC0nGeH4E2zxyVSxqhAttm0nSFCPIq5Q090Nuf8&qid=1556763484&refinements=p_4%3A78%25%2BSports%2BApparel&s=apparel&sr=1-1&customId=B07537NG8H&th=1">
      <div class="shirtContainer">
        <img class="shirt" alt="78% Sports T-Shirt" src="../assets/images/tShirt.png" />
        <p>
          T-Shirt
        </p>
        <p>
          $16
        </p>
      </div>
    </a>
    <a class="shirtContainer" href="https://www.amazon.com/78-Sports-Podcast-Pullover-Hoodie/dp/B07QZLRXDN/ref=sr_1_3?fbclid=IwAR0wzEkeeiB5Bk9v3EC8hC0nGeH4E2zxyVSxqhAttm0nSFCPIq5Q090Nuf8&qid=1556763484&refinements=p_4%3A78%25+Sports+Apparel&s=apparel&sr=1-3">
      <div class="shirtContainer">
        <img class="shirt" alt="78% Sports Hoody" src="../assets/images/hoody.png" />
        <p>
          Pullover Hoodie
        </p>
        <p>
          $28
        </p>
      </div>
    </a>
    <a class="shirtContainer" href="https://www.amazon.com/78-Sports-Podcast-Tank-Top/dp/B07QZLRXF3/ref=sr_1_2?fbclid=IwAR0wzEkeeiB5Bk9v3EC8hC0nGeH4E2zxyVSxqhAttm0nSFCPIq5Q090Nuf8&qid=1556763484&refinements=p_4%3A78%25%2BSports%2BApparel&s=apparel&sr=1-2&customId=B07MZLTGC7&th=1">
      <div class="shirtContainer">
        <img class="shirt" alt="78% Sports Tank" src="../assets/images/tank.png" />
        <p>
          Tank Top
        </p>
        <p>
          $18
        </p>
      </div>
    </a>
    <a class="shirtContainer" href="https://www.amazon.com/78-Sports-Apparel-Podcast-Sweatshirt/dp/B07QYGSRR9/ref=sr_1_4?fbclid=IwAR0wzEkeeiB5Bk9v3EC8hC0nGeH4E2zxyVSxqhAttm0nSFCPIq5Q090Nuf8&qid=1556763484&refinements=p_4%3A78%25%2BSports%2BApparel&s=apparel&sr=1-4&customId=B078RZW7F5&th=1">
      <div class="shirtContainer">
        <img class="shirt" alt="78% Sports Sweatshirt" src="../assets/images/sweatshirt.png" />
        <p>
          Sweatshirt
        </p>
        <p>
          $28
        </p>
      </div>
    </a>
    <a class="shirtContainer" href="https://www.amazon.com/78-Sports-Podcast-Raglan-Baseball/dp/B07QYGSQJP/ref=sr_1_5?fbclid=IwAR0wzEkeeiB5Bk9v3EC8hC0nGeH4E2zxyVSxqhAttm0nSFCPIq5Q090Nuf8&qid=1556763484&refinements=p_4%3A78%25+Sports+Apparel&s=apparel&sr=1-5">
      <div class="shirtContainer">
        <img class="shirt" alt="78% Sports Baseball Tee" src="../assets/images/baseballTee.png" />
        <p>
          Baseball Tee
        </p>
        <p>
          $22
        </p>
      </div>
    </a>
    <a class="shirtContainer" href="https://www.amazon.com/78-Sports-Podcast-Sleeve-T-Shirt/dp/B07QXDBZMD/ref=sr_1_6?fbclid=IwAR0wzEkeeiB5Bk9v3EC8hC0nGeH4E2zxyVSxqhAttm0nSFCPIq5Q090Nuf8&qid=1556763484&refinements=p_4%3A78%25%2BSports%2BApparel&s=apparel&sr=1-6&customId=B078RYVNKL&th=1">
      <div class="shirtContainer lastShirt">
        <img class="shirt" alt="78% Sports Long Sleeve" src="../assets/images/longSleeve.png" />
        <p>
          Long Sleeve T-Shirt
        </p>
        <p>
          $21
        </p>
      </div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'Shop',
};
</script>

<style lang="scss" scoped>
@import "../styles/views/shop.scss";
</style>
