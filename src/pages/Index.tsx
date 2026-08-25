import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Wrench, Droplets, Package, Trash2, Phone, MapPin, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dang Chang Air</h1>
              <p className="text-xs text-muted-foreground">แดงช่างแอร์</p>
            </div>
          </div>
          <Button variant="default" size="sm">
            <Phone className="w-4 h-4 mr-2" />
            ติดต่อเรา
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                บริการแอร์ครบครัน สำหรับบ้านและธุรกิจของคุณ
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                ติดตั้ง ทำความสะอาด ซ่อมแซม และถอดแอร์ระดับมืออาชีพ ด้วยทีมงานที่มีประสบการณ์และเชื่อถือได้ในจังหวัดภูเก็ต
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  โทรติดต่อ
                </Button>
                <Button size="lg" variant="outline">
                  ดูบริการเพิ่มเติม
                </Button>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center">
              <Droplets className="w-32 h-32 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              บริการของเรา
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              เรามอบบริการแอร์ที่ครบครันและเชื่อถือได้ สำหรับทุกความต้องการของคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Installation */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">ติดตั้งแอร์</h4>
              <p className="text-muted-foreground text-sm">
                ติดตั้งแอร์ใหม่ด้วยมาตรฐานสูง สำหรับบ้าน ออฟฟิศ และสถานประกอบการ
              </p>
            </Card>

            {/* Cleaning */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">ทำความสะอาด</h4>
              <p className="text-muted-foreground text-sm">
                ทำความสะอาดแอร์อย่างลึกซึ้ง ช่วยให้ทำงานได้ดีและประหยัดพลังงาน
              </p>
            </Card>

            {/* Repair */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">ซ่อมแซม</h4>
              <p className="text-muted-foreground text-sm">
                ซ่อมแซมแอร์ที่เสีย เปลี่ยนอะไหล่ และบำรุงรักษาเป็นระยะ
              </p>
            </Card>

            {/* Dismantling */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Trash2 className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">ถอดแอร์</h4>
              <p className="text-muted-foreground text-sm">
                ถอดแอร์อย่างปลอดภัย เหมาะสำหรับย้ายบ้านหรือปรับปรุงห้อง
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center">
              <Clock className="w-32 h-32 text-primary/30" />
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                ทำไมต้องเลือกแดงช่างแอร์
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ทีมงานมืออาชีพ</h4>
                    <p className="text-muted-foreground text-sm">มีประสบการณ์หลายปีในการบริการแอร์</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ราคาเหมาะสม</h4>
                    <p className="text-muted-foreground text-sm">บริการคุณภาพสูงด้วยราคาที่ยุติธรรม</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">บริการรวดเร็ว</h4>
                    <p className="text-muted-foreground text-sm">ตอบสนองอย่างไว และสำเร็จตามเวลา</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ปลอดภัยและเชื่อถือได้</h4>
                    <p className="text-muted-foreground text-sm">ใช้วัสดุคุณภาพและปฏิบัติตามมาตรฐาน</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">ติดต่อเราวันนี้</h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              พร้อมให้บริการแอร์ของคุณ ติดต่อแดงช่างแอร์ได้ทุกวัน ตอบสนองรวดเร็วและมืออาชีพ
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/80">โทรศัพท์</p>
                  <p className="text-xl font-semibold">+66 (XX) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/80">ที่ตั้ง</p>
                  <p className="text-xl font-semibold">จังหวัดภูเก็ต</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/80">เวลาทำการ</p>
                  <p className="text-xl font-semibold">7:00 - 18:00 น.</p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              โทรเราตอนนี้
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg">Dang Chang Air</h3>
              </div>
              <p className="text-white/70 text-sm">บริการแอร์ครบครันสำหรับภูเก็ต</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">บริการ</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>ติดตั้งแอร์</li>
                <li>ทำความสะอาด</li>
                <li>ซ่อมแซม</li>
                <li>ถอดแอร์</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ติดต่อ</h4>
              <p className="text-white/70 text-sm mb-2">โทรศัพท์: +66 (XX) XXX-XXXX</p>
              <p className="text-white/70 text-sm">ภูเก็ต ประเทศไทย</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/60 text-sm">
              © 2024 Dang Chang Air. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
