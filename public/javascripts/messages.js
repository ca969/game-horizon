class UI {
  constructor() {
    this.icons = document.querySelectorAll(".fa-star");
    this.links = document.querySelectorAll(".fav-button");
    this.cartCounter = document.querySelector(".cart-badge");
    this.resultContainer = document.querySelector(".result-container");
  }

  displayMessage(message, index, count, multiple) {
    var link = this.links[index];
    var icon = this.icons[index];
    var counter = Number(this.cartCounter.textContent);
    // var amount = Number(this.amount.textContent);
    var div = document.createElement("div");
    console.log(counter);

    console.log(message);

    div.className = "display-message";
    div.style.fontSize = "1rem";
    div.style.padding = "10px";
    div.style.width = "60vw";
    div.style.height = "80px";
    div.style.position = "fixed";
    div.style.bottom = "10%";
    div.style.right = "0";
    div.style.zIndex = "555";
    div.style.transition = "0.3s";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.borderRadius = "5px";


    if (message === "Please login to use this feature") {
      div.innerHTML = `${message}`;
      div.style.color = "#ff0015";
      div.style.border = "2px solid #ff0015";
      div.style.background = "#0a0a0a";
    } else if (message === "Item added to favorites") {
      // Message styling
      div.innerHTML = `${message}`;
      div.style.color = "#22ef0b";
      div.style.border = "2px solid #22ef0b";
      div.style.background = "#0a0a0a";
     
      // // Icon Styling
      // icon.style.color = "#f28a02";
      // icon.classList.add("fas");
      // icon.classList.remove("far");
      // Change link href
    } else if (message === "Item already added to favorites") {
      div.innerHTML = `${message}`;
      div.style.color = "#ff0015";
      div.style.border = "2px solid #ff0015";
      div.style.background = "#0a0a0a";
      div.style.padding = "20px";
    } else if (message === "Item added to cart") {
      // Update cart counter
      counter++;
      this.cartCounter.innerHTML = `${counter}`;

      // Message styling
    
      div.innerHTML = `${message}`;
      div.style.color = "#22ef0b";
      div.style.border = "2px solid #22ef0b";
      div.style.background = "#0a0a0a";
    } else if (multiple === true) {
      counter = counter + Number(count);
      this.cartCounter.innerHTML = `${counter}`;
      // Message styling
      div.innerHTML = `${message}`;
      div.style.color = "#22ef0b";
      div.style.border = "2px solid #22ef0b";
      div.style.background = "#0a0a0a";
    } else if (message === "Sucessfully decremented") {
      counter--;
      this.cartCounter.innerHTML = `${counter}`;
    } else if (message === "Please add item to cart to continue") {
      div.innerHTML = `${message}`;
      div.style.color = "#ff0015";
      div.style.border = "2px solid #ff0015";
      div.style.background = "#0a0a0a";
    } else if (message === "Item removed from favorites") {
      document.querySelectorAll("#favorite-element")[index].remove();

      div.innerHTML = `${message}`;
      div.style.color = "#ff0015";
      div.style.border = "2px solid #ff0015";
      div.style.padding = "20px";
      div.style.background = "#0a0a0a";
    }

    document.body.appendChild(div);

    setTimeout(function() {
      div.remove();
    }, 3000);
  }

  orderController(message, index) {
    var count = document.querySelectorAll("#totalQty")[index].textContent;
    console.log(count);
    var amount = document.querySelectorAll("#amount")[index].textContent;
    console.log(amount);
    // Calculate price of single item
    var price = Number(amount) / Number(count);
    console.log(price);
    // Cart counter
    var counter = Number(this.cartCounter.textContent);
    // Get total item price
    var amounts = Number(
      document.querySelectorAll("#amount")[index].textContent
    );
    // Get order info
    var info = document.querySelectorAll(".order-info")[index];

    // Get checkout total
    var total = Number(document.querySelector(".total-amount").textContent);
    // Get item quantity
    var quantity = Number(
      document.querySelectorAll("#totalQty")[index].textContent
    );

    if (message === "Succesfully decremented") {
      if (quantity === 1) {
        // document.querySelector(".shopping-cart")[index].style.display = "none";
        document.querySelectorAll(".order-info")[index].remove();
        // Update cart count
        counter--;
        this.cartCounter.innerHTML = `${counter}`;

        // Update checkout total
        total = total - price;
        document.querySelector(".total-amount").textContent = total;
      } else {
        // Update item quantity
        quantity--;
        document.querySelectorAll("#totalQty")[index].textContent = quantity;
        // Update cart count
        counter--;
        this.cartCounter.innerHTML = `${counter}`;
        // Update total item price
        amounts = amounts - price;
        document.querySelectorAll("#amount")[index].textContent = amounts;
        // Update checkout total
        total = total - price;
        document.querySelector(".total-amount").textContent = total;
      }
    } else if (message === "Succesfully incremented") {
      // Update item quantity
      quantity++;
      document.querySelectorAll("#totalQty")[index].textContent = quantity;
      // Update cart count
      counter++;
      this.cartCounter.innerHTML = `${counter}`;
      // Update total item price
      amounts = amounts + price;
      document.querySelectorAll("#amount")[index].textContent = amounts;
      // Update checkout total
      total = total + price;
      document.querySelector(".total-amount").textContent = total;
    } else if (message === "Succesfully removed") {
      // Calculate remaining price
      total = total - amounts;
      document.querySelector(".total-amount").textContent = total;
      // Update cart counter
      counter = counter - quantity;
      this.cartCounter.innerHTML = `${counter}`;
      // Remove order
      info.remove();
    }
  }

  displaySearchResult(result, message) {
    var resultContainer = this.resultContainer;
    console.log(resultContainer);
    var searchRow = document.querySelector(".search-row");
    resultContainer.innerHTML = "";

    // var resultLink = document.createElement("div");
    // resultLink.style.width = "90%";
    // resultLink.style.height = "100px";
    // resultLink.style.position = "fixed";
    // resultLink.style.background = "red";
    // resultLink.style.top = "30%";
    // resultLink.style.right = "0";
    // resultLink.style.zIndex = "5000";

    // if (result) {

    // }
    if (message) {
      resultContainer.innerHTML = `<p>${message}</p>`;
    }

   else if (result.length === 0) {
      resultContainer.innerHTML = `<p>No Match Found</p>`;
    } else {
      console.log(result);

      for (var games of result) {
        // console.log(games.title);
        // console.log(games.imagePath);
        var gameLink = document.createElement("a");
        var gameImage = document.createElement("img");
        var gameTitle = document.createElement("p");

        gameImage.style.width = "250px";
        gameImage.style.height = "auto";
        gameImage.src = `${games.imagePath}`;

        gameTitle.textContent = `${games.title}`;
        
        gameLink.className = "game-search-item";
        gameLink.href = "/shop/" + games.title;
        gameLink.style.textDecoration = "none";
        gameLink.style.color = "white";
        gameLink.style.margin = "10px";
        


        gameLink.appendChild(gameImage);
        gameLink.appendChild(gameTitle);

        resultContainer.appendChild(gameLink);
      }
    }

    // console.log(link);

    // console.log(gameInfo);
    // var resultLink = document.createElement("a");
    // resultLink.textContent =  gameInfo;

    // resultLink.style.width = "90%";
    // resultLink.style.height = "100px";
    // resultLink.style.position = "fixed";
    // resultLink.style.background = "red";
    // resultLink.style.top = "10%";
    // resultLink.style.right = "0";
    // resultLink.style.zIndex = "5000";
    // console.log(result);
    // var games = document.createElement("p");
    // games.innerHTML = result;
    // document.body.appendChild(resultLink);
  }
}
