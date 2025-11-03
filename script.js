function addMessage() {
  // 获取输入框内容
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("msgInput").value.trim();
  const display = document.getElementById("messageDisplay");

  // 检查是否为空
  if (name === "" || message === "") {
    alert("Please enter both name and message.");
    return;
  }

  // 创建新元素并添加到显示区
  const newMsg = document.createElement("p");
  newMsg.innerHTML = `<strong>${name}:</strong> ${message}`;
  display.appendChild(newMsg);

  // 清空输入框
  document.getElementById("nameInput").value = "";
  document.getElementById("msgInput").value = "";
}
function setEvent() {
  const img = document.getElementById("myPhoto");
  img.onclick = function() {
    img.style.width = "100%";       // 占满整行宽度
    img.style.maxWidth = "1200px";  // 防止过大
    img.style.height = "auto";      // 按比例放大
    img.style.transition = "0.5s ease";
    img.style.display = "block";    // 保证独占一行
    img.style.margin = "20px auto"; // 居中显示
  };
}

function initChart() {
  const chart = bb.generate({
    bindto: "#chart",
    data: {
      columns: [
        ["data1", 8, 86, 52, 97, 23],
        ["data2", 26, 6, 70, 1, 54],
        ["data3", 50, 79, 56, 83, 53]
      ],
      type: "spline", // 因为你学号尾号是 6 → Spline
      colors: {
        data1: "#5c6bc0",
        data2: "#42a5f5",
        data3: "#66bb6a"
      }
    },
    axis: {
      x: {
        label: "Index"
      },
      y: {
        label: "Value"
      }
    },
    size: {
      height: 380
    },
    legend: {
      position: "right"
    }
  });
}
