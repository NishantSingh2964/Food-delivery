import foodModel from "../models/foodModel.js";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"

const getTotalUsers = async(req, res)=>{
    try {
        const user = (await userModel.find({}));
        return res.json({success: true, data: user.length});
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: "Error"})
    }
}

const getTotalItems = async(req, res)=>{
    try {
        const data = (await foodModel.find({}));
        return res.json({success: true, data: data.length});
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: "Error"})
    }
}

const getTotalOrders = async(req, res)=>{
    try {
        const data = (await orderModel.find({}));
        return res.json({success: true, data: data});
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: "Error"})
    }
}

const getTotalRevenue = async (req, res) => {
  try {
    // Only count paid orders
    const orders = await orderModel.find({ payment: true });

    const totalRevenue = orders.reduce((sum, order) => {
      return sum + order.amount;
    }, 0);

    return res.json({
      success: true,
      totalRevenue,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getPendingOrders = async (req, res) => {
  try {
    const pendingOrders = await orderModel.countDocuments({
      status: { $ne: "Delivered" }
    });

    return res.json({
      success: true,
      pendingOrders
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

const getRecentOrders = async (req, res) => {
  try {
    const recentOrders = await orderModel
      .find({})
      .sort({ date: -1 })   
      .limit(5);            

    return res.json({
      success: true,
      data: recentOrders
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};

export {getTotalUsers, getTotalItems, getTotalOrders, getTotalRevenue, getPendingOrders, getRecentOrders};