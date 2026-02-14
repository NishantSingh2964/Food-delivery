import express from 'express'
import { getPendingOrders, getRecentOrders, getTotalItems, getTotalOrders, getTotalRevenue, getTotalUsers } from '../controllers/dashboardController.js';

const dashboardRouter = express.Router();

dashboardRouter.get('/totalusers', getTotalUsers);
dashboardRouter.get('/totalitems', getTotalItems);
dashboardRouter.get('/totalorders', getTotalOrders);
dashboardRouter.get('/totalrevenue', getTotalRevenue);
dashboardRouter.get('/pendingorders', getPendingOrders);
dashboardRouter.get('/recentorders', getRecentOrders);

export default dashboardRouter;

