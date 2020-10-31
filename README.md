# Demo test asset trong cocos creator 2.4.2

Đây là example về việc load asset trong cocos

- Thử chuyển scence khi một trong số scene chứa sprite mà load text 32MB
=> Mất thời gian khi chuyển scene mà có chứa texture lớn

Vì vậy example này có màn hình loading để load tất cả các texture cần thiết trước.
Sau đó dữ tham chiếu để texture có thể sử dụng trong các scene tiếp theo
