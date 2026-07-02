import React from "react";
import { useParams } from "react-router";
import { Star, ExternalLink, ShieldCheck, Truck } from "lucide-react";
import { products } from "../data/products";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-24 min-h-screen text-white font-sans flex items-center justify-center">
        <h1 className="text-2xl">Product not found</h1>
      </div>
    );
  }

  const amazonPrice = product.amazonPrice;
  const flipkartPrice = product.flipkartPrice;
  const bestPrice = Math.min(amazonPrice, flipkartPrice);
  const bestProvider = amazonPrice <= flipkartPrice ? "Amazon" : "Flipkart";
  
  // Mock price history data
  const generateHistoryData = (basePrice: number) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    return months.map(month => ({
      name: month,
      price: Math.round(basePrice * (1 + (Math.random() * 0.2 - 0.1))) // +/- 10%
    }));
  };

  const chartData = React.useMemo(() => generateHistoryData(bestPrice), [bestPrice]);

  return (
    <main className="pt-24 pb-12 min-h-screen container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Left Column: Image & Basic Info */}
          <div className="w-full lg:w-2/5 p-6 md:p-8 bg-gradient-to-b from-[#1a1a1a] to-black flex flex-col relative rounded-3xl border border-white/10">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/10 shadow-inner">
               <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg shadow-purple-900/40">
                Best Price: ₹{bestPrice.toLocaleString()}
              </Badge>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white leading-tight">{product.name}</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">(4.8/5 based on 2k+ reviews)</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Fast Delivery", "Original", "Warranty"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Details & Chart */}
          <div className="w-full lg:w-3/5 p-6 md:p-8 bg-[#0a0a0a] flex flex-col border border-white/10 rounded-3xl">
            {/* Price Comparison Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className={`p-6 rounded-2xl border transition-all ${bestProvider === 'Amazon' ? 'bg-purple-500/10 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'bg-white/5 border-white/10 opacity-60'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-white flex items-center gap-2 text-lg">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" /> Amazon
                  </span>
                  {bestProvider === 'Amazon' && <Badge variant="secondary" className="bg-purple-500 text-white">CHEAPEST</Badge>}
                </div>
                <div className="text-3xl font-bold text-white font-mono mb-4">₹{amazonPrice.toLocaleString()}</div>
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button size="lg" className="w-full bg-white text-black hover:bg-gray-200 hover:scale-[1.02] transition-transform">
                    Buy on Amazon <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
              </div>

              <div className={`p-6 rounded-2xl border transition-all ${bestProvider === 'Flipkart' ? 'bg-purple-500/10 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'bg-white/5 border-white/10 opacity-60'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-white flex items-center gap-2 text-lg">
                    <div className="w-3 h-3 rounded-full bg-blue-500" /> Flipkart
                  </span>
                  {bestProvider === 'Flipkart' && <Badge variant="secondary" className="bg-purple-500 text-white">CHEAPEST</Badge>}
                </div>
                <div className="text-3xl font-bold text-white font-mono mb-4">₹{flipkartPrice.toLocaleString()}</div>
                <a href={product.flipkartLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button size="lg" className="w-full bg-white text-black hover:bg-gray-200 hover:scale-[1.02] transition-transform">
                    Buy on Flipkart <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Price History Chart */}
            <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 shrink-0">
              <h3 className="text-lg font-medium text-gray-400 mb-6 flex items-center gap-2">
                Price History (Last 6 Months)
              </h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                  <LineChart data={chartData}>
                    <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis 
                      key="xaxis"
                      dataKey="name" 
                      stroke="#666" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <YAxis 
                      key="yaxis"
                      stroke="#666" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                      tickFormatter={(value) => `₹${value/1000}k`}
                    />
                    <Tooltip 
                      key="tooltip"
                      contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                      labelStyle={{ color: '#888' }}
                    />
                    <Line 
                      key="line"
                      type="monotone" 
                      dataKey="price" 
                      stroke="#8B5CF6" 
                      strokeWidth={3}
                      dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4, stroke: '#fff' }}
                      activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Specifications (Mock) */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <ShieldCheck className="text-green-400 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white text-base">1 Year Warranty</h4>
                  <p className="text-gray-400">Official manufacturer warranty included with your purchase.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <Truck className="text-blue-400 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white text-base">Free Delivery</h4>
                  <p className="text-gray-400">Expected delivery by tomorrow if ordered within 4 hrs.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
};
