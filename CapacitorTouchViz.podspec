
  Pod::Spec.new do |s|
    s.name = 'CapacitorTouchViz'
    s.version = '0.0.1'
    s.summary = 'Allows you to see touches on a mobile device.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/mxdmedia/capacitor-touch-viz.git'
    s.author = 'Mark Dobossy'
    s.source = { :git => 'https://github.com/mxdmedia/capacitor-touch-viz.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end