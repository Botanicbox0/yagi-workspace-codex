# Notifications Spec

## 1. Direction

Notifications exist to reduce scattered communication across KakaoTalk, email, drives, and separate messengers.

MVP should prioritize email and in-app notifications. Kakao integration is planned but not required for MVP.

## 2. Notification channels

MVP:

- in-app notification
- email

Deferred:

- KakaoTalk API
- Slack webhook
- SMS

## 3. Events

Project events:

- client invited
- project created
- board comment added
- mention added
- asset version uploaded
- approval requested
- approval completed
- deadline changed
- project stage changed

Contest events:

- contest requested
- contest published
- submission received
- submission status changed
- judging started
- winner selected

AI events:

- AI suggestion generated
- AI suggestion accepted
- AI suggestion dismissed

## 4. Notification preferences

MVP can be simple:

- immediate in-app
- email for important events only

Important email events:

- invite
- approval request
- deadline changed
- contest published
- submission status changed

## 5. Kakao planning

Kakao should be treated as an integration layer, not a source of truth.

Do not store official approvals only in Kakao. All official decisions must exist in YAGI Workspace database.

Potential Kakao uses:

- comment digest
- approval request link
- deadline reminder
- contest submission reminder
